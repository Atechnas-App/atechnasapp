import React from "react";
import { useDispatch } from "react-redux";

export default function CreatePages({ pages, axiosCall, search }) {
  const dispatch = useDispatch();
  function getPageResult(search, b) {
    dispatch(axiosCall(search, b));
  }
  let buttons = [];
  for (let i = 0; i < pages; i++) {
    buttons.push(i);
  }
  return (
    <>
      {buttons.map((b,i) => {
        return <button key={i} onClick={()=>getPageResult(search,b)}>{b+1}</button>;
      })}
    </>
  );
}
