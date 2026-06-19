import React, { useContext, createContext, useState } from "react";
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
import ContextForm from "./Context/ContextForm";
import UseReducerCounter from "./Component/UseReducerCounter";
import ReducerForm from "./Component/ReducerForm";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Router/About";
import Home from "./Router/Home";
import Contct from "./Router/Contct";
import Service from "./Router/Service";
import WebDev from "./Router/WebDev";
import AppDev from "./Router/AppDev";
import Blogs from "./Component/Blogs";

export const Pass = createContext();

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

  const [theme, setTheme] = useState("light");
  const data = { name: "react.js" };

  console.log(theme);

  const display = false;

  return (
    <>
      {display && (
        <div>
          <ReducerForm />
          <UseReducerCounter />
          <div style={{ border: "2px solid #333" }}>
            <Pass.Provider value={{ theme, setTheme, data }}>
              <ContextForm />
            </Pass.Provider>
          </div>
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <h2>app component--{name}</h2>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
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
        </div>
      )}
      <BrowserRouter>
        <div className="header">
          <Link to={""}>home</Link>
          <Link to={"/about"}>about </Link>
          <Link to={"/contact"}>contact </Link>
          <Link to={"/service"}>service </Link>
        </div>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="website" element={<WebDev />} />
            <Route path="application" element={<AppDev />} />
          </Route>
          <Route path="/contact" element={<Contct />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blogs/:email/:id" element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
