let productPageDAta=JSON.parse(localStorage.getItem("clicked-product"))
console.log(productPageDAta)

let loggedin=localStorage.getItem("islogged")
if(loggedin){
  document.querySelector("#islogged").innerText="User"
}

function displaydata(){
    let mainImage=document.querySelector("#img-0")
    mainImage.src=productPageDAta[0].main_img
    
    let Image1=document.querySelector("#img-1")
    Image1.src=productPageDAta[0].img1
    
    let Image2=document.querySelector("#img-2")
    Image2.src=productPageDAta[0].img2
    let Image3=document.querySelector("#img-3")
    Image3.src=productPageDAta[0].img3
    let Image4=document.querySelector("#img-4")
    Image4.src=productPageDAta[0].img4
    let Image5=document.querySelector("#img-5")
    Image5.src=productPageDAta[0].img5
    
    let brandName=document.querySelector("#brand_name")
    brandName.innerText=productPageDAta[0].brand
    
    let title=document.querySelector("#title")
    title.innerText=productPageDAta[0].title
    
    let price=document.querySelector("#price")
    price.innerText="₹ "+productPageDAta[0].offPrice

    let bagbtn=document.querySelector("#bag_button")
    bagbtn.addEventListener("click",function(){
        let bagData= JSON.parse(localStorage.getItem("cart_data"))||[]
        let q={
            ...productPageDAta[0],
            quantity:1
        }
        bagData.push(q)
        console.log(bagData)

        localStorage.setItem("cart_data",JSON.stringify(bagData))
        alert("Product added to Bag")
    })
}
displaydata(productPageDAta)