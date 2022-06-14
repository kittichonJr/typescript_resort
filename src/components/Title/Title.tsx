import React, { FC } from "react";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
};

export default Title;
