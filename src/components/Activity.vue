<template>
  <div>
    <h2 class="title-section">Actividades</h2>
    <div class="carousel-container">
      <carousel
        :navigationEnabled="true"
        :paginationEnabled="false"
        :perPageCustom="[[375,1],[768, 3], [1024, 3]]"
        class="carousel-slide"
      >
        <!-- first element in carousel --> 
        <slide class="slide">
          <img
            class="card-img-top img-fluid d-block mx-auto"
            :src="getImgUrl(slides[0].image)"
            alt="Card image cap"
          />
          <h3 class="title">{{slides[0].title}}</h3>
        <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h5 class="card-title-descr">{{slides[0].title}}</h5>
                <h6 class="stars">{{slides[0].stars}}</h6>
              </div>
              <p class="card-text">{{slides[0].text1}}</p>
              <div class="butt butt-md">
                <a href="#" class="card-link">Mas Info</a>
              </div>
              <div class="butt butt-lg">
                <a href="#" class="card-link">Reservar</a>
              </div>
            </div>
          </div>
        </slide>
        
        <!-- Second element in carousel -->
        <slide class="slide">
          <img
            class="card-img-top img-fluid d-block mx-auto"
            :src="getImgUrl(slides[1].image)"
            alt="Card image cap"
          />
          <h3 class="title">{{slides[1].title}}</h3>
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h5 class="card-title-descr">{{slides[1].title}}</h5>
                <h6 class="stars">{{slides[1].stars}}</h6>
              </div>
              <p class="card-text">{{slides[1].text1}}</p>
              <div class="butt butt-md">
                <a href="#" class="card-link">Mas Info</a>
              </div>
              <div class="butt butt-lg">
                <a href="#" class="card-link">Reservar</a>
              </div>
            </div>
          </div>
        </slide>
        <!--   Third element in carousel -->
        <slide class="slide">
          <img
            class="card-img-top img-fluid d-block mx-auto"
            :src="getImgUrl(slides[2].image)"
            alt="Card image cap"
          />
          <h3 class="title">{{slides[2].title}}</h3>
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h5 class="card-title-descr">{{slides[2].title}}</h5>
                <h6 class="stars">{{slides[2].stars}}</h6>
              </div>
              <p class="card-text">{{slides[2].text1}}</p>
              <div class="butt butt-md">
                <a href="#" class="card-link">Mas Info</a>
              </div>
              <div class="butt butt-lg">
                <a href="#" class="card-link">Reservar</a>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "activity",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      leerMas0: false,
      leerMas1: false,
      leerMas2: false,

      slides: [
        {
          image: "biker-couple-standing-rock-sm.png",
          title: "Rock Cycling",
          stars: 4,
          text1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          image: "da2b00168809f33a7d1357e0682d2683.png",
          title: "Climbing",
          stars: 4,
          text1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          image: "fc84bd3e5331c221acba48e08effb3cf.png",
          title: "Yoga",
          stars: 3,
          text1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("./../assets/img/" + pic);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../public/css/styles.scss";
a {
  color: white;
}
.title-section {
  font-size: $f6;
  color: $color-text-secondary;
}

.carousel-slide {
  width: 80%;
  margin: 0em auto;
  .title {
    font-size: $f4;
  }
  .card {
    margin: 2em auto;
    padding: 1em 2em;
    border-radius: 3em;
    width: 80vw;
    border: none;
  }
  .card-title {
    display: flex;
    padding: 1em;
    justify-content: center;
    .card-title-descr {
      font-size: $f2;
    }
  }
  .card-text {
    color: $color-text-primary;
    font-size: $f1;
    padding-bottom: 4em;
  }
}
</style>