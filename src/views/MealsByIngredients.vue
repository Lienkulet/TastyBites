<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">{{ ingredient }}:</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div v-if="!meals.length " class="min-h-screen flex text-xl justify-center p-8">
            There are no meals
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { computed } from '@vue/reactivity';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
const ingredient = route.params.ingredient

onMounted(() => {
    store.dispatch('searchMealsByIngredient', ingredient);    
})

</script>