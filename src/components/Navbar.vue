<template>
    <header class="bg-white shadow-md h-16 flex flex-row px-8
          justify-between items-center">
      <router-link :to="{name: 'home'}" 
        class="px-2 hover:text-orange-500 font-bold text-xl transition-colors">
        TastyBites
      </router-link>
      <div class="flex items-center ">
          <router-link :to="{name: 'byName'}" 
              class="px-2 h-full transition-colors font-semibold text-lg hover:text-orange-500">
            Search Meals
          </router-link>
          <router-link :to="{name: 'byLetter'}" 
              class="px-2 h-full transition-colors font-semibold text-lg hover:text-orange-500">
            Meals by Letter
          </router-link>
          <router-link :to="{name: 'ingredients'}" 
              class="px-2 h-full transition-colors font-semibold text-lg hover:text-orange-500">
            Meals by Ingredients
          </router-link>
      </div>
    </header>
</template>