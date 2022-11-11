let totalmrp=localStorage.getItem("final-mrp")
document.querySelector("#totalMRP").innerText="₹ "+ totalmrp
let bagdiscount=localStorage.getItem("bag-discount")
document.querySelector("#discount").innerText="₹ "+ bagdiscount
let finalAmount=localStorage.getItem("total-payable")
document.querySelector("#finalPrice").innerText="₹ "+ finalAmount