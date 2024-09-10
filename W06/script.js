function checkGrade() {
  // answer 1
  //query selector is extracting the information, which is being read here
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);

  // answer 2
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);

  // calculating the sum
  // let total = parseFloat(a1.value) + parseFloat(a2.value);
  // parsefloat converts it to a number value
  let a1val = parseFloat(a1.value);
  let a2val = parseFloat(a2.value);

  let sum = calcTotal(a1val, a2val);
  console.log("sum is", sum);

  sendRep(sum);
}

function calcTotal(a, b) {
  let total = a + b;

  return total;
}

function sendRep(score) {
  const report = document.querySelector("#report");
  console.log(report);

  if (score > 30) {
    console.log("you got a HD!");
    report.textContent = "you got a HD!";
  } else if (score > 20 && score <= 30) {
    console.log("you got a D!");
    report.textContent = "you got a D!";
  }
}
