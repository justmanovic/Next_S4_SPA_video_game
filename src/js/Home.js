const KEY = process.env.KEY

function Home(argument = "", selectedPlatform = "") {
  const selectPlatform = document.querySelector("select")
  const welcomeMessage = document.querySelector(".welcome-message")

  welcomeMessage.classList.remove("hidden")
  selectPlatform.classList.remove("hidden")

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";
    let showMoreButton = document.querySelector("#show-more")

    showMoreButton.addEventListener("click", () => {
      fetchList("https://api.rawg.io/api/games", "")
    })

    const fetchList = (url, argument) => {
      let finalURL = url + "?dates=2022-01-01,2022-12-31" + "&key=" + KEY + "&page_size=27";
      if (argument) {
        finalURL = url + "?search=" + argument + "&search_precise=true" + "&key=" + KEY + "&page_size=27";
      }
      console.log("url final :", finalURL)

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

          console.log(articleList)


          articleList.forEach((article, index) => {
            let tabConsoleLogo = []
            // console.log(article.parent_platforms.map(platform => platform.platform).join(', '))
            if (article.parent_platforms !== undefined) {
              let tabConsole = article.parent_platforms.map(platform => platform.platform.name)

              tabConsole.forEach(console => {
                if (console === "PC")
                  tabConsoleLogo.push('<i class="fab fa-windows"></i>')
                else if (console === "PlayStation")
                  tabConsoleLogo.push('<i class="fab fa-playstation"></i>')
                else if (console === "Xbox")
                  tabConsoleLogo.push('<i class="fab fa-xbox"></i>')
                else if (console === "Nintendo")
                  tabConsoleLogo.push('Nintendo')
                else if (console === "Apple Macintosh")
                  tabConsoleLogo.push('<i class="fas fa-apple-alt"></i>')
              })
            }

            articles += `
                  <div class="cardGame">
                      <a href="#pagedetail/${article.id}"><div><img src=${article.background_image}></img></div></a>
                      <h1>${article.name}</h1>
                    <p>${tabConsoleLogo.join("")}</p>
                  </div>
                `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
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


function showResult(index, tab) {
  
}