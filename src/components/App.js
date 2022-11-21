import React, { useState } from "react";

import "../reset.css";
import "../styles.css";

function App() {
  return (
    <div id="wrapper" className="App functional">
      {/** INFO BAR **/}
      <div className="info">
        <h3 id="coordinates">0,0</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      {/** ------------------ **/}

      {/** The physical box itself: **/}
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => {
          return (
            <div
              key={idx}
              style={{ "font-weight": "bold" }}
              className={`square ${idx === 4 ? "active" : ""}`}
            >
              {idx === 4 ? "D" : null}
            </div>
          );
        })}
      </div>
      {/** ------------------ **/}

      {/** Message label / Error input **/}
      <div className="info">
        <h3 id="message">ERROR HERE</h3>
      </div>
      {/** ------------------ **/}

      {/** KEYPAD **/}
      <div id="keypad">
        <button id="left" name="LEFT-button">
          LEFT
        </button>
        <button id="up" name="UP-button">
          UP
        </button>
        <button id="right" name="RIGHT-button">
          RIGHT
        </button>
        <button id="down" name="DOWN-button">
          DOWN
        </button>
        <button id="reset" name="RESET-button">
          reset
        </button>
      </div>
      {/** ------------------ **/}

      {/** INPUT FORM **/}
      <form>
        <input
          id="email"
          type="email"
          placeholder="type email" //email input only.
          //value={data.formData.input} //Controlled form input.
          // onChange={onChange} //Each time the input changes
        ></input>
        <input id="submit" type="submit"></input>
      </form>
      {/** ------------------ **/}
    </div>
  );
}

export default App;
