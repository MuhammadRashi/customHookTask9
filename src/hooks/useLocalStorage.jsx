import { useState } from "react";

export const useLocalStorage = (token) => {
  // const [token, setToken] = useState("");
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    // console.log(text);
  };

  const setItemtoLocal = () => {
    localStorage.setItem(token, text);
    console.log("saved");
  };
  const getItemtoLocal = () => {
    setText(localStorage.getItem(token));
    console.log(text);
  };
  const removeItemtoLocal = () => {
    localStorage.removeItem(token);
  };
  return { handleChange, setItemtoLocal, getItemtoLocal, removeItemtoLocal };
};
