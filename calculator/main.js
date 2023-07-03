
var outputBox = document.getElementById("output");
var inputBox = document.getElementById("input");

var buttons = document.querySelectorAll("#btn");

let myfunc = (data) => {
  switch (data) {
    case "ac":
      inputBox.innerHTML = "";
      outputBox.innerHTML = "0";
      break;
    case "c":
        inputBox.innerHTML = inputBox.innerHTML.substr(0,inputBox.innerHTML.length - 1);
        outputBox.innerHTML = eval(inputBox.innerHTML)=== undefined ? 0 :eval(inputBox.innerHTML) ;
       
        break;
    case "=":
      outputBox.innerHTML = eval(inputBox.innerHTML);
      break;
    default:
      inputBox.innerHTML += data;
  }
};
