import React from "react";
import Row from "../../row";
import Spinner from "../../spinner";

const DatePicker = () => {
  const years = Array.from({ length: 10 }, (_, i) => i + 2020);
  const days = Array.from({ length: 30 }, (_, i) => {
    return (i + 1).toString().padStart(2, "0");
  });
  const months = Array.from({ length: 12 }, (_, i) => {
    return (i + 1).toString().padStart(2, "0");
  });
  const hours = Array.from({ length: 24 }, (_, i) => {
    return i.toString().padStart(2, "0");
  });
  const minutes = Array.from({ length: 60 }, (_, i) => {
    return i.toString().padStart(2, "0");
  });

  return (
    <Row gap={20}>
      <Row flex={1} alignItems="center">
        <Spinner data={years} label="YYYY" style={{ flex: 1 }} />
        <Spinner data={months} label="MM" style={{ flex: 1 }} />
        <Spinner data={days} label="DD" style={{ flex: 1 }} />
      </Row>
      <Row flex={1} alignItems="center">
        <Spinner data={hours} style={{ flex: 1 }} label="HH" />
        <Spinner data={minutes} style={{ flex: 1 }} label="MM" />
        <Spinner data={["AM", "PM"]} style={{ flex: 1 }} label="AM-PM" />
      </Row>
    </Row>
  );
};

export default DatePicker;
