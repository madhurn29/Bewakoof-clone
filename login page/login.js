let mobile = document.querySelector("#mobile");

let submit = document.querySelector("#submit");
submit.addEventListener("click", function () {
  let x = mobile.value;
  if (x.length != 10) {
    console.log(x.length);
    alert("Please Enter a valid Number");
  } else {
    localStorage.setItem("number",x)
    window.location.href = "../signup page/signup.html";
    // window.location.href = "./otp.html";
  }
});
