<template>
        <div class="bg-white shadow-md  rounded-xl  hover:scale-105
            ease-in-out duration-300">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}"  
            class="overflow-hidden cursor-pointer">
            <img :src="meal.strMealThumb" 
            :alt="strMeal" 
            class="rounded-t-xl md:h-64 w-full object-cover  "
            >
        </router-link>
            <div class="text-lg font-medium p-3 flex flex-col gap-2 overflow-hidden">
            <h3 class="text-lg font-bold">{{ meal.strMeal }}</h3>
            <p class="text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque repudiandae veniam earum 
                maxime exercitationem eum perspiciatis, dolores dicta quisquam harum similique nihil nostrum 
                quam minima soluta, nisi ipsa sit.</p>   
                <a :href="meal.strYoutube" 
                    target="_blank"
                    class="hover:text-white hover:bg-red-600 text-red-600 transition-colors border
                        border-red-600 w-fit px-3 py-2 rounded-md text-base
                         font-medium ease-in-out duration-500"
                >
                    YouTube
                </a>
            </div>
        </div>
</template>

<script setup>

const { meal } = defineProps({
    meal: Object
});

</script>