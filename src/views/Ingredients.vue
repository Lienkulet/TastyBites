<template>
    <div class="p-4 pb-4">
        <input type="text" 
            class="rounded-xl p-4 shadow border-2 border-gray-200 w-full"
            placeholder="Search for Ingredients" 
            v-model="keyword"
        />
    </div>
    <div class="p-4 ">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">
            Ingredients:</h1>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-6">
                <router-link
                        :to="{
                            name: 'byIngredient',
                            params: {
                                ingredient: ingredient.strIngredient
                            }
                        }" 
                        v-for="ingredient of computedIngredients" 
                        :key="ingredient.id"
                        class="block bg-white rounded-xl text-center shadow-md p-3 mb-3
                             hover:text-orange-500  transition-colors "
                    >
                    <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
                </router-link>
            </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../../axiosCliemt';
import { computed } from '@vue/reactivity';

const keyword = ref('');
const ingredients = ref([]);
const computedIngredients = computed(() => {
   if(!computedIngredients) return ingredients;
    
        return ingredients.value.filter(i => 
            i.strIngredient.toLowerCase().
            includes(keyword.value.toLowerCase())
            )
   
})

onMounted(() => {
    axiosClient.get('/list.php?i=list').then(({data}) => {
        ingredients.value = data.meals;
    })
})

</script>