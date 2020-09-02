import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

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
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

