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
          let { name, released, description, background_image } = response;
          console.log(response)

          let articleDOM = document.querySelector(".page-detail .article");
          articleDOM.querySelector(".img-game img").src = background_image
          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("p.gameplay").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam quam veritatis cum molestias hic nesciunt autem quo repudiandae ipsum iste similique, numquam repellendus nobis ipsam, quos reprehenderit dolores accusamus"
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <div class="img-game">
            <img>
          </div>
          <h1 class="title"></h1>
          <div>
            <h3>Plot</h3>
            <p class="description"></p>
          </div>
          <div>
            <h3>Gameplay</h3>
            <p class="gameplay"></p>
          </div>
          <div class="released-developer-platform-publisher">
            <div>
              <span>Released date:</span>
              <p class="release-date"></p>
            </div>
            <div>
              <span>Developer:</span>
              <p class="developer"></p>
            </div>
            <div>
              <span>Platform:</span>
              <p class="platform"></p>
            </div>
            <div>
              <span>Publisher:</span>
              <p class="publisher"></p>
            </div>
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default PageDetail;
