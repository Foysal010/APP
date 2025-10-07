const validPin = 1234;
const validAccountNumber = "12345678901";
// add money button functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-ammount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

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
    document.getElementById("available-balance").innerText = newBalanace;
  });

//
//
//
// withdraw button functionality
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const accountNumber = document.getElementById("account").value;
  const pin = parseInt(document.getElementById("pinforwithdraw").value);

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
  document.getElementById("available-balance").innerText = newBalanace;
});

// toggle features
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "block";
});
