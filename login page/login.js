let mobile = document.querySelector("#mobile");

let submit = document.querySelector("#submit");
submit.addEventListener("click", function () {
  let x = mobile.value;
  if (x.length != 10) {
    console.log(x.length);
    alert("Please Enter a valid Number");
  } else if (x == 1234567890) {
    window.location.href = "./otp.html";
  }
});
