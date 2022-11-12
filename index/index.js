let deals_poster = document.querySelector(".deals_poster");

let loggedin=localStorage.getItem("islogged")
if(loggedin){
  document.querySelector("#islogged").innerText="User"
}
// document.querySelector("#islogged").innerText="hello"
console.log(loggedin);
let posterData = [
  {
    url: "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1667900427.gif",
    title: "Design of the Day",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-243-1665572988.jpg",
    title: "Best Sellers",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-daily-deals-additional-10--off-01-1666012651.jpg",
    title: "Hot Deals",
  },
  ,
  {
    url: "https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg",
    title: "Customization",
  },
  ,
  {
    url: "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-new-arrival-1665498051.jpg",
    title: "New Arrivals",
  },
  ,
  {
    url: "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-lastsizesleft-1666074760.jpg",
    title: "Last Sizes Left",
  },
  ,
  {
    url: "https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg",
    title: "Plus Size",
  },
  ,
  {
    url: "https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg",
    title: "Official Collabartion",
  },
  ,
  {
    url: "https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg",
    title: "Vote for Design",
  },
];

displayData(posterData);

function displayData(data) {
  data.forEach((elem) => {
    let poster_box = document.createElement("div");
    poster_box.id = "poster_box";

    let poster = document.createElement("img");
    poster.src = elem.url;

    let title = document.createElement("p");
    title.innerText = elem.title;

    poster_box.append(poster, title);
    deals_poster.append(poster_box);
  });
}
let popular_categories = document.querySelector(".popular_categories");

let popular_categories_data = [
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1665646057.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleeves-men-1665149767.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-oversizedtees-1661866116.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-7-1662981567.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-8-1662981567.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-6-1662981566.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-1661866109.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1661866115.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-shirts-1662044509.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-shorts-1661866118.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1661866111.jpg",
  },
];
function displayCategory(data) {
  data.forEach((elem) => {
    let category_box = document.createElement("div");
    category_box.id = "category_box";

    let poster = document.createElement("img");
    poster.src = elem.url;

    category_box.append(poster);
    popular_categories.append(category_box);
  });
}
displayCategory(popular_categories_data);
