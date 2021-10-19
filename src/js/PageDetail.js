const KEY = process.env.KEY

const selectPlatform = document.querySelector("select")
const welcomeMessage = document.querySelector(".welcome-message")

function PageDetail(argument) {
  welcomeMessage.classList.add("hidden")
  selectPlatform.classList.add("hidden")

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    const fetchGame = (url, argument) => {
      let finalURL = url + argument + "?key=" + KEY;
      console.log(finalURL)

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description } = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default PageDetail;
