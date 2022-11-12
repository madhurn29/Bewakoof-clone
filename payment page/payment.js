let totalmrp=localStorage.getItem("final-mrp")
document.querySelector("#totalMRP").innerText="₹ "+ totalmrp
let bagdiscount=localStorage.getItem("bag-discount")
document.querySelector("#discount").innerText="₹ "+ bagdiscount
let finalAmount=localStorage.getItem("total-payable")
document.querySelector("#finalPrice").innerText="₹ "+ finalAmount

let x=document.querySelector("#card_Number")


let y=document.querySelector("#expiry_date")

let z=document.querySelector("#cvv")


let a=document.querySelector("#name")



let pay=document.querySelector("#pay")
pay.addEventListener("click",function(){



  

    let cardNumber=x.value
    let expiryDate=y.value
    let cvv=z.value
    let cname=a.value

    console.log(cardNumber,expiryDate,cvv,cname)
    if(cardNumber=="" || expiryDate=="" || cvv=="" || cname==""){
        alert("Please fill all the details")
    }
    else{
        window.location.href ="../payment confirmation/confirm.html"
    }
})

