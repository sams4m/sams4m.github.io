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

// looks into the html, finds the first paragraph in the body
//query selector always gives you the first matching selection
const para = document.querySelector("p");
console.log(para);

const allPara = document.querySelectorAll("p");
console.log(allPara);

// const h1 = document.querySelector("h1");
// console.log(h1.textContent);
// h1.textContent = "This is a new heading";

const q1 = document.querySelector("#question1");
console.log(q1.textContent);
q1.textContent = "what is as1 score?";

const q2 = document.querySelector("#question2");
console.log(q2.textContent);
q2.textContent = "what is as2 score?";

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red-style");
q1.classList.add("blue-style");

const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header);
// innerHTML shows the whole tag
console.log(header.innerHTML);
// textContent only shows what is visible
console.log(header.textContent);

// changes the header content
// header.textContent = "My Cat 2";

// // replacing the header as a paragraph
// header.innerHTML = `<p class="blue-style"> This is new para`;

let personality = "ugliest";
let doubt = "doubts";

// += adds to the header
header.innerHTML += `<p class="blue-style"> This is a new para </p>
<p class="red-style"> isn't he the ${personality}! </p>
<p> do you have any ${doubt} </p>`;
