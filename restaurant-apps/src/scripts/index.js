import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

console.log(data);

function resto(data) {
  let dataList = "";

  data.restaurants.forEach((item) => {
    dataList += `
      <div class = "item">
        <img src="${item.pictureId}" alt=${item.name}>
        <div class = "desc">
          <h3>${item.name}</h3>
          <h4>Location : ${item.city}</h4>
          <p>★ ${item.rating}</p>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  });
  document.getElementById("restaurant").innerHTML = dataList;
}

resto(data);