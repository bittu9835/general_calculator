let firstnum = document.getElementById("fnumber");
let secondnum = document.getElementById("snumber");
let result;
let clear = document.getElementsByClassName("screen");

const sum = () => {
  result = parseInt(firstnum.value) + parseInt(secondnum.value);
  document.getElementById("result").innerHTML = result;
  document.getElementById("mini-result").innerHTML =
    firstnum.value + " + " + secondnum.value + " = " + result;
  firstnum.value = "";
  secondnum.value = "";
};

const sub = () => {
    result = parseInt(firstnum.value) - parseInt(secondnum.value);
    document.getElementById("result").innerHTML = result;
    document.getElementById("mini-result").innerHTML =
    firstnum.value + " + " + secondnum.value + " = " + result;
    firstnum.value = "";
    secondnum.value = "";
  };

  const mul = () => {
    result = parseInt(firstnum.value) * parseInt(secondnum.value);
    document.getElementById("result").innerHTML = result;
    document.getElementById("mini-result").innerHTML =
    firstnum.value + " + " + secondnum.value + " = " + result;
    firstnum.value = "";
    secondnum.value = "";
  };

  const div = () => {
    result = parseInt(firstnum.value) / parseInt(secondnum.value);
    document.getElementById("result").innerHTML = result;
    document.getElementById("mini-result").innerHTML =
    firstnum.value + " + " + secondnum.value + " = " + result;
    firstnum.value = "";
    secondnum.value = "";
  };

const clr = () => {
    document.getElementById("result").innerHTML = "";
  };
