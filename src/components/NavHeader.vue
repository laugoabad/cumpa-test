<template>
    <div>
       <nav class="nav-bar">
          <router-link class="logo" to="/">
            <img src="./../assets/img/Cumpa-Fit-Logo.png" alt />
          </router-link>
          <div class="search-container">
            <input type="text" placeholder="Fit/Gym"/>
            <button type="submit" class="searchButton">
              <img src="./../assets/img/search.png" alt="buscar" />
            </button>
          </div>
          <!-- <div class="menu">
            <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mr-auto text-center navegacion">
          <li v-for="(item, index) of arregloRouter" :key="index" class="nav-item">
            <router-link v-bind:to="item.ruta">{{item.nombre}}</router-link>
          </li>
        </ul>
            </div>
          </div> -->
        </nav>
    </div>
</template>

<script>

export default {
  name: 'nav-header',
  
}
</script>

<style lang="scss" scoped>
@import "./../css/styles.scss";
 
 .nav-bar {
    color: $color-primary;
    display: flex;
    flex-flow: row nowrap;
    padding: 1.8em 2em 1em 2em;
    margin-bottom: 3em;
    box-shadow: 0px 3px 6px $background-primary;
    align-items: center;
    justify-content: space-between;
      img{ 
      height: auto;
      width: 100%;
     }
    .search-container {
        display: flex;
        position: relative;
        align-items: center;
        input {
            width: 20em;
            height: 3.4em;
            border-radius: 1.7em;
            border: none;
            background-color: $background-primary;
            &::placeholder{
              font-size: $f1-2;
              padding: 1em;
            }
          }
        button {
            position: absolute;
            right: 1.5em;
            border: none;
            font-weight: 300;
            background-color: $background-primary;
            img {
                width: 1.5em;
                font-weight: 700;
            }
          }         
        }
 }

</style>
