import React from "react";
import Container from "@mui/material/Container";
import SelectInput from "../components/SelectInput";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import { times } from "../constants/times";
import {
  getAllWeekDaysByWeekNumberAndYear,
  getCurrentWeekNumber,
  getCurrentYear,
} from "../constants/customFunction";

const Home = () => {
  const [timeZone, setTimeZone] = React.useState(0);
  const [calendarArray, setCalendarArray] = React.useState([]);
  const [weekNumber, setWeekNumber] = React.useState(getCurrentWeekNumber());
  const [year, setYear] = React.useState(getCurrentYear());

  const handlePreviousClick = () => {
    console.log("Previous Click");
    const tempWeek = weekNumber - 1;
    if (tempWeek > 0) {
      setWeekNumber(tempWeek);
    } else {
      setWeekNumber(52);
      const tempYear = year - 1;
      setYear(tempYear);
    }
  };
  const handleNextClick = () => {
    console.log("Next Clicked");
    const tempWeek = weekNumber + 1;
    if (tempWeek <= 52) {
      setWeekNumber(tempWeek);
    } else {
      setWeekNumber(1);
      const tempYear = year + 1;
      setYear(tempYear);
    }
  };

  React.useLayoutEffect(() => {
    const setDataToCalendarArray = setTimeout(() => {
      var arr = getAllWeekDaysByWeekNumberAndYear(weekNumber, year);
      setCalendarArray(arr);
    });
    return () => {
      clearTimeout(setDataToCalendarArray);
    };
  }, [weekNumber, year]);

  return (
    <Container sx={{ marginTop: "50px", marginBottom: "25px" }}>
      <Header
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
      <SelectInput timeZone={timeZone} setTimeZone={setTimeZone} />
      {calendarArray?.length > 0 &&
        calendarArray?.map((value, index) => (
          <Calendar key={index} checkBoxTimeArray={times} dateValue={value} />
        ))}
    </Container>
  );
};

export default Home;
