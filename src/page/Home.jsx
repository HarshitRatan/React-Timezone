import React from "react";
import Container from "@mui/material/Container";
import SelectInput from "../components/SelectInput";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import { times } from "../constants/times";
const Home = () => {
  const [timeZone, setTimeZone] = React.useState(0);

  const handlePreviousClick = () => {
    console.log("Previous Click");
  };
  const handleNextClick = () => {
    console.log("Next Clicked");
  };

  return (
    <Container sx={{ marginTop: "50px", marginBottom: "25px" }}>
      <Header
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
      <SelectInput timeZone={timeZone} setTimeZone={setTimeZone} />
      <Calendar checkBoxTimeArray={times} />
    </Container>
  );
};

export default Home;
