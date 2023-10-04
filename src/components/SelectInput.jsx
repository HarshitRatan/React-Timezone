import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export default function SelectInput({ timeZone, setTimeZone }) {
  const handleChange = (event) => {
    setTimeZone(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Typography
        variant="subtitle-1"
        style={{ marginBottom: 15, marginLeft: 5 }}
      >
        Timezone :
      </Typography>
      <Select value={timeZone} onChange={handleChange}>
        <MenuItem value={0}>[UTC+05:30] Indian Standard Time (IST)</MenuItem>
        <MenuItem value={1}>[UTC+00:00]</MenuItem>
      </Select>
    </FormControl>
  );
}
