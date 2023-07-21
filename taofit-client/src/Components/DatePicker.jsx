import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { useEffect, useState } from "react";

export default function DatePicker({changeDate}) {
  let date = dayjs();
  return (
    
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={date} onChange={(newDate) => changeDate(dayjs(newDate).format('DD.MM.YYYY'))}/>
      </LocalizationProvider>      
    </div>
  );
}