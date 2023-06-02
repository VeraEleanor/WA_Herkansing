<template>
    <nav>
        <button id="filter-btn" class="filter-btn">

            <es-icon
            icon="chevron-down"
            size="s"
            color="black"
            class="filter-icon"
            ></es-icon>
           </button>
       
        <input type="text" id="search" placeholder="Search..">
        <div id="home" ><a href="#" id="home-btn"><h1>Game Collectie</h1></a> </div>
        <ul>
            <li><a href="#1">Pagina 1</a></li>
            <li><a href="#2">Pagina 2</a></li>
            <li><a href="#3">Pagina 3</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    // Je zou hier JavaScript-logica toevoegen...
}
</script>

<style scoped>

  nav {
    background-color: 
    #f8f8f8;
        padding: 1rem;
    align-items: center;
    display: flex;

  }
  
  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  nav li { 
    margin-left: 10px;
  }
  
  nav ul li {
    margin-right: 1rem;
  }
  
  nav ul li a {
    color: #333;
    text-decoration: none;
  }
  
  nav ul li a:hover {
    color:darksalmon;
  }

</style>
