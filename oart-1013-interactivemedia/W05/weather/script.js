function checkWeather() {
  let temo = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");

  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("yo its hot");
    body.style.backgroundColor = "pink";
    outer.style.backgroundColor = "crimson";
    outer.style.color = "hotpink";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("its warm");
    body.style.backgroundColor = "limegreen";
    outer.style.backgroundColor = "green";
  } else if (temp.value < 30 && temp.value >= 15) {
    console.log("its nice weather");
    body.style.backgroundColor = "pink";
  } else if (temp.value < 15) {
    console.log("she getting a tad cold");
    body.style.backgroundColor = "aqua";
  }
}
