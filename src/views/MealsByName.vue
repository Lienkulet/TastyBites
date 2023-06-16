
<template>
    <div class="p-8 pb-4">
        <input type="text" 
            class="rounded-xl p-4 shadow border-2 border-gray-200 w-full"
            placeholder="Search for meals" 
            v-model="keyword"
            @change="searchMeals"
        />
    </div>
    <div class="px-8">
        <h3 
            v-if="meals.length >= 0"
            class="font-bold text-base">
            '{{ meals.length }}' matches found for '{{ keyword }}'
        </h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 pt-4">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import store from '../store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
        store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name;
    if(keyword.value){
        searchMeals();
    }
})
</script>