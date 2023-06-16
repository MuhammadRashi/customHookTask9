import { useRef, useState } from "react";

export const useDirection = () => {
  const [dirResult, setDirResult] = useState("ltr");
  const dirRef = useRef(null);
  const dirRefResult = useRef(null);
  const directionChange = () => {
    if (dirResult === "ltr") {
      dirRef.current.dir = "rtl";
    } else {
      dirRef.current.dir = "ltr";
    }
    setDirResult(dirRef.current.dir);
  };

  return { dirRef, directionChange, dirResult, dirRefResult };
};
