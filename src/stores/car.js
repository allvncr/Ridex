import { defineStore } from "pinia";
import car1 from "../assets/images/car-1.jpg";
import car2 from "../assets/images/car-2.jpg";
import car3 from "../assets/images/car-3.jpg";
import car4 from "../assets/images/car-4.jpg";
import car5 from "../assets/images/car-5.jpg";
import car6 from "../assets/images/car-6.jpg";

export const useCarStore = defineStore("Car", {
  state: () => {
    return {
      cars: [
        {
          img: car1,
          name: "Toyota RAV4",
          date: 2021,
          people: 4,
          flash: "Hybrid",
          speedometer: "6.1km / 1-litre",
          hardware: "Automatic",
          price: 440,
        },
        {
          img: car2,
          name: "BMW 3 Series",
          date: 2019,
          people: 4,
          flash: "Gasoline",
          speedometer: "8.2km / 1-litre",
          hardware: "Automatic",
          price: 350,
        },
        {
          img: car3,
          name: "Volkswagen T-Cross",
          date: 2020,
          people: 4,
          flash: "Gasoline",
          speedometer: "5.3km / 1-litre",
          hardware: "Automatic",
          price: 400,
        },
        {
          img: car4,
          name: "Cadillac Escalade",
          date: 2020,
          people: 4,
          flash: "Gasoline",
          speedometer: "7.7km / 1-litre",
          hardware: "Automatic",
          price: 620,
        },
        {
          img: car5,
          name: "BMW 4 Series GTI",
          date: 2021,
          people: 4,
          flash: "Gasoline",
          speedometer: "7.6km / 1-litre",
          hardware: "Automatic",
          price: 530,
        },
        {
          img: car6,
          name: "BMW 4 Series",
          date: 2019,
          people: 4,
          flash: "Gasoline",
          speedometer: "7.2km / 1-litre",
          hardware: "Automatic",
          price: 490,
        },
      ],
    };
  },
  getters: {},
  actions: {
    all_cars(search) {
      let find = this.cars;
      if (search) {
        find = this.cars.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        });
      }

      return find;
    },
  },
});
