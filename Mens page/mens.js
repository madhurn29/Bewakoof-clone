// let loggedin=localStorage.getItem("islogged")
// if(loggedin){
//   document.querySelector("#islogged").innerText="User"
// }

let productData = [
  {
    id: 1,
    main_img:
      "https://images.bewakoof.com/t1080/the-ryuk-full-sleeve-t-shirt-554015-1667974706-1.jpg",
    img1: "https://images.bewakoof.com/t1080/the-ryuk-full-sleeve-t-shirt-554015-1667974706-1.jpg",
    img2: "https://images.bewakoof.com/t1080/the-ryuk-full-sleeve-t-shirt-554015-1667974712-2.jpg",
    img3: "https://images.bewakoof.com/t1080/the-ryuk-full-sleeve-t-shirt-554015-1667974717-3.jpg",
    img4: "https://images.bewakoof.com/t1080/the-ryuk-full-sleeve-t-shirt-554015-1667974722-4.jpg",
    img5: "https://images.bewakoof.com/t1080/the-ryuk-full-sleeve-t-shirt-554015-1667974728-5.jpg",
    brand: "Stoopid",
    title: "Men's White The Ryuk Graphic Printed T-shirt",
    price: "999",
    offPrice: "349",
  },
  {
    id: 2,
    main_img:
      "https://images.bewakoof.com/t1080/the-ryuk-oversized-full-sleeve-t-shirt-554016-1667974663-1.jpg",
    img1: "https://images.bewakoof.com/t1080/the-ryuk-oversized-full-sleeve-t-shirt-554016-1667974663-1.jpg",
    img2: "https://images.bewakoof.com/t1080/the-ryuk-oversized-full-sleeve-t-shirt-554016-1667974668-2.jpg",
    img3: "https://images.bewakoof.com/t1080/the-ryuk-oversized-full-sleeve-t-shirt-554016-1667974674-3.jpg",
    img4: "https://images.bewakoof.com/t1080/the-ryuk-oversized-full-sleeve-t-shirt-554016-1667974679-4.jpg",
    img5: "https://images.bewakoof.com/t1080/the-ryuk-oversized-full-sleeve-t-shirt-554016-1667974684-5.jpg",
    brand: "Stoopid",
    title: "Men's Black The Ryuk Graphic Printed Oversized T-shirt",
    price: "1499",
    offPrice: "599",
  },
  {
    id: 3,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-black-what-the-duck-graphic-printed-oversized-t-shirt-553306-1667891652-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-black-what-the-duck-graphic-printed-oversized-t-shirt-553306-1667891652-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-black-what-the-duck-graphic-printed-oversized-t-shirt-553306-1667891657-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-s-black-what-the-duck-graphic-printed-oversized-t-shirt-553306-1667891662-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-s-black-what-the-duck-graphic-printed-oversized-t-shirt-553306-1667891668-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-black-what-the-duck-graphic-printed-oversized-t-shirt-553306-1667891673-5.jpg",
    brand: "Stoopid",
    title: "Men's Black What The Duck Graphic Printed Oversized T-shirt",
    price: "1499",
    offPrice: "599",
  },
  {
    id: 4,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-black-inspire-graphic-printed-oversized-t-shirt-553301-1667891608-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-black-inspire-graphic-printed-oversized-t-shirt-553301-1667891608-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-black-inspire-graphic-printed-oversized-t-shirt-553301-1667891614-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-s-black-inspire-graphic-printed-oversized-t-shirt-553301-1667891619-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-s-black-inspire-graphic-printed-oversized-t-shirt-553301-1667891624-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-black-inspire-graphic-printed-oversized-t-shirt-553301-1667891630-5.jpg",
    brand: "Stoopid",
    title: "Men's Black Inspire Graphic Printed Oversized T-shirt",
    price: "1299",
    offPrice: "449",
  },
  {
    id: 5,
    main_img:
      "https://images.bewakoof.com/t640/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563188-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563188-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563193-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563198-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563204-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563210-5.jpg",
    brand: "Stoopid",
    title: "Men's Blue Dope Bear Graphic Printed Oversized T-shirt",
    price: "1299",
    offPrice: "537",
  },
  {
    id: 6,
    main_img:
      "https://images.bewakoof.com/t1080/the-ryuk-half-sleeve-t-shirt-554010-1667975037-1.jpg",
    img1: "https://images.bewakoof.com/t1080/the-ryuk-half-sleeve-t-shirt-554010-1667975037-1.jpg",
    img2: "https://images.bewakoof.com/t1080/the-ryuk-half-sleeve-t-shirt-554010-1667975043-2.jpg",
    img3: "https://images.bewakoof.com/t1080/the-ryuk-half-sleeve-t-shirt-554010-1667975048-3.jpg",
    img4: "https://images.bewakoof.com/t1080/the-ryuk-half-sleeve-t-shirt-554010-1667975053-4.jpg",
    img5: "https://images.bewakoof.com/t1080/the-ryuk-half-sleeve-t-shirt-554010-1667975059-5.jpg",
    brand: "Stoopid",
    title: "Men's Black The Ryuk Graphic Printed T-shirt",
    price: "999",
    offPrice: "329",
  },
  {
    id: 7,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-white-what-the-duck-graphic-printed-oversized-t-shirt-553308-1667891931-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-white-what-the-duck-graphic-printed-oversized-t-shirt-553308-1667891931-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-white-what-the-duck-graphic-printed-oversized-t-shirt-553308-1667891936-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-s-white-what-the-duck-graphic-printed-oversized-t-shirt-553308-1667891942-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-s-white-what-the-duck-graphic-printed-oversized-t-shirt-553308-1667891947-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-white-what-the-duck-graphic-printed-oversized-t-shirt-553308-1667891952-5.jpg",
    brand: "Snitch",
    title: "Men's White What The Duck Graphic Printed Oversized T-shirt",
    price: "1499",
    offPrice: "599",
  },
  {
    id: 8,
    main_img:
      "https://images.bewakoof.com/t1080/feel-most-alive-half-sleeve-t-shirt-navy-blue-307089-1655748632-1.jpg",
    img1: "https://images.bewakoof.com/t1080/feel-most-alive-half-sleeve-t-shirt-navy-blue-307089-1655748632-1.jpg",
    img2: "https://images.bewakoof.com/t1080/feel-most-alive-half-sleeve-t-shirt-navy-blue-307089-1655748637-2.jpg",
    img3: "https://images.bewakoof.com/t1080/feel-most-alive-half-sleeve-t-shirt-navy-blue-307089-1655748648-4.jpg",
    img4: "https://images.bewakoof.com/t1080/feel-most-alive-half-sleeve-t-shirt-navy-blue-307089-1655748642-3.jpg",
    img5: "https://images.bewakoof.com/t1080/feel-most-alive-half-sleeve-t-shirt-navy-blue-307089-1655748648-4.jpg",
    brand: "Stoopid",
    title: "Feel Most Alive Half Sleeve T-Shirt Navy Blue",
    price: "1099",
    offPrice: "358",
  },
  {
    id: 9,
    main_img:
      "https://images.bewakoof.com/t1080/lost-in-time-half-sleeve-t-shirt-271575-1655749083-1.jpg",
    img1: "https://images.bewakoof.com/t1080/lost-in-time-half-sleeve-t-shirt-271575-1655749089-2.jpg",
    img2: "https://images.bewakoof.com/t1080/lost-in-time-half-sleeve-t-shirt-271575-1655749083-1.jpg",
    img3: "https://media.bewakoof.com/videos/271575/thumbnail/lost-in-time-half-sleeve-t-shirt-271575-1643541940-video-1-00001.png",
    img4: "https://images.bewakoof.com/t1080/lost-in-time-half-sleeve-t-shirt-271575-1655749094-3.jpg",
    img5: "https://images.bewakoof.com/t1080/lost-in-time-half-sleeve-t-shirt-271575-1655749099-4.jpg",
    brand: "Snitch",
    title: "Lost In Time Half Sleeve T-Shirt",
    price: "1099",
    offPrice: "358",
  },
  {
    id: 10,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-blue-moon-knight-graphic-printed-oversized-t-shirt-519226-1667516900-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-blue-moon-knight-graphic-printed-oversized-t-shirt-519226-1667516900-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-blue-moon-knight-graphic-printed-oversized-t-shirt-519226-1667516905-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-navy-blue-moon-knight-printed-t-shirt-519226-1664190673-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-navy-blue-moon-knight-printed-t-shirt-519226-1664190678-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-navy-blue-moon-knight-printed-t-shirt-519226-1664190683-5.jpg",
    brand: "Stoopid",
    title: "Men's Blue Moon Knight Graphic Printed Oversized T-shirt",
    price: "1299",
    offPrice: "627",
  },
  {
    id: 11,
    main_img:
      "https://images.bewakoof.com/t1080/white-half-sleeve-t-shirt-105-1666332512-1.jpg",
    img1: "https://images.bewakoof.com/t1080/white-half-sleeve-t-shirt-105-1666332517-2.jpg",
    img2: "https://images.bewakoof.com/t1080/white-half-sleeve-t-shirt-105-1666332517-2.jpg",
    img3: "https://images.bewakoof.com/t1080/white-half-sleeve-t-shirt-105-1666332523-3.jpg",
    img4: "https://images.bewakoof.com/t1080/white-half-sleeve-t-shirt-105-1666332523-3.jpg",
    img5: "https://images.bewakoof.com/t1080/white-half-sleeve-t-shirt-105-1666332528-4.jpg",
    brand: "Stoopid",
    title: "White Half Sleeve T-Shirt",
    price: "999",
    offPrice: "403",
  },
  {
    id: 12,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-bridal-rose-karma-circles-typography-oversized-t-shirt-540922-1667498776-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-bridal-rose-karma-circles-typography-oversized-t-shirt-540922-1667498776-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-bridal-rose-karma-circles-typography-oversized-t-shirt-540922-1667498782-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-s-bridal-rose-karma-circles-typography-oversized-t-shirt-540922-1667498787-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-s-bridal-rose-karma-circles-typography-oversized-t-shirt-540922-1667498792-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-bridal-rose-karma-circles-typography-oversized-t-shirt-540922-1667498797-5.jpg",
    brand: "Stoopid",
    title: "Men's Bridal Rose Karma Circles Typography Oversized T-shirt",
    price: "1199",
    offPrice: "582",
  },
  {
    id: 13,
    main_img:
      "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
    img1: "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750446-1.jpg",
    img2: "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750451-2.jpg",
    img3: "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750457-3.jpg",
    img4: "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750462-4.jpg",
    img5: "https://images.bewakoof.com/t1080/bubble-gum-stripe-t-shirt-368741-1655750467-5.jpg",
    brand: "Snitch",
    title: "Bubble Gum Stripe T-Shirt",
    price: "1199",
    offPrice: "582",
  },
  {
    id: 14,
    main_img:
      "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
    img1: "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
    img2: "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748137-2.jpg",
    img3: "https://media.bewakoof.com/videos/272010/thumbnail/lost-mountains-half-sleeve-t-shirt-272010-1643541898-video-1-00001.png",
    img4: "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748142-3.jpg",
    img5: "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748147-4.jpg",
    brand: "Stoopid",
    title: "Lost Mountains Half Sleeve T-Shirt",
    price: "1988",
    offPrice: "359",
  },
  {
    id: 15,
    main_img: "https://images.bewakoof.com/t1080/men-s-black-no-excuses-typography-t-shirt-283917-1655748184-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-black-no-excuses-typography-t-shirt-283917-1655748184-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-black-no-excuses-typography-t-shirt-283917-1655748190-2.jpg",
    img3: "https://media.bewakoof.com/videos/283917/thumbnail/no-excuses-block-half-sleeve-t-shirt-black-283917-1644826747-video-1-00001.png",
    img4: "https://images.bewakoof.com/t1080/men-s-black-no-excuses-typography-t-shirt-283917-1655748195-3.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-black-no-excuses-typography-t-shirt-283917-1655748200-4.jpg",
    brand: "Campus Sutra",
    title: "Men's Black No Excuses Typography T-shirt",
    price: "1299",
    offPrice: "403",
  },
  {
    id: 16,
    main_img:
      "https://images.bewakoof.com/t1080/high-colors-full-sleeve-t-shirt-black-297486-1655748112-1.jpg",
    img1: "https://images.bewakoof.com/t1080/high-colors-full-sleeve-t-shirt-black-297486-1655748112-1.jpg",
    img2: "https://images.bewakoof.com/t1080/high-colors-full-sleeve-t-shirt-black-297486-1655748117-2.jpg",
    img3: "https://images.bewakoof.com/t1080/high-colors-full-sleeve-t-shirt-black-297486-1655748123-3.jpg",
    img4: "https://images.bewakoof.com/t1080/high-colors-full-sleeve-t-shirt-black-297486-1655748128-4.jpg",
    img5: "https://images.bewakoof.com/t1080/high-colors-full-sleeve-t-shirt-black-297486-1655748133-5.jpg",
    brand: "Snitch",
    title: "High Colors Full Sleeve T-Shirt Black",
    price: "1288",
    offPrice: "447",
  },
  {
    id: 17,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-blue-fine-by-me-typography-oversized-t-shirt-554134-1668068068-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-blue-fine-by-me-typography-oversized-t-shirt-554134-1668068068-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-blue-fine-by-me-typography-oversized-t-shirt-554134-1668068073-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-s-blue-fine-by-me-typography-oversized-t-shirt-554134-1668068079-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-s-blue-fine-by-me-typography-oversized-t-shirt-554134-1668068084-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-blue-fine-by-me-typography-oversized-t-shirt-554134-1668068089-6.jpg",
    brand: "Campus Sutra",
    title: "Men's Blue Fine By Me Typography Oversized T-shirt",
    price: "1366",
    offPrice: "499",
  },
  {
    id: 18,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-black-adventure-time-t-shirt-376086-1655748025-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-black-adventure-time-t-shirt-376086-1655748025-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-black-adventure-time-t-shirt-376086-1655748030-2.jpg",
    img3: "https://images.bewakoof.com/web/play-button-1553774783.png",
    img4: "https://images.bewakoof.com/t1080/men-s-black-adventure-time-t-shirt-376086-1655748035-3.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-black-adventure-time-t-shirt-376086-1655748041-4.jpg",
    brand: "Snitch",
    title: "Men's Black Adventure Time T-shirt",
    price: "999",
    offPrice: "358",
  },
  {
    id: 19,
    main_img:
      "https://images.bewakoof.com/t1080/men-s-black-kakashi-sensei-half-sleeve-t-shirt-537124-1660889396-1.jpg",
    img1: "https://images.bewakoof.com/t1080/men-s-black-kakashi-sensei-half-sleeve-t-shirt-537124-1660889396-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-black-kakashi-sensei-half-sleeve-t-shirt-537124-1660889402-2.jpg",
    img3: "https://images.bewakoof.com/t1080/men-s-black-kakashi-sensei-half-sleeve-t-shirt-537124-1660889407-3.jpg",
    img4: "https://images.bewakoof.com/t1080/men-s-black-kakashi-sensei-half-sleeve-t-shirt-537124-1660889412-4.jpg",
    img5: "https://images.bewakoof.com/t1080/men-s-black-kakashi-sensei-half-sleeve-t-shirt-537124-1660889417-5.jpg",
    brand: "Stoopid",
    title: "Men's Black Kakashi Sensei Graphic Printed T-shirt",
    price: "849",
    offPrice: "499",
  },
  {
    id: 20,
    main_img:
      "https://images.bewakoof.com/t1080/gyaan-half-sleeve-t-shirt-black-310957-1655748557-1.jpg",
    img1: "https://images.bewakoof.com/t1080/gyaan-half-sleeve-t-shirt-black-310957-1655748557-1.jpg",
    img2: "https://images.bewakoof.com/t1080/gyaan-half-sleeve-t-shirt-black-310957-1655748562-2.jpg",
    img3: "https://media.bewakoof.com/videos/310957/thumbnail/gyaan-half-sleeve-t-shirt-black-310957-1642511064-video-1-00001.png",
    img4: "https://images.bewakoof.com/t1080/gyaan-half-sleeve-t-shirt-black-310957-1655748567-3.jpg",
    img5: "https://images.bewakoof.com/t1080/gyaan-half-sleeve-t-shirt-black-310957-1655748573-4.jpg",
    brand: "Campus Sutra",
    title: "Gyaan Half Sleeve T-Shirt Black",
    price: "1269",
    offPrice: "759",
  },
  {
    id: 21,
    main_img:
      "https://images.bewakoof.com/t1080/dab-marshmello-200415-1655748780-1.jpg",
    img1: "https://images.bewakoof.com/t1080/dab-marshmello-200415-1655748780-1.jpg",
    img2: "https://images.bewakoof.com/t1080/dab-marshmello-200415-1655748785-2.jpg",
    img3: "https://images.bewakoof.com/t1080/dab-marshmello-200415-1655748790-3.jpg",
    img4: "https://images.bewakoof.com/t1080/dab-marshmello-200415-1655748796-4.jpg",
    img5: "https://images.bewakoof.com/t1080/dab-marshmello-200415-1655748801-5.jpg",
    brand: "Campus Sutra",
    title: "Gyaan Half Sleeve T-Shirt Black",
    price: "1269",
    offPrice: "759",
  },
];
let products=document.querySelector("#products")

function displayProduct(data){
    products.innerHTML=""
    console.log(data)
    data.forEach(elem => {

        let productCard=document.createElement("div")
        productCard.addEventListener("click",function(){
        let individual_data=[]
        individual_data.push(elem)
        localStorage.setItem("clicked-product",JSON.stringify(individual_data))
        window.location.href = "../individual product page/product.html";    
        })
        let image=document.createElement("img")
        image.src=elem.main_img
        
        let box=document.createElement("div")

        let brandbox=document.createElement("div")

        let brandName=document.createElement("p")
        brandName.innerText=elem.brand
        
        let wish=document.createElement("img")
        wish.src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"

        let desc=document.createElement("p")
        desc.innerText=elem.title

        let pricebox=document.createElement("div")
        pricebox.id="#priceBox"
        let offRate=document.createElement("p")
        offRate.innerText="₹ "+elem.offPrice

        let price=document.createElement("p")
        price.innerText="₹ "+elem.price

        let tribe=document.createElement("p")
        tribe.innerText="₹ 299 For Tribe Members"
        pricebox.append(offRate,price)
        brandbox.append(brandName,desc)
        box.append(brandbox,wish)
        productCard.append(image,box,pricebox,tribe)
        products.append(productCard)
        
    });
}
displayProduct(productData)

let search =document.querySelector("#search")
search.addEventListener("input",function(){
let x=search.value 
let search_data=productData.filter((elem)=>{
    return elem.title.toLowerCase().includes(x.toLowerCase())
})
displayProduct(search_data)
})