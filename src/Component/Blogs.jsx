import React from "react";
import { useParams } from "react-router-dom";

export default function Blogs() {
  const { email, id } = useParams();
  return (
    <div>
      <h2>Blog detailes</h2>
      <p>email:{email}</p>
      <p>Id:{id}</p>
    </div>
  );
}
