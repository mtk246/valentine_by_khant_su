import React from "react";

export default function DayCounter() {
  return (
    <div class="container-fluid day_counter">
      <h1>We've been together for</h1>

      <div class="counter_days">
        <p class="days"></p>
      </div>

      <div class="row">
        <div class="col counter_person">
          <span class="counter-span person">
            <img src="img/coco.jpg" alt="" />
          </span>
          <span class="counter-span">
            <i class="fas fa-heart"></i>
          </span>
          <span class="counter-span person">
            <img src="img/baby1.jpg" alt="" />
          </span>
        </div>
      </div>

      <div class="counter_seconds">
        <p class="seconds"></p>
      </div>
    </div>
  );
}
