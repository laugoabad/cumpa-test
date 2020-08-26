<template>
  <div id="app">
    <div class="container-100">
      <header class="header">
        <navi></navi>
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
import Activity from "./components/Activity.vue";
import Foot from "./components/Foot.vue";
import Navi from "./components/Navi.vue";

export default {
  name: "App",
  components: {
    Foot,
    Activity,
    Navi
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
@import "../public/css/styles.scss";

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
