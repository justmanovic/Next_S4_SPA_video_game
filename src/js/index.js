

import '../sass/style.scss';
import * as routes from './routes'

const route = routes.default

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  console.log(path)
  pageArgument = path[1] || "";

  var pageContent = document.querySelector("#pageContent");
  route[path[0]](pageArgument)
  //  routes[pagelist]

  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());