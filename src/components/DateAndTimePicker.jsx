import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useSelector, useDispatch } from "react-redux";
import { dateAndTimePicker } from "../redux/reduicers/offer/offerSlice";
import useAuth from "../hooks/useAuth";
const DateAndTimePicker = () => {
  const { value } = useSelector((state) => state.offer);
  const { setDate, date } = useAuth();
  const [dateValue, setDateValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setDateValue((prev) => (prev ? newValue : Date | null));
    // dispatch(dateAndTimePicker(dateValue));
    setDate(dateValue);
  };
  //   console.log(
  //     "redux state value",
  //     Object.values(value).forEach((el) => {
  //       return el;
  //     })
  //   );
  //   console.log("date valye", dateValue);

  useEffect(() => {
    for (const key in dateValue) {
      console.log(`key:${key} ${dateValue[key]}`);
    }
  }, [dateValue, date]);
  console.log("date", typeof dateValue);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      {/* {value && <p>Value{value}</p>} */}
    </>
  );
};

export default DateAndTimePicker;
