const validPin = 1234;

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
    if (accountNumber.length < 11) {
      alert("Envalid account number");
      return;
    }

    if (pin != validPin) {
      alert("Envalid pin");
      return;
    }
    const newBalanace = availableBalance + amount;
    document.getElementById("available-balance").innerText = newBalanace;
  });
