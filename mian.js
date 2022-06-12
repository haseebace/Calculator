let button = document.querySelector(".btn-submit");
button.addEventListener("click", () => {
  let firstField = parseInt(document.querySelector(".firstfield").value);
  let secondField = parseInt(document.querySelector(".secondfield").value);
  let operators = document.querySelector(".operators").value;

  const printAsnwer = () => {
    let answer = (document.querySelector(".result").value = result);
  };

  let result;
  if (operators === "div") {
    result = firstField / secondField;
  } else if (operators === "multi") {
    result = firstField * secondField;
  } else if (operators === "add") {
    result = firstField + secondField;
  } else if (operators === "sub") {
    result = firstField - secondField;
  } else if (operators === "select") {
    document.querySelector(".operators").style.color = "RGBA(255,0,0,.5)";
    document.querySelector(".operators").style.border =
      "2px solid RGBA(255,0,0,.5)";
    document.querySelector(".operators").style.backgroundColor =
      "RGBA(255,0,0,.1)";
    document.querySelector(".ermsg").innerHTML =
      "Please Select an Operator E.g (/,*,+,-)";
  }
  printAsnwer();
});
