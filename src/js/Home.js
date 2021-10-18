import key from './key';
const KEY = key()

function Home(argument = "", selectedPlatform = "") {
  console.log("la plateforme sélectionnée est", selectedPlatform)
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";
    let searchedPage = 1;
    let showMoreButton = document.querySelector("#show-more")

    showMoreButton.addEventListener("click", () => {
      searchedPage += 1
      console.log(searchedPage)
      fetchList("https://api.rawg.io/api/games", "", searchedPage)
    })

    const fetchList = (url, argument, page) => {
      let finalURL = url + "?key=" + KEY + "&page=" + page;
      if (argument) {
        finalURL = url + "?search=" + argument + "&search_precise=true" + "&key=" + KEY + "&page=" + page;
      }
      // console.log("url final :", finalURL)

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let articleList = response.results
          // console.log("article liste 1 :", articleList)
          if (selectedPlatform !== "") {
            // console.log("je suis dans le if selected platform et plateform : ", selectedPlatform)
            articleList = articleList.filter(article => article.platforms
              .map(platformObject => platformObject.platform.name).includes(selectedPlatform))

          }

          console.log("articleListe 2 : ", articleList)

          articleList.forEach((article) => {
            articles += `
                  <div class="cardGame">
                    <a href="#pagedetail/${article.id}"><div><img src=${article.background_image}></img></div></a>
                    <h1>${article.name}</h1>
                  </div>
                `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument, searchedPage);
  };

  const render = () => {
    pageContent.innerHTML = `
      
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
      <button class="show-more" id="show-more" >Show more</button>
    `;
    preparePage();
  };

  render();
};


export default Home;
