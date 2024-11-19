import React, { memo } from "react";

const MemorizedChild = (props) => {
  console.log("child render");
  return (
    <div>
      {/* {props.arrayNumbers.map((number) => {
        return <div key={number}>{number}</div>;
      })} */}
    </div>
  );
};

export default memo(MemorizedChild);
