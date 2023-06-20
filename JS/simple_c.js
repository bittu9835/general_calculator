let firstnum = document.getElementById("fnumber");
let secondnum = document.getElementById("snumber");
let result;
let clear = document.getElementsByClassName("screen");
const ary = [];
const sum = () => {
  result = parseInt(firstnum.value) + parseInt(secondnum.value);
  document.getElementById("result").innerHTML = result;
  let mresulr = firstnum.value + " + " + secondnum.value + " = " + result;
  let number1 = firstnum.value;
  let number2 = secondnum.value;
  let historyR = result;

  const obj = {
    result: historyR,
    number1: number1,
    number2: number2
  }

  ary.push(obj);

  let form = ` `;

  for (let i = 0; i < ary.length; i++) {
    form =
      form +
      `
      <tr>
          <td>${ary[i].number1}</td>
          <td>+</td>
          <td>${ary[i].number2}</td>
          <td>=</td>
          <td>${ary[i].result}</td>
      </tr>`;
  }

  document.getElementById("table").innerHTML = form;
  console.log(form)
  document.getElementById("mini-result").innerHTML = mresulr

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

const history = () => {
  document.getElementById("card").style.display = "block";
};

const historyback = () => {
  document.getElementById("card").style.display = "none";
}

