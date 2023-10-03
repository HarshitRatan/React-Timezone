import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Header = ({ handlePreviousClick, handleNextClick }) => {
  return (
    <Grid container spacing={2} style={{ marginBottom: 25 }}>
      <Grid
        item
        xs={3}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          startIcon={<ArrowLeftIcon />}
          onClick={handlePreviousClick}
        >
          Previous Week
        </Button>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle-1">Time Now</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          endIcon={<ArrowRightIcon />}
          onClick={handleNextClick}
        >
          Next Week
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
