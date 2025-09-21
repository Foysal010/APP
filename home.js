document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-ammount").value);
    const pin = document.getElementById("add-pin").value;
    const availableBlance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const newBalance = availableBlance + amount;
    document.getElementById("available-balance").innerText = newBalance;
  });
