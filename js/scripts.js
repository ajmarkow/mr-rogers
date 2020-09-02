// Business Logic

function checkForMatch(userNumber) {
  let residualArray = [];
  for (let i = 0; i <= userNumber; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      residualArray.push("Won't you be my neighbor?");
    } else if (element.includes(2)) {
      residualArray.push("Boop!");
    } else if (element.includes(1)) {
      residualArray.push("Beep");
    } else {
      residualArray.push(element);
    }
  }
  return residualArray;
}
//User Interface Logic
$(document).ready(function () {
  $("form#usernumbers").submit(function (event) {
    let input = $("input#numberinput").val();
    let outputArray = checkForMatch(input);
    $("#mrrobogersoutput").text(outputArray);
    event.preventDefault();
  });
});
