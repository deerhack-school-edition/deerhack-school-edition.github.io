import React from "react";

const SEtrans = ({ className, children, i }) => {
  return (
    <div className={`stg ${className}`} style={{ "--i": i }}>
      {children}
    </div>
  );
};

export default SEtrans;
