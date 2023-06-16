<template>
    <div class="flex flex-col p-8 min-h-screen">       
        <h1 class="text-4xl font-bold mb-4 text-orange-500">All meals</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5  pt-4 ">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import { RouterLink } from 'vue-router';
import axiosClient from '../../axiosCliemt';
import MealItem from '../components/MealItem.vue';

const meals = ref([]);
const ingredients = ref([]);

onMounted(async () => {
    for(let i = 0; i < 20; i++){
        await axiosClient.get('/random.php').then(({data}) => {            
            meals.value.push(data.meals[0]);
        })
    }
})

</script>