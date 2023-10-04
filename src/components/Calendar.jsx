import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CustomCheckBox from "./CustomCheckBox";

const Calendar = ({ checkBoxTimeArray, dateValue }) => {
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
          {dateValue.toDateString().slice(0, 3)}
        </Typography>
        <Typography
          variant="subtitle-2"
          style={{ fontWeight: 600, fontSize: "0.8rem" }}
        >
          {dateValue.toDateString().slice(4, 10)}
        </Typography>
        <Typography
          variant="subtitle-2"
          style={{ fontWeight: 600, fontSize: "0.8rem", paddingBottom: 10 }}
        >
          {dateValue.toDateString().slice(11, 15)}
        </Typography>
      </Grid>
      <Grid
        item
        xs={11}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          hyphens: "auto",
        }}
      >
        {dateValue?.getDate() >= new Date().getDate() &&
        dateValue?.getMonth() >= new Date().getMonth() &&
        dateValue?.getFullYear() >= new Date().getFullYear() ? (
          <Box style={{ width: "100%" }}>
            {checkBoxTimeArray?.map((value, index) => (
              <CustomCheckBox key={index} value={value} date={dateValue} />
            ))}
          </Box>
        ) : (
          <p>Past</p>
        )}
      </Grid>
    </Grid>
  );
};

export default Calendar;
