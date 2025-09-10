//log in button functionality

document.getElementById("loginbutton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 123456789;
  const pinNUmber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNUmberValue = document.getElementById("pin-number").value;
  const pinNUmberValueConverted = parseInt(pinNUmberValue);


  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNUmberValueConverted === pinNUmber
  ) {
    window.location.href = "./home.html";
  } else {
    alert(`Envalid number or pin`);
  }
});
