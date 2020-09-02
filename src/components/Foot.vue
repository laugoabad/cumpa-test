<template>
    <div>
       <nav class="menu">
           <div class="menu__actividades"><img src="~@/assets/img/bicycle.png" alt=""></div>
           <div class="menu__horarios"><img src="~@/assets/img/clock.png" alt=""></div>
           <div class="menu__mensajes"><img src="~@/assets/img/message.png" alt=""></div>
           <div class="menu__configuracion"><img src="~@/assets/img/configuration.png" alt=""></div>
       </nav>
    </div>
</template>
<script>
export default {
    name: "foot",
}
</script>
<style lang="scss" scoped>
   @import "./../css/styles.scss";
   .menu {
       display: flex;
       flex-flow: row nowrap;
       padding: 1.9em;
       border: 1px solid $background-primary;
       box-shadow: -0.4em -0.4em 0.3em $background-primary;
       border-radius: 1em 1em 0 0;
       &__actividades, &__horarios,&__mensajes,&__configuracion {
           flex: 1 1 auto; 
       }
     
        img {
           width: 2.3em;
           height: auto;
           }
   }


</style>