// import key from './key';
// const KEY = key()

// function PageList(argument = "", selectedPlatform = "") {
//   console.log("la plateforme sélectionnée est", selectedPlatform)
//   const preparePage = () => {
//     let cleanedArgument = argument.replace(/\s+/g, "-");
//     let articles = "";

//     const fetchList = (url, game) => {
//       let finalURL = url + "?key=" + KEY;
//       if (argument) {
//         finalURL = url + "?search=" + argument + "&search_precise=true" + "&key=" + KEY;
//       }

//       fetch(`${finalURL}`)
//       .then((response) => response.json())
//       .then((response) => {
//           let articleList = response.results
//           // response.results.forEach((article) => {
//             // response.results.filter(article => article.platforms[0].platform.name.includes("Xbox")).forEach((article) => {
//             // console.log(response.results
//             //   .filter(article => article.platforms
//             //     .map(platformObject => platformObject.platform.name).includes("Xbox 360")))
//           if (selectedPlatform !== ""){
//             articleList = articleList.filter(article => article.platforms
//               .map(platformObject => platformObject.platform.name).includes(selectedPlatform))
//           }

//             articleList
//               .forEach((article) => {
//             articles += `
//                   <div class="cardGame">
//                     <h1>${article.name}</h1>
//                     <h4>${article.released}</h4>
//                     <a href = "#pagedetail/${article.id}">${article.id}</a>
//                   </div>
//                 `;
//             console.log(article.platforms)
//             console.log(article.platforms.map(Object.values))
//             console.log(article.platforms.map(platformObject => platformObject.platform.name))
//             console.log(article.platforms.map(platformObject => platformObject.platform.name).includes("Xbox 360"))

//           });
//           document.querySelector(".page-list .articles").innerHTML = articles;
//         });
//     };

//     fetchList("https://api.rawg.io/api/games", cleanedArgument);
//   };

//   // https://api.rawg.io/api/games?search=303%20squadron&search_precise=true&key=ee16de9559db45799581e016de56efca

//   const render = () => {
//     pageContent.innerHTML = `
//       <section class="page-list">
//         <div class="articles">...loading</div>
//       </section>
//     `;

//     preparePage();
//   };

//   render();
// };

// const testFunction = () => {
//   console.log("TEST OK")
// }

// export default PageList;
