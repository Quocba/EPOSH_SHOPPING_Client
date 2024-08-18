import React from "react";
import "./Box.scss";

function BoxContainer({
  children,
  property,
  ref,
}: {
  children: any;
  property?: any;
  ref?: any;
}) {
  return (
    <div className={property} ref={ref}>
      {children}
    </div>
  );
}

export default BoxContainer;
