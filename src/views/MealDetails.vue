<template>
    <figure class="flex flex-col justify-center shadow-lg max-w-[1000px] mx-auto md:py-4 ">
       <img 
            :src="meal.strMealThumb"
            :alt="meal.strMeal" 
            class="md:rounded-xl md:max-h-[600px] ">
       <figcaption class="bg-white p-8">
            <header class="">
                <div class="flex flex-wrap items-center justify-between">
                    <h1 class="font-bold text-3xl">{{ meal.strMeal }}</h1>
                    <a :href="meal.strYoutube" 
                    target="_blank"
                    class="hover:text-white hover:bg-red-600 text-red-600 transition-colors border
                        border-red-600 w-fit px-3 py-2 rounded-md text-base
                         font-medium ease-in-out duration-500"
                >
                    YouTube
                </a>
                </div>
                <ul class="list-disc px-8 text-lg my-4  ">
                    <li>Category: 
                        <span class="font-medium">
                            {{ meal.strCategory }}        
                        </span>
                    </li>
                    <li>Type: 
                        <span class="font-medium">
                            {{ meal.strArea }}
                        </span>
                    </li>
                </ul>
            </header>
            <main>
                <h1 class="mb-4 text-2xl font-semibold">Ingredients and Measures: </h1>
                <ul>
                    <li 
                        v-for="index in 20"
                        :key="index"
                        class="text-lg font-medium px-2"
                    >
                    <span
                        v-if="meal['strIngredient' + index]"
                    >
                        {{ index }}.  {{ meal['strIngredient' + index] }} - {{ meal['strMeasure' + index] }}
                    </span>
                    </li>
                </ul>
                <div>
                    <h1 class="my-4 text-2xl font-semibold">Instructions:</h1>
                    <p class="text-base">{{ meal.strInstructions }}</p>
                </div>
            </main>
       </figcaption>
    </figure>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../../axiosCliemt';

const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`/lookup.php?i=${route.params.id}`)
        .then(({data}) => {
            meal.value = data.meals[0] || {};
        })
})

</script>