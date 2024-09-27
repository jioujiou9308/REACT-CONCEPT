import React from "react";
import Throttle from "../../component/1-throttling-debounce/Throttle";
import ThrottleFirst from "../../component/1-throttling-debounce/ThrottleFirst";
import Debounce from "@/component/1-throttling-debounce/Debounce";
const Index = () => {
  return (
    <div className=" flex flex-col justify-center items-center m-10">
      <Throttle />
      <br />
      <ThrottleFirst />
      <br />
      <Debounce />
    </div>
  );
};

export default Index;
