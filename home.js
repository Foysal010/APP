const validPin = 1234;
const validAccountNumber = "12345678901";

// Resusable Function with parceInt

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

//
//
//
//Fucntion get inner text value
function InnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}
//
//
//

//function set inner text value

function setInnerText(value) {
  const presentValue = document.getElementById("available-balance");
  presentValue.innerText = value;
}

//
//
// Resuable Fucntion just get value

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;

  return inputFieldValue;
}

//
//
// add money button functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("add-ammount");
    const pin = getInputValueNumber("add-pin");
    const availableBalance = InnerText("available-balance");

    //
    //
    // validation
    if (accountNumber != validAccountNumber) {
      alert("invalid account number");
      return;
    }
    if (pin != validPin) {
      alert("Envalid pin");
      return;
    }

    const newBalanace = availableBalance + amount;
    //document.getElementById("available-balance").innerText = newBalanace;
    setInnerText(newBalanace); // using reusable function
  });

//
//
//
// withdraw button functionality
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = getInputValueNumber("withdraw-amount");
  const availableBalance = InnerText("available-balance");
  const accountNumber = getInputValue("account");
  const pin = getInputValueNumber("pinforwithdraw");

  //
  //
  // validation
  if (accountNumber != validAccountNumber) {
    alert("invalid account number");
    return;
  }

  if (pin != validPin) {
    alert("Envalid pin");
    return;
  }

  const newBalanace = availableBalance - withdrawAmount;
  //document.getElementById("available-balance").innerText = newBalanace;
  setInnerText(newBalanace); // using reusable function
});

//
//
//

//Transfer money button functionality

document
  .getElementById("transer-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
      document.getElementById("add-money-parent").style.display = "none";
      document.getElementById("cashout-parent").style.display = "none";
      document.getElementById("transfer-parent").style.display = "block";



  });

//
//
// toggle features

document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
});

document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
});
