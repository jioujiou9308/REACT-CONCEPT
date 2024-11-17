import React, { memo } from "react";

const MemoizedChild = (props) => {
  console.log("MemoizedChildren component render");
  return (
    <div>
      <div>Hello, {props.number}</div>
      <button onClick={props.alert}>Alert the message</button>
    </div>
  );
};

export default memo(MemoizedChild);
