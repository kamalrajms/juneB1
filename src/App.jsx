import React from "react";
import Greeting from "./Greeting";
import Eg from "./Eg";
import DestructuringProps from "./DestructuringProps";
import Externalstyle from "./Externalstyle";
import ModuleStyle from "./ModuleStyle";
import ObjStyle from "./ObjStyle";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import Darkmode from "./Component/Darkmode";
import Field from "./Component/Field";
import RegForm from "./Component/RegForm";
import ConditionFrom from "./Component/ConditionFrom";
import UseEffectHook from "./Component/UseEffectHook";
import Timer from "./Component/Timer";
import StopWatch from "./Component/StopWatch";
import UseEffectAPI from "./Component/UseEffectAPI";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";

export default function App() {
  const name = "rahul";
  const city = "salem";
  const num = "8525656";

  const name2 = "kumar";
  const city2 = "chennai";
  const num2 = "5644";

  const name3 = "kumar kannan";
  const city3 = "namakkal";
  const num3 = "65848484";

  return (
    <>
      <div style={{padding:"20px",border:"2px solid #333"}}>
        <h2>app component--{name}</h2>
        <First name={name}/>
      </div>
      <UseRefHook />
      <UseEffectAPI />
      <StopWatch />
      <Timer />
      <UseEffectHook />
      <ConditionFrom />
      <RegForm />
      <Field />
      <Darkmode />
      <UseStateHook />
      <ListRendering />
      <ConditionalRendering />
      <ObjStyle />
      <ModuleStyle />
      <Externalstyle />
      <h2 style={{ padding: "20px", backgroundColor: "red" }}>
        hello world {name}
      </h2>

      <DestructuringProps
        name={name2}
        name={name}
        name={name3}
        city={city}
        num={num}
      />
      <DestructuringProps name={name2} city={city2} num={num2} />
      <DestructuringProps name={name3} city={city3} num={num3} />

      <Greeting name={name} />
      <Eg />
      {/* <Greeting first={name2}/> */}
    </>
  );
}
