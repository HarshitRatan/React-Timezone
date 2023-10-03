import moment from "moment";

const getCurrentWeekNumber = () => {
  var currentDate = new Date();
  var startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  var weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

const getCurrentWeekStartDate = () => {
  var weekNumber = getCurrentWeekNumber();
  var currentYear = new Date().getFullYear();
  const currentWeekStartDate = moment(`${currentYear}W${weekNumber}`).toDate();
  return currentWeekStartDate;
};

export const getCurrentAllWeekDays = () => {
  var currentWeekStartDate = getCurrentWeekStartDate();
  var allWeekDays = [];
  allWeekDays.push(currentWeekStartDate);
  for (var i = 1; i < 5; i++) {
    var nextDate = moment(currentWeekStartDate).add(i, "days").toDate();
    allWeekDays.push(nextDate);
  }
  return allWeekDays;
};
