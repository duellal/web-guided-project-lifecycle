import React, { useState, useEffect } from "react";

const AppFunc = () => {
  const [name, setName] = useState("Warren");
  
  const handleClick = () => {
    setName("Allison");
  };
  console.log('AppFunc: Component Constructed - 1st render starting')

  useEffect(() => {
    console.log('AppFunc: Component Mounted - Part of 1st render')
  }, [])

  useEffect(() => {
    console.log('AppFunc: Component Mounted - Part of 1st render + all other renders')
  })

  console.log('AppFunc: Component Rendered')
  
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
