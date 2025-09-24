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
        <Spinner style={{ flex: 1 }} data={years} />
        <Spinner style={{ flex: 1 }} data={days} />
        <Spinner style={{ flex: 1 }} data={months} />
      </Row>
      <Row flex={1} alignItems="center">
        <Spinner style={{ flex: 1 }} data={hours} />
        <Spinner style={{ flex: 1 }} data={minutes} />
        <Spinner style={{ flex: 1 }} data={["AM", "PM"]} />
      </Row>
    </Row>
  );
};

export default DatePicker;
