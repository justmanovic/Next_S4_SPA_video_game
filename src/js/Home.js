const KEY = process.env.KEY

function Home(argument = "", selectedPlatform = "") {
  const selectPlatform = document.querySelector("select")
  const welcomeMessage = document.querySelector(".welcome-message")

  welcomeMessage.classList.remove("hidden")
  selectPlatform.classList.remove("hidden")

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";
    let searchedPage = 1;
    let showMoreButton = document.querySelector("#show-more")

    showMoreButton.addEventListener("click", () => {
      searchedPage += 1
      fetchList("https://api.rawg.io/api/games", "", searchedPage)
    })

    const fetchList = (url, argument, page) => {
      let finalURL = url + "?dates=2022-01-01,2022-12-31" + "&key=" + KEY + "&page=" + page;
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

          console.log("articleList", articleList)

          articleList.forEach((article) => {
            // console.log(article.parent_platforms.map(platform => platform.platform).join(', '))
            let tabConsole = article.parent_platforms.map(platform => platform.platform.name)
            // let match = { "PC": '<i class="fab fa-windows"></i>', 'PlayStation', '<i class="fab fa-playstation"></i>'}

            // tab2 = tabConsole.map(el => {
            //   if (el === match.key)
            //     return match.value
            // })

            let tabConsoleLogo = []

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

            console.log(tabConsole)
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
