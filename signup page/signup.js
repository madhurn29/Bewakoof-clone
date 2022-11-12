let cname=document.querySelector("#Name").value
let mobile=document.querySelector("#mobile")
mobile.value=localStorage.getItem("number")
let x=mobile.value
let email=document.querySelector("#mail").value
let pass=document.querySelector("#pass").value

let proceed= document.querySelector("#proceed")
proceed.addEventListener("click",function(){
    let cname=document.querySelector("#Name").value
    
    let email=document.querySelector("#mail").value
    let pass=document.querySelector("#pass").value
    
    if(cname=="" || email==""|| pass==""){
        alert("Please all the details")
    }
    else{
        window.location.href = "../login page/otp.html"
        let details=[]
        let obj={
            name:cname,
            mobile:x,
            email,
            pass
        }
        details.push(obj)
        localStorage.setItem("login-details",JSON.stringify(details))
    }
    
    
    console.log(cname)
})