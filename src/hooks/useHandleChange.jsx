import { useState } from "react";

export const useHandleChange = () => {
  const [state, setState] = useState(false);
     const handleChange = () => {  
    setState(!state);
  };
  return { state, handleChange };
};
