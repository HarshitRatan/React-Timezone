import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Data from "../jsonData/jsonData.json";
import moment from "moment";

const CustomCheckBox = ({ value, date, timeZone }) => {
  const [checkedStatus, setCheckBoxStatus] = React.useState(false);
  React.useLayoutEffect(() => {
    var formatedDate = moment(date).format("YYYY-MM-DD").toString();
    const tempData = Data.filter(
      (dataValue) => dataValue.date === formatedDate && dataValue.time === value
    );
    if (tempData.length > 0) {
      setCheckBoxStatus(true);
    } else {
      setCheckBoxStatus(false);
    }
  }, [value, date]);
  return (
    <FormGroup style={{ float: "left" }}>
      <FormControlLabel
        control={<Checkbox checked={checkedStatus} />}
        label={
          timeZone === 0
          ? moment(value, "hh:mm a").utc().format("hh:mm a")
          :
          moment(value, "hh:mm a").format("hh:mm a")
        }
      />
    </FormGroup>
  );
};

export default CustomCheckBox;
