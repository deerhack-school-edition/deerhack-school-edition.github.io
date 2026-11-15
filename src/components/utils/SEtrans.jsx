import React from "react";

const SET = ({ className, children, i }) => {
  return (
    <div className={`stg fc ${className}`} style={{ "--i": i }}>
      {children}
    </div>
  );
};

export default SET;
