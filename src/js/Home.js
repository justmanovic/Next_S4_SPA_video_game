function Home() {
  const KEY = process.env.KEY
  const preparePage = () => {
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
      console.log(finalURL)

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

    fetchList("https://api.rawg.io/api/games", "", searchedPage);
  };

  // https://api.rawg.io/api/games?search=303%20squadron&search_precise=true&key=ee16de9559db45799581e016de56efca

  const render = () => {
    pageContent.innerHTML = `
      <h2>Welcome</h2>
      <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame, the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
      <button class="show-more" id="show-more" >Show more</button>
    `;

    preparePage();
  };

  render();
};

const testFunction = () => {
  console.log("TEST OK")
}

export default Home;
