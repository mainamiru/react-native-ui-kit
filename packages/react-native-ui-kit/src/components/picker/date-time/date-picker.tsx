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

  return (
    <Row>
      <Spinner data={years} label="Year" style={{ flex: 1 }} />
      <Spinner data={months} label="Month" style={{ flex: 1 }} />
      <Spinner data={days} label="Day" style={{ flex: 1 }} />
    </Row>
  );
};

export default DatePicker;
