<template>
  <div class="calendar">
    <div class="header">
      <div class="btn-group">
        <div class="btn btn-prev" @click="handleSwitchPrevYear()">
          <span>«</span>
        </div>
        <div class="btn btn-prev" @click="handleSwitchPrevMonth()">
          <span>‹</span>
        </div>
        <div class="current-date">{{ currentDate }}</div>
        <div class="btn btn-next" @click="handleSwitchNextMonth()">
          <span>›</span>
        </div>
        <div class="btn btn-next" @click="handleSwitchNextYear()">
          <span>»</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="weeks">
        <div v-for="week in weeks" :key="week" class="week-item">
          {{ week }}
        </div>
      </div>
      <div class="day-list">
        <div v-for="(day, index) in dayList" :key="index" :class="[day.type]" class="day-item" @click="toggleSelect(day)">
          <span :class="[{ 'selected': day === currentSelected, 'systemDate': day === currentSystemDate }]">{{ day.day
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticCalendar",
  data() {
    return {
      year: null,
      month: null,
      day: null,
      dayList: [], // 获取需要渲染的日期列表
      weeks: ["日", "一", "二", "三", "四", "五", "六"], // 星期数组
      currentSelected: null,
      currentSystemDate: null,
      curr: null
    };
  },
  computed: {
    currentDate() {
      const year = this.year;
      const month = this.month < 10 ? "0" + this.month : this.month;
      return `${year}年${month}月`;
    },
  },
  created() {
    const { year, month, day } = this.getCurrentDate();
    this.renderDate(year, month, day);
    this.currentSelected = this.dayList.find(date => date.day === day && date.type === 'current-month-day')
    this.currData = this.currentSelected
    // this.toggleSelect(this.dayList.find(date => date.day === day && date.type === 'current-month-day'));
  },
  methods: {
    /**
     * 渲染日期列表
     * @param year 年
     * @param month 月
     * @param day 日
    */
    toggleSelect(day) {
      console.log(day);
      if (day) {
        if (day == this.currData) {
          this.currentSystemDate = null
          this.currentSelected = this.currData
        }
        else {
          this.currentSystemDate = this.currData
          this.currentSelected = day

        }
      } else {
        this.currentSelected = this.currData
      }
    },
    renderDate(year = this.year, month = this.month, day = this.day) {
      // 将当期年月日设置为传入的年月日
      this.year = year;
      this.month = month;
      this.day = day;
      // 设置需要渲染的日期列表
      this.dayList = this.getDayList(year, month);
    },
    /**
     * 生成某年某月的日期列表
     * 由上个月的日期+这个月的日期+下个月的日期组成
     * @param {Object} year 年
     * @param {Object} month 月
     * @returns 数组[日期数组]
     */
    getDayList(year, month) {
      // 生成上个月的日期列表
      const prevMonthDays = this.getPrevMonthDays(year, month);
      // 生成这个月的日期列表
      const currentMonthDays = this.getCurrentMonthDays(year, month);
      // 生成下个月的日期
      const nextMonthDays = this.getNextMonthDays(year, month);

      // 返回日期数组
      return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
    },
    /**
     * 获取某个日期的年月日
     * @returns 对象{年月日}
     */
    getCurrentDate(date = new Date()) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return {
        year,
        month,
        day,
      };
    },
    /**
     * 根据当前年月获取上年的年月
     * @param {Object} year 年
     * @param {Object} month 月
     */
    getPrevYearInfo(year, month) {
      return {
        prevYear: year - 1,
        month,
      };
    },
    /**
     * 根据当前年月获取下年的年月
     * @param {Object} year 年
     * @param {Object} month 月
     */
    getNextYearInfo(year, month) {
      return {
        nextYear: year + 1,
        month,
      };
    },
    /**
     * 根据当前年月获取上个月的年月
     * @param {Object} year 年
     * @param {Object} month 月
     */
    getPrevMonthInfo(year, month) {
      let prevMonthYear = year;
      let prevMonth = month - 1;

      if (prevMonth < 1) {
        prevMonth = 12;
        prevMonthYear -= 1;
      }

      return {
        prevMonthYear,
        prevMonth,
      };
    },
    /**
     * 根据当前年月获取下个月的年月
     * @param {Object} year 年
     * @param {Object} month 月
     */
    getNextMonthInfo(year, month) {
      let nextMonthYear = year;
      let nextMonth = month + 1;

      if (nextMonth > 12) {
        nextMonth = 1;
        nextMonthYear += 1;
      }

      return {
        nextMonthYear,
        nextMonth,
      };
    },
    /**
     * 获取某年某月最后一天
     * @param year 年
     * @param month 月
     * @returns {number}
     */
    getMonthLastDay(year, month) {
      // 获取下个月的年月
      const { nextMonthYear, nextMonth } = this.getNextMonthInfo(year, month);
      // 获取下个月1号的时间戳
      const firstDayTimeStamp = new Date(
        `${nextMonthYear}/${nextMonth}/1`
      ).getTime();
      // 一天24小时的毫秒数
      const oneDayTimeStamp = 24 * 60 * 60 * 1000;
      // 当月最后一天即为下个月一号减去一天的时间
      return new Date(firstDayTimeStamp - oneDayTimeStamp).getDate();
    },
    /**
     * 获取上个月月末的日期列表
     * @param {Object} year 年
     * @param {Object} month 月
     */
    getPrevMonthDays(year, month) {
      // 获取上个月的年月
      const { prevMonthYear, prevMonth } = this.getPrevMonthInfo(year, month);
      // 获取上个月的最后一天
      const prevMonthLastDay = this.getMonthLastDay(prevMonthYear, prevMonth);
      // 获取这个月第一天
      const date = new Date(`${year}/${month}/1`);
      // 获取这个月第一天是星期几
      const week = date.getDay();

      const days = [];
      // 生成上个月月末的日期列表
      for (let i = week - 1; i >= 0; i--) {
        // 从头加入
        days.push({
          type: "prev-month-day", // 类型
          year: prevMonthYear, // 年
          month: prevMonth, // 月
          day: prevMonthLastDay - i, // 显示的日
        });
      }

      return days;
    },
    /**
     * 获取某年某月的日期列表
     * @param {Object} year 年
     * @param {Object} month 月
     */
    getCurrentMonthDays(year, month) {
      // 获取当前月的最后一天
      const currentMonthLastDay = this.getMonthLastDay(year, month);
      const days = [];

      for (let i = 1; i <= currentMonthLastDay; i++) {
        days.push({
          type: "current-month-day", // 类型
          active: false, // 是否点击选中
          year, // 年
          month, // 月
          day: i, // 显示的日
        });
      }

      return days;
    },
    /**
     * 获取下个月月初的日期列表
     * @param {Object} year 年
     * @param {Object} month 月
     */
    getNextMonthDays(year, month) {
      // 获取当前月的最后一天
      const currentMonthLastDay = this.getMonthLastDay(year, month);
      // 获取下个月的年和月
      const { nextMonthYear, nextMonth } = this.getNextMonthInfo(year, month);
      // 获取当前月最后一天是星期几
      const week = new Date(`${year}/${month}/${currentMonthLastDay}`).getDay();

      const days = [];
      let day = 0;
      // 生成下个月月初的日期列表
      for (let i = week + 1; i <= 6; i++) {
        day++;
        days.push({
          type: "next-month-day",
          year: nextMonthYear,
          month: nextMonth,
          day,
        });
      }

      return days;
    },
    /**
     * 点击上一年
     */
    handleSwitchPrevYear() {
      const { prevYear, month } = this.getPrevYearInfo(this.year, this.month);
      this.renderDate(prevYear, month);
    },
    /**
     * 点击下一年
     */
    handleSwitchNextYear() {
      const { nextYear, month } = this.getNextYearInfo(this.year, this.month);
      this.renderDate(nextYear, month);
    },
    /**
     * 点击上个月
     */
    handleSwitchPrevMonth() {
      const { prevMonthYear, prevMonth } = this.getPrevMonthInfo(
        this.year,
        this.month
      );
      this.renderDate(prevMonthYear, prevMonth);
    },
    /**
     * 点击下个月
     */
    handleSwitchNextMonth() {
      const { nextMonthYear, nextMonth } = this.getNextMonthInfo(
        this.year,
        this.month
      );
      this.renderDate(nextMonthYear, nextMonth);
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #3464e0;

.calendar {
  background-color: #fff;
}

.header {
  padding: 0 12px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;

  .current-date {
    text-align: center;
    font-size: 15px;
    padding: 10px 35px;
    color: #030303;
  }

  .btn-group {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      color: #606266;
      text-align: center;
      box-sizing: border-box;
      font-weight: 500;
      width: 34px;
      height: 26px;
      font-size: 25px;
    }
  }
}

.body {
  padding: 10px 12px 0px;
  border-bottom: 1px solid #eee;

  .weeks {
    display: flex;
    font-size: 14px;
    padding: 10px 0;

    .week-item {
      flex: 1;
      text-align: center;
    }
  }

  .day-list {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;

    .day-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14.285%;
      height: 42px;
      text-align: center;
      padding: 12px 0;
      font-size: 14px;
      color: #c8c8c8;

      &.current-month-day {
        color: #171717;
      }

      .selected {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        border-radius: 5px;
        background-color: #165DFF;
        color: white;
        padding: 10px;
      }

      .systemDate {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        border-radius: 5px;
        background-color: white;
        padding: 10px;
        border: 2px solid #165DFF;
        color: black;
      }


      // &.active {
      //   .text {
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //     width: 30px;
      //     height: 35px;
      //     border-radius: 100%;
      //     box-sizing: border-box;
      //     background-color: #ddd;
      //     padding: 14px 0;
      //   }
      // }

      // &.active {
      //   .text {
      //     position: relative;
      //   }
      // }
    }
  }
}
</style>
