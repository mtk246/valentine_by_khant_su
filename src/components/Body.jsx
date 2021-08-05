import React from "react";
import SelfInfo from "./SelfInfo";
import DayCounter from "./DayCounter";
import OpenWhen from "./OpenWhen";
import SongQuotes from "./SongQuotes";
import Gallery from "./Gallery";

export default function Body() {
  return (
    <div>
      <SelfInfo />
      <DayCounter />
      <OpenWhen />
      <SongQuotes />
      <Gallery />
    </div>
  );
}
