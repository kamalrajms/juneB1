import React from "react";
import { Link, Outlet } from "react-router-dom";
import UseIDHook from "../Component/UseIDHook";

export default function About() {
  return (
    <div>
      <h2>About component</h2>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <div className="sub-header">
        <Link to={"website"}>webDev</Link>
        <Link to={"application"}>AppDev</Link>
      </div>
      <Outlet />
    </div>
  );
}
