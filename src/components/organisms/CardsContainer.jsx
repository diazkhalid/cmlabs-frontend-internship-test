import React from "react";
import Card from "../molecules/Card";

export default function CardContainer({ children }) {
  return (
    <div className="flex flex-wrap w-full justify-center items-start gap-3 max-w-7xl px-5">
      {children}
    </div>
  );
}
