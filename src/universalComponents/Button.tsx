import React from "react";
type ButtonPropsType = {
  name: string;
  callback: () => void;
};

export const Button = (props: ButtonPropsType) => {
  const { name, callback } = props;
  const OnClickButtonHandler = () => {
    callback();
  };
  return (
    <div>
      <button onClick={OnClickButtonHandler}>{name}</button>
    </div>
  );
};
