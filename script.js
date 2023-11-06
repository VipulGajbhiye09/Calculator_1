let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = ""; //init empty string
let arr = Array.from(buttons); //creates array of buttons as forEach works on arrays

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    }
    
    
    else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    }
    
    
    else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1); //remove one digit
      input.value = string;
    }
    
    
    else {
      string += e.target.innerHTML; //main string of numbers
      input.value = string;
    }
  });
});
