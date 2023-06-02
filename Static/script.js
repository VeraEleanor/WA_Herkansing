const gameCollectie = [
    { id: 1, naam: "The Last of Us", releaseJaar: 2013, genre: "Survival Horror", afbeelding: "img/LastOfUsRemastered.jpg", favorited: false, description: "The Last of Us is an action-adventure survival horror game franchise created by Naughty Dog and Sony Interactive Entertainment. The series is set in a post-apocalyptic United States ravaged by cannibalistic creatures infected by a mutated fungus in the genus Cordyceps."},
    { id: 2, naam: "Ghost of Tsushima", releaseJaar: 2020, genre: "Actie", afbeelding: "img/Ghost.jpeg", favorited: false, description: "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. The player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan." },
    { id: 3, naam: "Red Dead Redemption 2", releaseJaar: 2018, genre: "Actie", afbeelding: "img/RDR2.jpg", favorited: false, description: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption."},
    { id: 4, naam: "Stray", releaseJaar: 2022, genre: "Adventure", afbeelding: "img/Stray.jpg", favorited: false, description: "Stray is a 2022 adventure game developed by BlueTwelve Studio and published by Annapurna Interactive. The story follows a stray cat who falls into a walled city populated by robots, machines, and mutant bacteria, and sets out to return to the surface with the help of a drone companion, B-12."},
    { id: 5, naam: "The Witcher 3: Wild Hunt", releaseJaar: 2015, genre: "RPG", afbeelding: "img/Witcher3.jpg", favorited: false, description: "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer CD Projekt Red and is based on The Witcher series of fantasy novels by Andrzej Sapkowski."},
    { id: 6, naam: "Elden Ring", releaseJaar: 2022, genre: "RPG", afbeelding: "img/EldenRing.jpg", favorited: false, description: "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game is a collaborative effort between game director Hidetaka Miyazaki and fantasy novelist George R. R. Martin."},
    { id: 7, naam: "Final Fantasy X", releaseJaar: 2001, genre: "RPG", afbeelding: "img/FFX.jpg", favorited: false, description: "Final Fantasy X is a role-playing video game developed and published by Square as the tenth main entry in the Final Fantasy series. Set in the fantasy world of Spira, the game's story revolves around a group of adventurers and their quest to defeat a rampaging monster known as Sin."},
    { id: 8, naam: "Stardew Valley", releaseJaar: 2016, genre: "Simulatie", afbeelding: "img/StardewValley.jpg", favorited: false, description: "Stardew Valley is a simulation role-playing video game developed by Eric 'ConcernedApe' Barone. Players take the role of a character who inherits their deceased grandfather's dilapidated farm in a place known as Stardew Valley."},
    //{ id: 9, naam: "Vampyr", releaseJaar: 2018, genre: "RPG", afbeelding: "img/Vampyr.jpg", description: "Vampyr is an action role-playing video game developed by Dontnod Entertainment and published by Focus Home Interactive. It was released for Microsoft Windows, PlayStation 4, and Xbox One on 5 June 2018, and for Nintendo Switch on 29 October 2019."},
    { id: 9, naam: "Hogwarts Legacy", releaseJaar: 2023, genre: "RPG", afbeelding: "img/Hogwarts.jpg", favorited: false, description: "Hogwarts Legacy is an action role-playing video game set in the late 1800s in the Wizarding World being developed by Avalanche Software and published by Warner Bros. Interactive Entertainment under its Portkey Games label."},
    { id: 10, naam: "Assassin's Creed Syndicate", releaseJaar: 2015, genre: "Actie", afbeelding: "img/ACSyndicate.jpg", favorited: false, description: "Assassin's Creed Syndicate is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It was released on October 23, 2015, for PlayStation 4 and Xbox One, and on November 19, 2015, for Microsoft Windows."},
    { id: 11, naam: "Cyberpunk 2077", releaseJaar: 2020, genre: "RPG", afbeelding: "img/Cyberpunk.jpg", favorited: false, description: "Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. It was released for Microsoft Windows, PlayStation 4, Stadia, and Xbox One on 10 December 2020, and will come out for PlayStation 5 and Xbox Series X/S in 2021."},
    { id: 12, naam: "The Elder Scrolls V: Skyrim", releaseJaar: 2011, genre: "RPG", afbeelding: "img/Skyrim.jpg", favorited: false, description: "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion."},
    { id: 13, naam: "Uncharted 4: A Thief's End", releaseJaar: 2016, genre: "Actie", afbeelding: "img/Uncharted4.jpg", favorited: false, description: "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. It is the fourth main entry in the Uncharted series."},
];

const gameTitle = document.querySelector("#game-title");
const gameDescription = document.querySelector("#game-description");
const gamePopup = document.querySelector("#game-popup");
let currentPage = 1;
let itemsPerPage = 5;

function showGamesOnPage(gameCollectie) {
    const gameContainer = document.querySelector(".game-container");
    const gameItemTemplate = document.querySelector(".game-item-template");

    gameCollectie.forEach(game => {
        const gameItem = gameItemTemplate.cloneNode(true);
        gameItem.style.display = 'block';
        gameItem.querySelector("img").src = game.afbeelding;
        gameItem.querySelector("img").alt = game.naam;
        gameItem.querySelector("h3").innerText = game.naam;
        gameItem.querySelector("p").innerText = game.releaseJaar;
        gameItem.querySelector(".genre").innerText = game.genre;

        const heartBtn = gameItem.querySelector(".heart-btn");
        heartBtn.setAttribute('data-favorited', game.favorited);
        heartBtn.innerHTML = game.favorited ? '&#9829;' : '&#9825;';
        heartBtn.addEventListener("click", () => toggleHeart(heartBtn));

        gameContainer.appendChild(gameItem);
    });
}

function orderById() { 
  const sortedGames = [...gameCollectie];
  sortedGames.sort((a, b) => a.id - b.id);
    return sortedGames;
}

document.querySelector("#home-btn").addEventListener("click", function(event) {
  currentPage = 1;
  event.preventDefault();
  const sortedGames = orderById();
  renderGames(sortedGames);
});

function showPopup(title, description) {
    gameTitle.innerText = title;
    gameDescription.innerText = description;
    document.getElementById("overlay").classList.remove("hidden");
    gamePopup.classList.remove("hidden");
  }
  
  function closeGamePopup() {
    gamePopup.classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.querySelector("#filter-btn");
    const closeButton = document.querySelector("#close-filter-btn");
    const sidebar = document.querySelector("#sidebar");
    const sortByNameAZButton = document.querySelector('[data-sort="name AZ"]');
    const sortByNameZAButton = document.querySelector('[data-sort="name ZA"]');
    const sortByReleaseYearButton = document.querySelector('[data-sort="year"]');
    const sortByReleaseYearReversedButton = document.querySelector('[data-sort="year reversed"]');
    const sortByGenreButton = document.querySelector('[data-sort="genre"]');
    const sortByFavoritedButton = document.querySelector('[data-sort="favorited"]');
    const gameItem = document.getElementById("game-item");
    const gameInfo = document.getElementById("game-info");
  
    filterButton.addEventListener("click", function (event) {
      event.stopPropagation();
      sidebar.classList.toggle("visible");
    });
  
    closeButton.addEventListener("click", function (event) {
      event.stopPropagation();
      sidebar.classList.remove("visible");
    });

    sortByNameAZButton.addEventListener("click", function () {
      const sortedGames = orderByNameAZ();
      renderGames(sortedGames);
    });
  
    sortByNameZAButton.addEventListener("click", function () {
      const sortedGames = orderByNameZA();
      renderGames(sortedGames);
    });
  
    sortByReleaseYearButton.addEventListener("click", function () {
      const sortedGames = orderByReleaseYear();
      renderGames(sortedGames);
    });
  
    sortByReleaseYearReversedButton.addEventListener("click", function () {
      const sortedGames = orderByReleaseYearReverse();
      renderGames(sortedGames);
    });
  
    sortByFavoritedButton.addEventListener("click", function () {
      const sortedGames = orderByFavorited();
      renderGames(sortedGames);
    });
  
    const genreItems = document.querySelectorAll(".dropdown-content a");
  
    genreItems.forEach((item) => {
      item.addEventListener("click", function () {
        const genre = this.dataset.genre;
        const sortedGames = orderByGenre(genre);
        renderGames(sortedGames);
      });
    });

    gameItem.addEventListener("click", function () {
        if (event.target.closest('.game-item')) {
            const game = gameCollectie.find(game => game.naam === event.target.closest('.game-item').querySelector("img").alt);
            showPopup(game.naam, game.description);
        }
      });

      gameInfo.addEventListener("click", function (event) {
        event.stopPropagation();
      });
  
    document.addEventListener("click", function (event) {
      if (!sidebar.contains(event.target) && sidebar.classList.contains("visible")) {
        sidebar.classList.remove("visible");
      }
    });
  });
  
function orderByNameAZ() {
    const sortedGames = [...gameCollectie];
    sortedGames.sort((a, b) => {
        return a.naam.localeCompare(b.naam);
    });
    return sortedGames;
}

function orderByNameZA() {
    const sortedGames = [...gameCollectie];
    sortedGames.sort((a, b) => {
        return b.naam.localeCompare(a.naam);
    });
    return sortedGames;
}

function orderByReleaseYear() {
    const sortedGames = [...gameCollectie];
    sortedGames.sort((a, b) => {
        return a.releaseJaar - b.releaseJaar;
    });
    return sortedGames;
}

function orderByReleaseYearReverse() {
    const sortedGames = [...gameCollectie];
    sortedGames.sort((a, b) => {
        return b.releaseJaar - a.releaseJaar;
    });
    return sortedGames;
}

function orderByGenre(genre) {
  return gameCollectie.filter(game => game.genre === genre);
}

  function getCurrentPage() {
    const hash = window.location.hash;
    return hash ? parseInt(hash.slice(1)) : 1;
}

function updateCurrentPage() {
    const currentPage = getCurrentPage();
    const currentPageElement  = document.getElementById('current-page');
    currentPageElement.textContent = `Huidige pagina: ${currentPage}`;
}

function toggleHeart(btn, game) {
  game.favorited = !game.favorited;
  btn.setAttribute('data-favorited', game.favorited);
  btn.innerHTML = game.favorited ? '&#9829;' : '&#9825;';
}

function orderByFavorited() {
  const sortedGames = [...gameCollectie];
  sortedGames.sort((a, b) => {
      // Zorg ervoor dat favoriete games eerst komen
      return b.favorited - a.favorited;
  });
  return sortedGames;
}

function orderByReleaseYear() {
    const sortedGames = [...gameCollectie];
    sortedGames.sort((a, b) => {
        return a.releaseJaar - b.releaseJaar;
    });
    return sortedGames;
}

function orderByReleaseYearReverse() {
    const sortedGames = [...gameCollectie];
    sortedGames.sort((a, b) => {
        return b.releaseJaar - a.releaseJaar;
    });
    return sortedGames;
}

function showCurrentItems() {
    const currentPage = getCurrentPage();
    const itemsPerPage = 5;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const sortedGames = orderById();
    const paginatedGames = sortedGames.slice(start, end);
    const gameContainer = document.querySelector(".game-container");
    gameContainer.innerHTML = '';
    showGamesOnPage(paginatedGames);
    updateCurrentPage();
}

function renderGames(games) {
  const gameContainer = document.querySelector(".game-container");
  gameContainer.innerHTML = '';
  const currentPage = getCurrentPage();
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedGames = games.slice(start, end);
  showGamesOnPage(paginatedGames);
  updateCurrentPage();
}



window.addEventListener('hashchange', showCurrentItems, updateCurrentPage);


document.addEventListener('click', (event) => {
    if (event.target.closest('.game-item')) {
        const game = gameCollectie.find(game => game.naam === event.target.closest('.game-item').querySelector("img").alt);
        showPopup(game.naam, game.description);
    }
});

renderGames(orderById());

