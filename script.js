/*
              BEGIN
          // Get the display input field
          SET display TO element with id "display"

          // Get all buttons inside the calculator
          SET buttons TO all button elements inside the calculator

          // Loop through each button
          FOR EACH button IN buttons:
              ADD event listener for "click"
                  SET value TO button's inner text

                  IF value IS "=" THEN
                      TRY:
                          Evaluate expression in display
                          UPDATE display with the result
                      CATCH error:
                          DISPLAY "Error" message
                  ELSE IF value IS "C" THEN
                      CLEAR the display
                  ELSE IF value IS "CE" THEN
                      REMOVE the last character from the display
                  ELSE
                      APPEND value to the display

      END
      */

// Get the display input field
const display = document.getElementById("display");
// Get all buttons inside the calculator
const buttons = document.querySelectorAll("button");
// Loop through each button
buttons.forEach((button) => {
  // Add event listener for "click"
  button.addEventListener("click", () => {
    const value = button.textContent;
    // If value is "=" then add event listener
    if (value === "=") {
      try {
        // Evaluate expression in display
        const result = eval(display.value);
        // Update display with the result
        display.value = result;
      } catch (error) {
        // Display error message
        display.value = "Error";
      }
    } else if (value === "x") {
      display.value = display.value.slice(0, -1);
    } else if (value === "CE") {
      // Clear the display
      display.value = "";
    } else if (value === "C") {
      display.value = "0";
    } else if (value === "1/x") {
      display.value = 1 / display.value;
    } else if (value === "√") {
      display.value = Math.sqrt(display.value);
    } else if (value === "x²") {
      display.value = Math.pow(display.value, 2);
    } else {
      // Append value to the display
      display.value += value;
    }
  });
});
