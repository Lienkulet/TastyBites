import { createRouter, createWebHistory } from "vue-router";
import  Home  from '../src/views/Home.vue'
import  MealsByIngredient  from '../src/views/MealsByIngredients.vue'
import  MealsByLetter  from '../src/views/MealsByLetter.vue'
import  MealDetails  from '../src/views/MealDetails.vue'
import  MealsByName  from '../src/views/MealsByName.vue'
import DefaultLayout from '../src/components/DefaultLayout.vue'
import GuestLayout from '../src/components/GuestLayout.vue'
import  Ingredients  from '../src/views/Ingredients.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients
      },
      {
        path: '/by-ingredients/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredient
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
