import React from "react";
import Container from "@mui/material/Container";
import SelectInput from "../components/SelectInput";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import { times } from "../constants/times";
import { getCurrentAllWeekDays } from "../constants/customFunction";

const Home = () => {
  const [timeZone, setTimeZone] = React.useState(0);
  const [calendarArray, setCalendarArray] = React.useState([]);

  const handlePreviousClick = () => {
    console.log("Previous Click");
  };
  const handleNextClick = () => {
    console.log("Next Clicked");
  };

  React.useLayoutEffect(() => {
    var arr = getCurrentAllWeekDays();
    setCalendarArray(arr);
  }, []);

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
