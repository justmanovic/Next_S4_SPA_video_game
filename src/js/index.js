

import '../sass/style.scss';
import newPageList from './PageList';
import newHome from './Home';
import newPageDetail from './PageDetail';
// import newRoutes from './routes';


const routes = {
  "": newHome,
  "pagelist": newPageList,
  "pagedetail": newPageDetail
};


let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  console.log(path)
  pageArgument = path[1] || "";

  var pageContent = document.querySelector("#pageContent");
  routes[path[0]](pageArgument)
  //  routes[pagelist]

  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());