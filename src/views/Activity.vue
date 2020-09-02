<template>
  <div>
    <section v-if="!reservarActividad">
      <h2 class="title-section">Actividades</h2>
      <!-- Carousel -->
      <div class="carousel-container">
        <carousel
          :navigationEnabled="true"
          :paginationEnabled="false"
          :perPageCustom="[[200,1],[768, 3], [1024, 3]]"
          class="carousel-slide"
        >
          <slide v-for="(activity, index) in activities" :key="index" class="slide">
            <!--  element in carousel -->
            <img
              class="card-img-top img-fluid d-block mx-auto"
              :src="getImgUrl(activity.image)"
              alt="Card image"
            />
            <h3 class="title">{{activity.title}}</h3>
            <div class="card">
              <div class="card-body">
                <div class="card-title">
                  <h5 class="card-title-descr">{{activity.title}}</h5>
                  <ul>
                    <li v-for="(n , ind) in activity.stars" :key="ind">
                      <img :src="getImgUrl(star)" alt />
                    </li>
                  </ul>
                </div>
                <p class="card-text">{{activity.text1}}</p>
                <div class="mb-4">
                  <button type="button" class="butt butt-md">Mas Info</button>
                </div>
                <div class="mb-2">
                  <router-link :to="{ name: 'reserveActivity', params: { id: index } }"><button
                    type="button"
                    class="butt butt-lg"
                    @click="checkReservarActividad(index)"
                  >Reservar</button>
                  </router-link>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </section>

    <template v-else>
     
    </template>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
// import Modal from "./../components/Modal.vue";
import { mapState } from "vuex";
export default {
  name: "activity",
  components: {
    Carousel,
    Slide,
    // Modal
  },

  data() {
    return {
      reservarActividad: false,
      confirmarReservarActividad: false,
      activityReserved: "",
      dayNameReserved: "",
      numberReserved: "",
      hourReserved: "",
      priceReserved: "",
      backgColor: false,
      star: "star.png"
    };
  },
  computed: {
    ...mapState(["activities"])
  },

  methods: {
    getImgUrl(pic) {
      return require("./../assets/img/" + pic);
    },

    checkReservarActividad(index) {
      this.reservarActividad = !this.reservarActividad;
      this.i = index;
    },

    elegirFecha(index1, index2, index3) {
      this.activityReserved = this.activities[index1];
      this.dayNameReserved = this.activityReserved.schedule[index2].day.dayName;
      this.numberReserved = this.activityReserved.schedule[index2].day.number;
      console.log(this.dayNameReserved + " " + this.numberReserved);
      this.hourReserved = this.activityReserved.schedule[index2].hour[index3];
    },

    checkConfirmarReservarActividad() {
      this.confirmarReservarActividad = !this.confirmarReservarActividad;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../css/styles.scss";

</style>