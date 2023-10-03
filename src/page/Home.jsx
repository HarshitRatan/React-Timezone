import React from "react";
import Container from "@mui/material/Container";
import SelectInput from "../components/SelectInput";
import Header from "../components/Header";

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
      <Header handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick}/>
      <SelectInput timeZone={timeZone} setTimeZone={setTimeZone} />
    </Container>
  );
};

export default Home;
