import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  const [scrollValue, setScrollValue] = useState(0);


  useEffect(() => {}, [scrollValue]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />
    </div>
  );
};

export default MainContainer;
