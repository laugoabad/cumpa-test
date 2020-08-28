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
                  <button
                    type="button"
                    class="butt butt-lg"
                    @click="checkReservarActividad(index)"
                  >Reservar</button>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </section>

    <template v-else>
      <section>
        <div class="header-reserve-activity"></div>
        <div class="card">
          <div class="card-body">
            <h5 class="title-section mb-3">{{activities[i].title}}</h5>
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
                      <div class="day-number text-light">{{optionDay.day.number}}</div>
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
    </template>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Modal from "./../components/Modal.vue";
export default {
  name: "activity",
  components: {
    Carousel,
    Slide,
    Modal
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
      star: "star.png",
      activities: [
        {
          image: "biker-couple-standing-rock-sm.png",
          title: "Rock Cycling",
          stars: 4,
          text1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$100",
          schedule: [
            {
              day: { dayName: "Lunes", number: "10" },
              hour: ["9.00", "11.00", "13.00"]
            },
            {
              day: { dayName: "Miercoles", number: "12" },
              hour: ["9.00", "11.00", "13.00"]
            }
          ]
        },
        {
          image: "da2b00168809f33a7d1357e0682d2683.png",
          title: "Climbing",
          stars: 4,
          text1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$200",
          schedule: [
            {
              day: { dayName: "Martes", number: "11" },
              hour: ["9.00", "11.00", "13.00"]
            }
          ]
        },
        {
          image: "fc84bd3e5331c221acba48e08effb3cf.png",
          title: "Yoga",
          stars: 3,
          text1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$300",
          schedule: [
            {
              day: { dayName: "Jueves", number: "13" },
              hour: ["9.00", "11.00", "13.00"]
            }
          ]
        }
      ]
    };
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
a {
  color: white;
}
.title-section {
  font-size: $f1-8;
  color: $color-secondary;
}
.carousel-slide {
  width: 80%;
  margin: 0em auto;
}
.title {
  font-size: $f1-6;
}
.card {
  margin: 2em auto;
  padding: 1em 2em;
  border-radius: 3em;
  width: 80vw;
  border: none;
  .card-title {
    display: flex;
    flex-flow: row;
    padding: 1em;
    justify-content: center;
    .card-title-descr {
      font-size: $f1-2;
      margin-right: 1.5em;
    }
    li {
      display: inline-block;
    }
    img {
      width: 1.2em;
      height: 1.2em;
    }
  }
}
.card-img-top {
  width: 80%;
  height: auto;
}
.card-text {
  color: $color-primary;
  font-size: $f1;
  padding-bottom: 4em;
}
.schedule {
  box-shadow: 0.2em 0.2em 0.5em rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0.2em 0.2em 0.5em rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0.2em 0.2em 0.5em rgba(0, 0, 0, 0.6);
  -o-box-shadow: 0.2em 0.2em 0.5em rgba(0, 0, 0, 0.6);
  border-radius: 1em;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  padding: 0.7em;
  margin: 2em 0em;
  .day-hour {
    flex: 40%;
    display: flex;
    flex-flow: column;
    padding-left: 3em;
    font-size: $f1-4;
    .day {
      display: flex;
    .day-number {
      background-color: $color-secondary;
      padding: 0.6em 0.6em;
      margin: 0.1em;
      width: 2.2em;
      height: 2.2em;
      border-radius: 1em;
      }
      .day-name {
        font-size: $f1-4;
        font-weight: 500;
      }
    }

    .hour {
      font-size: $f1-4;
      font-weight: 500;
      display: flex;
      align-items: center;
      margin: 0.1em;

      &::before {
        content: "";
        display: inline-block;
        background-image: url(./../assets/img/clock.png);
        background-repeat: no-repeat;
        background-size: 1.58em;
        width: 1.58em;
        height: 1.58em;
        margin-right: 0.5em;
      }
    }
  }

  .cost {
    flex: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  &:hover {
    background: rgba($color-secondary, 0.2);
    transition: all 0.3s ease;
  }
}
.header-reserve-activity {
  display: flex;
  background-image: url(./../assets/img/1019.png);
  background-position: center;
  background-size: cover;
  height: 30em;
}

.background-selected {
  background-color: "rgba(224, 97, 41,.5)";
}
.background-unselected {
  background-color: white;
}
</style>