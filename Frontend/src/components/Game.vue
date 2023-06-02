//create a card component with info from the GameCollecion.json 

import { mapGetters } from 'vuex'
import Card from './Card.vue'

export default {
  name: 'Game',
  components: {
    Card
  },
  computed: {
    ...mapGetters([
      'getGameCollection'
    ])
  },
  methods: {
    //get the game collection from the store
    getGameCollection() {
      this.$store.dispatch('getGameCollection')
    }
  },
  mounted() {
    this.getGameCollection()
  }
}