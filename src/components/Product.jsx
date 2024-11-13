import React, { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";


const MainContainer = () => {

  const [scrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);


  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">

      <MenuContainer />

    
    </div>
  );
};

export default MainContainer;
