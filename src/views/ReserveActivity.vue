<template>
  <div>
     <section class="schedule-screen">
        <div class="header-reserve-activity img-fluid"></div>
        <div class="card">
          <div class="card-body">
            <h5 class="title-section mt-4">{{activities[i].title}}</h5>
            <p class="card-text">{{activities[i].text1}}</p>
            <div v-for="(optionDay,index2) in activities[i].schedule" :key="index2">
              <div
                v-for="(optionHour,index3) in optionDay.hour"
                :key="index3"
                @click="elegirFecha(i,index2, index3);"
              >
                <div
                  class="schedule"
                  @click="backgColor = !backgColor"
                  :class="{'background-selected':backgColor, 'background-unselected': !backgColor}"
                >
                  <div class="day-hour">
                    <div class="day">
                      <div class="day-number">{{optionDay.day.number}}</div>
                      <div class="day-name">{{optionDay.day.dayName}}</div>
                    </div>
                    <div class="hour">{{optionHour}}</div>
                  </div>
                  <div class="cost">
                    <div class="butt butt-price">{{activities[i].price}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-2 mt-5">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="butt butt-lg"
                data-toggle="modal"
                data-target="#modal"
              >Reservar</button>

              <!-- Modal -->
              <div>
                <modal
                  id="modal"
                  :activityR="activities[i].title"
                  :dayNameR="dayNameReserved"
                  :numberR="numberReserved"
                  :hourR="hourReserved"
                ></modal>
              </div>
            </div>
          </div>
        </div>
      </section>
 
  </div>
</template>

<script>
import Modal from "./../components/Modal.vue";
import { mapState } from "vuex";
export default {
  name: "reserve-activity",
  components: {
      Modal
  },
  computed: {
    ...mapState(["activities"]),
  },
   data() {
    return {
      i: 0,
      reservarActividad: false,
      confirmarReservarActividad: false,
      activityReserved: "",
      dayNameReserved: "",
      numberReserved: "",
      hourReserved: "",
      priceReserved: "",
      backgColor: false,
     
    };
  },

  beforeMount() {
      this.i = this.$route.params.id
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