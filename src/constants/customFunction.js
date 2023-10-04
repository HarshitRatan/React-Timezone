import moment from "moment";

export const getCurrentWeekNumber = () => {
  var currentDate = new Date();
  var startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  var weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getWeekStartDaysByWeekNumberAndYear = (weekNumber, currentYear) => {
  var currentWeekStartDate;
  if (weekNumber < 10) {
    currentWeekStartDate = moment(`${currentYear}W0${weekNumber}`).toDate();
  } else {
    currentWeekStartDate = moment(`${currentYear}W${weekNumber}`).toDate();
  }
  return currentWeekStartDate;
};

export const getAllWeekDaysByWeekNumberAndYear = (weekNumber, currentYear) => {
  var currentWeekStartDate = getWeekStartDaysByWeekNumberAndYear(
    weekNumber,
    currentYear
  );
  var allWeekDays = [];
  allWeekDays.push(currentWeekStartDate);
  for (var i = 1; i < 5; i++) {
    var nextDate = moment(currentWeekStartDate).add(i, "days").toDate();
    allWeekDays.push(nextDate);
  }
  return allWeekDays;
};
