import React, { useState } from "react";

import Functions from "./Functions"; //Helper functions that help the AppFunctional work correctly.

import axios from "axios";

function App() {
  const [data, setData] = useState({
    coordinates: [2, 2], //The 'coordinates' of D
    index: 4, //The 'index' that 'D' is at.
    errors: "", //Any errors that need to be shown to the user.
    timesMoved: 0, //The amount of times the user has moved.

    formData: {
      input: "", //input of the form.
    },
  });

  //Each time the "D" needs to move.
  function move(evt) {
    const target = evt.target; //target.

    if (Functions("Find", target.name) !== false) {
      //If a corresponding function can be found in the functions folder,
      Functions(target.name, { data, setData }); //Invoke that corresponding function.
    }
  }

  //Each time the input in the form gets changed.
  function onChange(evt) {
    const target = evt.target; //target.

    setData({
      ...data,
      formData: {
        ...data.formData,
        input: target.value, //update the input value.
      },
    });
  }

  //Each time the form gets submitted:
  function onSubmit(evt) {
    evt.preventDefault(); //dont reload the page.

    if (data.formData.input.trim().length > 0) {
      //IF the user input has a value in it.
      const submitButton = document.getElementById("submit");
      submitButton.style.display = "none"; //Hide the button

      let payload = {
        x: data.coordinates[0],
        y: data.coordinates[1],
        steps: data.timesMoved,
        email: data.formData.input,
      };

      const code =
        (payload.x + 1) * (payload.y + 2) * (payload.steps + 1) +
        payload.email.length;

      const name = payload.email.split("@")[0];

      setData({
        //Update the slice of state.
        ...data,
        errors: `${name} win #${code}`, //update the message label
        formData: {
          ...data.formData,
          input: "", //clear the form input.
        },
      });

      setTimeout(() => {
        document.location.reload(); //reload the page.
      }, 3602);
    }
  }

  return (
    <div id="wrapper" className="App functional">
      {/** INFO BAR **/}
      <div className="info">
        <h3 id="coordinates">
          Coordinates ({data.coordinates[0]},{data.coordinates[1]})
        </h3>
        <h3 id="steps">
          You moved {data.timesMoved} {data.timesMoved === 1 ? "time" : "times"}
        </h3>
      </div>
      {/** ------------------ **/}

      {/** The physical box itself: **/}
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => {
          return (
            <div
              key={idx}
              style={{ fontWeight: "bold" }}
              className={`square${idx === data.index ? " active" : ""}`}
            >
              {idx === data.index ? "D" : null}
            </div>
          );
        })}
      </div>
      {/** ------------------ **/}

      {/** Message label / Error input **/}
      <div className="info">
        <h3 id="message">{data.errors}</h3>
      </div>
      {/** ------------------ **/}

      {/** KEYPAD **/}
      <div id="keypad">
        <button id="left" onClick={move} name="LEFT-button">
          LEFT
        </button>
        <button id="up" onClick={move} name="UP-button">
          UP
        </button>
        <button id="right" onClick={move} name="RIGHT-button">
          RIGHT
        </button>
        <button id="down" onClick={move} name="DOWN-button">
          DOWN
        </button>
        <button id="reset" onClick={move} name="RESET-button">
          reset
        </button>
      </div>
      {/** ------------------ **/}

      {/** INPUT FORM **/}
      <form onSubmit={onSubmit}>
        <input
          id="email"
          type="email"
          placeholder="type email" //email input only.
          value={data.formData.input} //Controlled form input.
          onChange={onChange} //Each time the input changes
        ></input>
        <input id="submit" type="submit"></input>
      </form>
      {/** ------------------ **/}
    </div>
  );
}

export default App;
