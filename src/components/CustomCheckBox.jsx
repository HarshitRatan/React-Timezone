import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Data from "../jsonData/jsonData.json";

const CustomCheckBox = ({ value }) => {
  const [checkedStatus, setCheckBoxStatus] = React.useState(false);
  React.useLayoutEffect(() => {
    const tempData = Data.filter((data) => data.time === value);
    if (tempData.length > 0) {
      setCheckBoxStatus(true);
    } else {
      setCheckBoxStatus(false);
    }
  }, [value]);
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={checkedStatus} />}
        label={value}
      />
    </FormGroup>
  );
};

export default CustomCheckBox;
