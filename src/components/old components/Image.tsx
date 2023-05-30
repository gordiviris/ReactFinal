import React from "react";


function Image({ size , source}) {
  let height;
  switch (size) {
    case "s":
    case "small":
    case "sm":
      height = "100px";
      break;
    case "m":
    case "medium":
    case "md":
      height = "300px";
      break;
    case "l":
    case "large":
    case "lg":
      height = "400px";
      break;
    default:
      height = "500px";
  }

  return <img style={{ height ,padding: "20px 20px", }} src={source} />;
}

export default Image;