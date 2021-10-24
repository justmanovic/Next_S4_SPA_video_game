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
          let { name, released, description, background_image, developers, platforms, publishers, genres, tags, stores, website } = response;
          console.log(response)
          let releasedDate = (released === null ? "N/A" : released)
          let publisherStr = (publishers.length === 0 ? "N/A" : publishers[0].name)
          let platformsString = platforms.map(platform => platform.platform.name).join(', ')
          let regexp = /♞|♚|♝|♛/g // vu dans l'une des descriptions...
          let newDescription = description.replace(regexp, "•")
          let genresStr = (genres.length > 0) ? (genres.map(genre => genre.name).join(', ')) : "N/A"
          let tagsStr = (tags.length > 0) ? (tags.map(tag => tag.name).join(', ')) : "N/A"
          let storesStr = stores.map(store => `<a href="${store.store.domain}">${store.store.name}</a></br>`).join('')
          let articleDOM = document.querySelector(".page-detail .article");
          articleDOM.querySelector(".img-game img").src = background_image
          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date").innerHTML = releasedDate;
          articleDOM.querySelector("p.description").innerHTML = newDescription;
          articleDOM.querySelector("p.developers").innerHTML = developers[0].name
          articleDOM.querySelector("p.platforms").innerHTML = platformsString
          articleDOM.querySelector("p.publishers").innerHTML = publisherStr
          articleDOM.querySelector("p.genre").innerHTML = genresStr
          articleDOM.querySelector("p.tags").innerHTML = tagsStr
          articleDOM.querySelector("p.buy").innerHTML = storesStr
          articleDOM.querySelector(".img-game > a").href = website
          articleDOM.querySelector(".img-game > a").target = "_blank"
        });
    };


    const getScreenshots = (url, argument) => {
      let URL = url + argument + "?key=" + KEY;

      fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        let { id } = response;
        let urlScreenshot = url + id +"/screenshots" + "?key=" + KEY
        console.log(urlScreenshot)

        fetch(urlScreenshot)
          .then((response) => response.json())
          .then((response) => {

            response.results.forEach(result => {
              let image = document.createElement("img")
              let divImage = document.createElement("div")
              image.src = result.image
              divImage.append(image)
              document.querySelector(".screenshots").append(divImage)
            })
          })
      })
    }

    const getTrailers = (url, argument) => {
      let URL = url + argument + "?key=" + KEY;

      fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        let { id } = response;
        let urlMovies = url + id + "/movies" + "?key=" + KEY
        console.log(urlMovies)

        fetch(urlMovies)
          .then((response) => response.json())
          .then((response) => {

            response.results.forEach(result => {
              let movie = document.createElement("video")
              let divMovie = document.createElement("div")
              movie.src = result.data["480"]
              movie.setAttribute("width", "500");
              // movie.setAttribute("height", "480");
              movie.setAttribute("controls", "controls");
              divMovie.append(movie)
              document.querySelector(".trailers").append(divMovie)
              console.log("trailer", result.data["480"])
            })
          })
      })
    }
    
    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
    getScreenshots("https://api.rawg.io/api/games/", cleanedArgument);
    getTrailers("https://api.rawg.io/api/games/", cleanedArgument);

  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <div class="img-game">
            <img>
            <a>Check Website <i class="fas fa-play"></i></a>
          </div>
          <h1 class="title"></h1>
          <div>
            <h3>Plot</h3>
            <p class="description"></p>
          </div>
          <div class="released-developer-platform-publisher">
            <div>
              <h4>Released date:</h4>
              <p class="release-date"></p>
            </div>
            <div>
              <h4>Developer:</h4>
              <p class="developers"></p>
            </div>
            <div>
              <h4>Platforms:</h4>
              <p class="platforms"></p>
            </div>
            <div>
              <h4>Publisher:</h4>
              <p class="publishers"></p>
            </div>
            <div>
              <h4>Genre:</h4>
              <p class="genre"></p>
            </div>
            <div>
              <h4>Tags:</h4>
              <p class="tags"></p>
            </div>
          </div>
          <h2>TRAILERS</h2>
          <div class="trailers"></div>
          <h2>SCREENSHOTS</h2>
          <div class="screenshots"></div>
          <h2>BUY</h2>
          <p class="buy"></p>

        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default PageDetail;
