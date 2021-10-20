import '../sass/style.scss';
import * as routes from './routes'
const searchForm = document.querySelector("#search-form")
const findGameInput = document.querySelector("#find-game")
const selectPlatform = document.querySelector("select")
const route = routes.default



let pageArgument;

const setRoute = (selectedPlatform = "") => {
  let path = window.location.hash.substring(1).split("/");
  console.log(path)
  pageArgument = path[1] || "";

  var pageContent = document.querySelector("#pageContent");
  console.log("pageArgument :", pageArgument, "Selected Plateforme : ", selectedPlatform)
  route[path[0]](pageArgument, selectedPlatform)
  //  routes[pagelist]


  return true;
};

window.addEventListener("hashchange", () => {
  console.log("2")
  setRoute();
})

window.addEventListener("DOMContentLoaded", () => setRoute());
selectPlatform.addEventListener("change", () => setRoute(selectPlatform[selectPlatform.options.selectedIndex].value))


searchForm.addEventListener("submit", () => {
  searchForm.action = `index.html?#/${findGameInput.value.replace(/\s+/g, "-")}`
  console.log("1", findGameInput.value.replace(/\s+/g, "-"))
})

