var arrop = [];
var operators = ["+", "/", "-", "X", "%"];
let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  document.getElementById("display-screen").value = "";
  arrop = [];
});
function theme() {
  let theme = document.getElementById("switch").checked;
  if (theme == true) {
    document.documentElement.style.setProperty(
      "--body-bg",
      "linear-gradient( 89.7deg,  rgba(0,0,0,1) -10.7%, rgb(23, 42, 58) 88.8% )"
    );
    document.documentElement.style.setProperty(
      "--numbtn-color",
      "rgb(233, 105, 1)"
    );
    document.documentElement.style.setProperty(
      "--fbtn-color",
      "rgb(255, 0, 119)"
    );
    document.documentElement.style.setProperty(
      "--operatorcolor",
      "rgb(157, 9, 255)"
    );
    document.documentElement.style.setProperty("--bgcolor", "rgb(14, 22, 66)");
    document.documentElement.style.setProperty("--box-border", "#9682d8");
    document.documentElement.style.setProperty(
      "--screen-bordercolor",
      "rgb(245, 248, 205)"
    );
    document.documentElement.style.setProperty("--theme-color", "white");
  } else if (theme != true) {
    document.documentElement.style.setProperty(
      "--body-bg",
      "radial-gradient( circle 343px at 46.3% 47.5%,  rgba(242,242,242,1) 0%, rgba(241,241,241,1) 72.9% )"
    );
    document.documentElement.style.setProperty(
      "--numbtn-color",
      "rgb(95, 11, 11)"
    );
    document.documentElement.style.setProperty(
      "--fbtn-color",
      "rgb(2, 119, 55)"
    );
    document.documentElement.style.setProperty(
      "--operatorcolor",
      "rgb(4, 40, 54)"
    );
    document.documentElement.style.setProperty(
      "--bgcolor",
      "rgb(255, 239, 205)"
    );
    document.documentElement.style.setProperty(
      "--box-border",
      "rgb(6, 56, 90)"
    );
    document.documentElement.style.setProperty(
      "--screen-bordercolor",
      "rgb(87, 21, 107)"
    );
    document.documentElement.style.setProperty("--theme-color", "black");
  }
}
function themechange() {
  setTimeout(theme, 700);
}

function operator(z) {
  let display = document.getElementById("display-screen").value;
  if (display != "") {
    let num = parseFloat(display);
    arrop.push(num);
    let symbol = document.getElementById(z).innerHTML;
    document.getElementById("display-screen").value = symbol;
  } else {
    let symbol = document.getElementById(z).innerHTML;
    document.getElementById("display-screen").value = symbol;
  }
}
function deletef() {
  let str = document.getElementById("display-screen").value;
  let str1 = str.substring(0, str.length - 1);
  document.getElementById("display-screen").value = str1;
}

function inputval(y) {
  let display = document.getElementById("display-screen").value;
  let num = document.getElementById(y).innerHTML;

  if (display == "X") {
    arrop.push(display);
    document.getElementById("display-screen").value = num;
  } else if (display == "/") {
    arrop.push(display);
    document.getElementById("display-screen").value = num;
  } else if (display == "+") {
    arrop.push(display);
    document.getElementById("display-screen").value = num;
  } else if (display == "-") {
    arrop.push(display);
    document.getElementById("display-screen").value = num;
  } else if (display == "%") {
    arrop.push(display);
    document.getElementById("display-screen").value = num;
  } else {
    document.getElementById("display-screen").value = display + num;
  }
}

function resultf() {
  let display = document.getElementById("display-screen").value;
  if (display == "X") {
    alert("Invalid Expression");
  } else if (display == "+") {
    alert("Invalid Expression");
  } else if (display == "-") {
    alert("Invalid Expression");
  } else if (display == "/") {
    alert("Invalid Expression");
  } else if (display == "%") {
    alert("Invalid Expression");
  } else {
    arrop.push(display);
    let expression = arrop.toString();
    let expressionnew = expression.split(",");
    let exp = expressionnew.join(" ");
    let x = eval(exp);
    document.getElementById("display-screen").value = x;
  }
}
