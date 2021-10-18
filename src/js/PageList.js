import key from './key';
const KEY = key()

function PageList(argument = "") {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url + "?key=" + KEY;
      if (argument) {
        finalURL = url + "?search=" + argument + "&search_precise=true" + "&key=" + KEY;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            articles += `
                  <div class="cardGame">
                    <h1>${article.name}</h1>
                    <h4>${article.released}</h4>
                    <a href = "#pagedetail/${article.id}">${article.id}</a>
                  </div>
                `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  // https://api.rawg.io/api/games?search=303%20squadron&search_precise=true&key=ee16de9559db45799581e016de56efca

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

const testFunction = () => {
  console.log("TEST OK")
}

export default PageList;
