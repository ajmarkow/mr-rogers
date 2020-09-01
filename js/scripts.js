// Business Logic
let residualarray = [];
var usernumber = parseInt($("input#numberinput").val());
console.log(usernumber);

function populateArray() {
  for (let index = 0; index <= usernumber; index += 1) {
    return residualarray.push(index);
  }
}

function checkForMatch() {
  for (let i = 0; i <= usernumber; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      return residualarray.push("Won't you be my neighbor?");
    } else if (element.includes(2)) {
      return residualarray.push("Boop!");
    } else if (element.includes(1)) {
      return residualarray.push("Beep");
    } else {
      return residualarray.push(element);
    }
  }
  return residualarray;
}

//User Interface Logic

populateArray();
checkForMatch();
console.log(residualarray);
$("#mrrobogersoutput").text(residualarray);
