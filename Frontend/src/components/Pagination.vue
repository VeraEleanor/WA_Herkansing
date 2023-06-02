<template>
  <div>
    <GameCard v-for="game in paginatedData" :key="game.id" :game="game"></GameCard>
  </div>
</template>

<script>
import GameCard from './GameCard.vue';
import gameCollection from './/GameCollection.json'; 

export default {
name: 'GamePagination',
components: {
  GameCard,
},
data() {
  return {
    gameCollection: [],
    currentPage: 1,
    itemsPerPage: 5,
  };
},
computed: {
  paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.orderById().slice(start, end);
  },
  pageCount() {
    return Math.ceil(this.gameCollection.length / this.itemsPerPage);
  },
},
created() {
  this.fetchData();
},
methods: {
  fetchData() {
    this.gameCollection = gameCollection;
  },
  changePage(pageNumber) {
    this.currentPage = pageNumber;
  },
  orderById() { 
    const sortedGames = [...this.gameCollection];
    sortedGames.sort((a, b) => a.id - b.id);
    return sortedGames;
  },
},
};
</script>
