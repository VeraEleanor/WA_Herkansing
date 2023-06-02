<template>
    <div class="game-container">
      <div class="game-item" v-for="game in gameCollection" :key="game.id">
        <img :src="game.image" :alt="game.name">
        <div class="game-info">
          <h3>{{ game.name }}</h3>
          <div class="game-details">
            <div class="game-genre">
              <span class="genre">{{ game.genre  }}</span>
            </div>
            <div class="game-year">
              <span class="year">{{ game.yearRelease  }}</span>
            </div>
          </div>
          <button class="heart-btn" :data-favorited="game.favorited">❤️</button>
        </div>
      </div>
    </div>
  </template>
  


  
  <script>
  import gameCollection from '/GameCollection.json';

export default {
  name: 'GameCard',
  data() {
    return {
      gameCollection: gameCollection,
    };
  },
};
  </script>
  

<style scoped>
   
   .game-container {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em;
  
}



@media (max-width: 1200px) {
  .game-container {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}

@media (max-width: 1000px) {
  .game-container {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
.game-item {
  position: relative;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  height: 400px;  /* Voeg een vaste hoogte toe */
  overflow: hidden;  /* Verberg de buitenste delen van de afbeelding */
}

.game-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Behoud de aspectratio van de afbeelding terwijl je deze vult */
  object-position: center;
  transition: transform 0.3s ease-in-out;
}
  .game-item:hover img {
    transform: scale(1.1);
  }
  
  .game-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transition: opacity 0.3s ease-in-out;
  }
  
  .game-item:hover .game-info {
    opacity: 1;
  }
  
  .game-details {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
}
  
  .description {
    display: none;
  }
  
@media (min-width: 768px) {
  .game-container {
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  }
}
@media (min-width: 1024px) {
  .game-container {
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  }
}
</style>
