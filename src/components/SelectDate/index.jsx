import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "../../redux/features/date";
import { setDate } from "../../redux/features/date";
import cl from "./selectDate.module.css";

function SeletDate() {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const [month, setMonth] = useState(date.month);
  const [year, setYear] = useState(date.year);

  const handleChange = (e) => {
    if (e.target.name === "select-year") {
      setYear(e.target.value);
      dispatch(setDate({ year: +e.target.value, month: +month }));
    }
    if (e.target.name === "select-month") {
      setMonth(e.target.value);
      dispatch(setDate({ year: +year, month: +e.target.value }));
    }
  };

  return (
    <div className={cl.selectDate}>
      <select name="select-year" onChange={handleChange} value={year}>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <select name="select-month" onChange={handleChange} value={month}>
        <option value="1">ЯНВ</option>
        <option value="2">ФЕВ</option>
        <option value="3">МАР</option>
        <option value="4">АПР</option>
        <option value="5">МАЙ</option>
        <option value="6">ИЮН</option>
        <option value="7">ИЮЛ</option>
        <option value="8">АВГ</option>
        <option value="9">СЕН</option>
        <option value="10">ОКТ</option>
        <option value="11">НОЯ</option>
        <option value="12">ДЕК</option>
      </select>
    </div>
  );
}

export default SeletDate;
