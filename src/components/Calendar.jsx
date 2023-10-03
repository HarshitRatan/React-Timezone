import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomCheckBox from "./CustomCheckBox";

const Calendar = ({ checkBoxTimeArray }) => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: 25,
        backgroundColor: "#ffffff99",
        borderRadius: "1rem",
      }}
    >
      <Grid
        item
        xs={1}
        style={{
          borderRight: "2px solid #0000002e",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle-1"
          style={{ color: "#b91313ed", fontWeight: 800 }}
        >
          Monday
        </Typography>
        <Typography variant="subtitle-1" style={{ fontWeight: 600 }}>
          02/25
        </Typography>
      </Grid>
      <Grid
        item
        xs={11}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {checkBoxTimeArray?.map((value, index) => (
          <CustomCheckBox key={index} value={value} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Calendar;
