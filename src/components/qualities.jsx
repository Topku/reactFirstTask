import React from "react";

const Qualities = (props) => {
  const getBadgeClasses = (color) => {
    let classes = "badge m-2 ";
    classes += "bg-";
    classes += color;
    return classes;
  };
  return (
    <div key={props._id} className={getBadgeClasses(props.color)}>
      {props.name}
    </div>
  );
};

export default Qualities;
