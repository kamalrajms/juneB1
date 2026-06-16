import React from "react";
import Second from "./Second";

export default function First({name}) {
  return (
    <div style={{padding:"20px",border:"2px solid #333"}}>
      <h2>First component---{name}</h2>
      <Second name={name}/>
    </div>
  );
}
