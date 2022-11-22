//All functions needed to help the main function are located here:

export default function FUNCTIONS(call, data) {
  /** --------- FUNCTIONS ------------- **/
  const functions = {
    //  ---------

    "UP-button": function (val) {
      //-----               -------
      //When the up buton is clicked on
      //-----               -------
      const { data, setData } = val;
      if (data.index - 3 >= 0) {
        //IF the next spot is located inside of the square then
        setData({
          //Update the slice of state
          ...data,
          index: data.index - 3,
          errors: "",
          coordinates: [data.coordinates[0], data.coordinates[1] - 1],
          timesMoved: data.timesMoved + 1,
        });
      } else {
        //ELSE, the next idx is not in the square
        setData({
          //Update the slice of state
          ...data,
          errors: "You can't go up",
        });
      }
    },

    //---------     ---------

    "DOWN-button": function (val) {
      //-----               -------
      //When the down buton is clicked on
      //-----               -------
      const { data, setData } = val;
      if (data.index + 3 < 9) {
        //IF the next spot is located inside of the square then
        setData({
          //Update the slice of state
          ...data,
          index: data.index + 3,
          errors: "",
          coordinates: [data.coordinates[0], data.coordinates[1] + 1],
          timesMoved: data.timesMoved + 1,
        });
      } else {
        //ELSE, the next idx is not in the square
        setData({
          //Update the slice of state
          ...data,
          errors: "You can't go down",
        });
      }
    },

    //---------     ---------

    "RIGHT-button": function (val) {
      //-----               -------
      //When the right buton is clicked on
      //-----               -------
      const { data, setData } = val;
      if (data.index + 1 < 9 && data.coordinates[0] < 3) {
        //IF the next spot is located inside of the square then
        setData({
          //Update the slice of state
          ...data,
          index: data.index + 1,
          errors: "",
          coordinates: [data.coordinates[0] + 1, data.coordinates[1]],
          timesMoved: data.timesMoved + 1,
        });
      } else {
        //ELSE, the next idx is not in the square
        setData({
          //Update the slice of state
          ...data,
          errors: "You can't go right",
        });
      }
    },

    //---------     ---------

    "LEFT-button": function (val) {
      //-----               -------
      //When the left buton is clicked on
      //-----               -------
      const { data, setData } = val;
      if (data.index - 1 > -1 && data.coordinates[0] > 1) {
        //IF the next spot is located inside of the square then
        setData({
          //Update the slice of state
          ...data,
          index: data.index - 1,
          errors: "",
          coordinates: [data.coordinates[0] - 1, data.coordinates[1]],
          timesMoved: data.timesMoved + 1,
        });
      } else {
        //ELSE, the next idx is not in the square
        setData({
          //Update the slice of state
          ...data,
          errors: "You can't go left",
        });
      }
    },

    //---------     ---------

    "RESET-button": function (val) {
      //-----               -------
      //When the reset buton is clicked on
      //-----               -------
      const { data, setData } = val;

      //Reset all of the data in the slice of state.
      setData({
        ...data,
        index: 4, //reset index to middle.
        coordinates: [2, 2], //reset coord.
        timesMoved: 0, //reset times moved.
        errors: "", //clear errors
      });
    },

    //-----Add more functions here:
    //----
    //--
  };

  //Used to look for functions in the 'functions' folder:
  functions.Find = function (func) {
    if (functions[func] !== null) {
      return true; //If the function can be found return true
    }

    return false; //If the function cannot be found return false.
  };
  //-------------------------------------//

  //Start:
  for (let funcName in functions) {
    //Look for the function in the folder
    if (funcName === call) {
      const funcData = functions[call](data); //Invoke the function.
      return funcData; //Return any returned data.
    }
  }

  console.log(call, "is not a valid Function.");
  return false; //The function was not found.
}
