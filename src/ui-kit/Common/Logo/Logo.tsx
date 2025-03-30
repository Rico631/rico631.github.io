import React from "react";
import World from "./World.svg";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={World} alt="World" width="50" height="50" />
    </div>
  );
};

export default Logo;