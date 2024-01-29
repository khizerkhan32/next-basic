"use client";
import React from "react";

export default function page({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Student detail</h1>
      <h3> Name: {params.student}</h3>
    </div>
  );
}
