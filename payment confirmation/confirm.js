let otp1 = document.querySelector("#otpNumber1");
let otp2 = document.querySelector("#otpNumber2");
let otp3 = document.querySelector("#otpNumber3");
let otp4 = document.querySelector("#otpNumber4");

let number=localStorage.getItem("number")
document.querySelector("#phone").innerText=number

let login = document.querySelector("#otpsubmit");
login.addEventListener("click", function () {
  let a = otp1.value;
  let b = otp2.value;
  let c = otp3.value;
  let d = otp4.value;
  console.log(a, b, c, d);
  if (a == 1 && b == 2 && c == 3 && d == 4) {
    // <a href=""></a>
    window.location.href = "./thank.html";
    
  } else {
    alert("Incorrect OTP");
  }
});
