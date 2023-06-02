<template>
  <div>
    <GameCard v-for="game in paginatedData[currentPage - 1]" :key="game.id" :game="game"></GameCard>
  </div>
</template>

<script>
import GameCard from './GameCard.vue';

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
      let result = [];
      if(this.gameCollection){
        for(let i = 0; i < this.gameCollection.length; i += this.itemsPerPage){
          result.push(this.gameCollection.slice(i, i + this.itemsPerPage));
        }
      }
      return result;
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch('/GameCollection.json');
      this.gameCollection = await response.json();
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
