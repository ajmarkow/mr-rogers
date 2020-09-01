// Business Logic
let residualarray = [];
// var usernumber = $("input#numberinput").val();
// console.log(usernumber);

function populateArray(usernumber) {
  for (let index = 0; index <= usernumber; index += 1) {
    residualarray.push(index);
  }
  console.log("array populated");
}

function checkForMatch(usernumber) {
  for (let i = 0; i <= usernumber; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      residualarray.push("Won't you be my neighbor?");
    } else if (element.includes(2)) {
      residualarray.push("Boop!");
    } else if (element.includes(1)) {
      residualarray.push("Beep");
    } else {
      residualarray.push(element);
    }
  }
  return residualarray;
}

//User Interface Logic
$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    let usernumber = $("input#numberinput").val();
    populateArray(usernumber);
    checkForMatch(usernumber);
    console.log(residualarray);
    $("#mrrobogersoutput").text(residualarray);
    event.preventDefault();
  });
});
