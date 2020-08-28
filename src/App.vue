<template>
  <div id="app">
    <div class="container-100">
      <header class="header">
       <nav-header></nav-header>
      </header>
      <transition name="fade">
        <router-view />
      </transition>
      <section>
        <activity></activity>
      </section>
      <footer>
        <foot></foot>
      </footer>
    </div>
  </div>
</template>


<script>
import NavHeader from "./components/NavHeader.vue";
import Activity from "./views/Activity.vue";
import Foot from "./components/Foot.vue";


export default {
  name: "App",
  components: {
    Foot,
    Activity,
    NavHeader,
  },
  data() {
    return {
      arregloRouter: [
        // { nombre: "HOME", ruta: "/" },
        // { nombre: "NOSOTROS", ruta: "/nosotros" },
        // { nombre: "TIENDA", ruta: "/tienda" },
        // { nombre: "CONTACTO", ruta: "/contacto" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./css/styles.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container-100 {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
}
header {
  display: flex;
  flex-flow: column nowrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
