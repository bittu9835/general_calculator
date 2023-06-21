let firstnum = document.getElementById("fnumber");
let operators = document.querySelectorAll('.btn');
let secondnum = document.getElementById("snumber");
let result;
let clear = document.getElementsByClassName("screen");

const ary = [];

const sum = () => {
  result = parseInt(firstnum.value) + parseInt(secondnum.value);
  document.getElementById("result").innerHTML = result;
  let mresulr = firstnum.value + " + " + secondnum.value + " = " + result;
  let historyresult = firstnum.value + " + " + secondnum.value;
  document.getElementById("mini-result").innerHTML = mresulr
  const historyobj = {
    result: result,
    argument: historyresult
  }
  ary.push(historyobj);

  let form = ` `;
  for (let i = 0; i < ary.length; i++) {
    form = form +
      `<div class="out1">${ary[i].result}</div>
   <div class="out2">${ary[i].argument}</div>`
  }
  document.getElementById("table").innerHTML = form;
  firstnum.value = "";
  secondnum.value = "";
};


const sub = () => {
  result = parseInt(firstnum.value) - parseInt(secondnum.value);
  document.getElementById("result").innerHTML = result;
  let mresulr = firstnum.value + " - " + secondnum.value + " = " + result;
  let historyresult = firstnum.value + " - " + secondnum.value;
  document.getElementById("mini-result").innerHTML = mresulr
  const historyobj = {
    result: result,
    argument: historyresult
  }
  ary.push(historyobj);

  let form = ` `;
  for (let i = 0; i < ary.length; i++) {
    form = form +
      `<div class="out1">${ary[i].result}</div>
   <div class="out2">${ary[i].argument}</div>`
  }
  document.getElementById("table").innerHTML = form;
  firstnum.value = "";
  secondnum.value = "";
};

const mul = () => {
  result = parseInt(firstnum.value) * parseInt(secondnum.value);
  document.getElementById("result").innerHTML = result;
  let mresulr = firstnum.value + " * " + secondnum.value + " = " + result;
  let historyresult = firstnum.value + " * " + secondnum.value;
  document.getElementById("mini-result").innerHTML = mresulr
  const historyobj = {
    result: result,
    argument: historyresult
  }
  ary.push(historyobj);

  let form = ` `;
  for (let i = 0; i < ary.length; i++) {
    form = form +
      `<div class="out1">${ary[i].result}</div>
   <div class="out2">${ary[i].argument}</div>`
  }
  document.getElementById("table").innerHTML = form;
  firstnum.value = "";
  secondnum.value = "";
};

const div = () => {
  result = parseInt(firstnum.value) / parseInt(secondnum.value);
  document.getElementById("result").innerHTML = result;
  let mresulr = firstnum.value + " / " + secondnum.value + " = " + result;
  let historyresult = firstnum.value + " / " + secondnum.value;
  document.getElementById("mini-result").innerHTML = mresulr
  const historyobj = {
    result: result,
    argument: historyresult
  }
  ary.push(historyobj);

  let form = ` `;
  for (let i = 0; i < ary.length; i++) {
    form = form +
      `<div class="out1">${ary[i].result}</div>
   <div class="out2">${ary[i].argument}</div>`
  }
  document.getElementById("table").innerHTML = form;
  firstnum.value = "";
  secondnum.value = "";
};



const clr = () => {
  document.getElementById("result").innerHTML = "";
  document.getElementById("mini-result").innerHTML = "";
};

const history = () => {
  document.getElementById("card").style.display = "block";
};

const historyback = () => {
  document.getElementById("card").style.display = "none";
}

const historydelete = () =>{
  document.getElementById("table").innerHTML ='';

}

