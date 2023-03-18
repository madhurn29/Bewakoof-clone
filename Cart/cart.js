let cartData=JSON.parse(localStorage.getItem("cart_data"))
let container=document.querySelector("#cart-products")
let finalPrice;
let finalMRP;
let saved;
document.querySelector("#itemNumbers").innerText=cartData.length+" items"
console.log(cartData)
diplayCartData(cartData)
function diplayCartData(data){

    let totalPayPrice=0
    let mrp=0
    let savedmrp=0
    container.innerHTML=""
    data.forEach((elem,index) => {
        let productCard=document.createElement("div")
        productCard.class="productCard"

        let productInfoBox=document.createElement("div")

        let productInfo=document.createElement("div")

        let imageBox=document.createElement("div")

        let image=document.createElement("img")
        image.src=elem.main_img

        let title=document.createElement("p")
        title.innerText=elem.title

        let PayPrice=document.createElement("p")
        PayPrice.innerText="₹ " +elem.offPrice
        PayPrice.id="hello"

        totalPayPrice+= Number(elem.offPrice)
        finalPrice=totalPayPrice

        mrp+=Number(elem.price)
        finalMRP=mrp
        let price=document.createElement("p")

        price.innerText="You saved ₹ " +(elem.price-elem.offPrice)+"!"
        
        savedmrp+=(elem.price-elem.offPrice)
        saved=savedmrp

        let qbtnbox=document.createElement("div")

        let sizebtn=document.createElement("select")
        

        let opt0=document.createElement("option")
        opt0.innerText="Size: S"
        let opt1=document.createElement("option")
        opt1.innerText="S"
        let opt2=document.createElement("option")
        opt2.innerText="M"
        let opt3=document.createElement("option")
        opt3.innerText="L"
        let opt4=document.createElement("option")
        opt4.innerText="XL"

        let qbtn=document.createElement("select")
        let qopt0=document.createElement("option")
        qopt0.innerText="Qty: 1"
        qopt0.value=1

        qbtn.addEventListener("change",function(){
            
            let selected=qbtn.value
            console.log(selected)

                elem.quantity=+selected

            localStorage.setItem("cart_data",JSON.stringify(cartData))

            priceChange()
            
        })
        

        let qopt2=document.createElement("option")
        qopt2.innerText="2"
        qopt2.value=2

        let qopt3=document.createElement("option")
        qopt3.innerText="3"
        qopt3.value=3

        let qopt4=document.createElement("option")
        qopt4.innerText="4"
        qopt4.value=4

        let removeBOx=document.createElement("div")

        let removeBtn=document.createElement("button")
        removeBtn.innerText="Remove"
        removeBtn.addEventListener("click",function(){
            
            removeData(data,index)
            priceChange()
        })

        let wishlistBtn=document.createElement("button")
        wishlistBtn.innerText="Move to Wishlist"
        
        sizebtn.appendChild(opt0)
        // sizebtn.appendChild(opt1)
        sizebtn.appendChild(opt2)
        sizebtn.appendChild(opt3)
        sizebtn.appendChild(opt4)
        
        qbtn.appendChild(qopt0)
        // qbtn.appendChild(qopt1)
        qbtn.appendChild(qopt2)
        qbtn.appendChild(qopt3)
        qbtn.appendChild(qopt4)

        qbtnbox.append(sizebtn,qbtn)
        removeBOx.append(removeBtn,wishlistBtn)
        imageBox.append(image)
        productInfo.append(title,PayPrice,price,qbtnbox)
        productInfoBox.append(productInfo,imageBox)
        productCard.append(productInfoBox,removeBOx)
        container.append(productCard)

        document.querySelector("#itemNumbers").innerText=cartData.length+" items"
    });
// console.log(totalPayPrice)
    
}

function removeData(data,index){
    data.splice(index,1)
    localStorage.setItem("cart_data",JSON.stringify(data))
    diplayCartData(cartData)
    document.querySelector("#itemNumbers").innerText=cartData.length+" items"
}
console.log(finalPrice)
console.log(finalMRP)
console.log(saved)

document.querySelector("#Total_Price").innerText=finalMRP || "0"
localStorage.setItem("final-mrp",finalMRP) 
document.querySelector("#bag_discount").innerText=saved || "0"
localStorage.setItem("bag-discount",saved)
document.querySelector("#sub_total").innerText=finalPrice || "0"
localStorage.setItem("total-payable",finalPrice)
document.querySelector("#saving").innerText="You are saving on this order ₹ "+saved
document.querySelector("#final_amount").innerText="₹ "+ (finalPrice || "0")


document.querySelector("#toPay").addEventListener("click",function(){
    window.location.href="../payment page/payment.html"
})


function priceChange(){
    var updatedTotalPrice=0
    var updatedTotalMRP=0

    var singleProductPrice=0
    var singleProductMRP=0
    let updatedCartData=JSON.parse(localStorage.getItem("cart_data"))
  
    updatedCartData.forEach(elem => {
        updatedTotalPrice += Number(elem.quantity)*Number(elem.offPrice)
        updatedTotalMRP +=Number(elem.quantity)*Number(elem.price)

        // singleProductMRP=elem.quantity*elem.price
        // singleProductPrice=elem.quantity*elem.offPrice

        // let x= document.querySelector("#hello")
        // x.innerText=singleProductPrice
    });
    console.log(updatedTotalPrice,"x")
    document.querySelector("#final_amount").innerText="₹ "+ updatedTotalPrice

    document.querySelector("#Total_Price").innerText=updatedTotalMRP

    document.querySelector("#bag_discount").innerText=updatedTotalMRP-updatedTotalPrice

    document.querySelector("#sub_total").innerText=updatedTotalPrice

    document.querySelector("#saving").innerText="You are saving on this order ₹ "+(updatedTotalMRP-updatedTotalPrice)

    localStorage.setItem("final-mrp",updatedTotalMRP)
    localStorage.setItem("bag-discount",(updatedTotalMRP-updatedTotalPrice))
    localStorage.setItem("total-payable",updatedTotalPrice)

    // PayPrice.innerText="₹ " +singleProductPrice
   
}