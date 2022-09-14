<template>
  <header class="w-full w-screen h-16 bg-zinc-900 drop-shadow-lg">
    <div class="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
      <!-- Logo Here -->
      <a class="text-yellow-400 text-xl font-bold italic">Olivia<span class="text-white">Sports</span></a>

      <!-- Menu links here -->
      <ul id="menu" v-if='menuVisible' class="hidden fixed top-0 right-20 px-10 py-16 bg-gray-800 z-50 md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">
        <li class="md:hidden z-90 fixed top-4 right-6">
          <a href="javascript:void(0)" class="text-right text-white text-4xl" onclick="toggleMenu()">&times;</a>
        </li>

        <li>
          <router-link to="/" class="text-white opacity-70 hover:opacity-100 duration-300">Home</router-link>
        </li>
        <li>
           <router-link to="/register" class="text-white opacity-70 hover:opacity-100 duration-300">Registration</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white opacity-70 hover:opacity-100 duration-300">About</router-link>
        </li>
        <li>
          <a class="text-white opacity-70 hover:opacity-100 duration-300" href="#">Contact</a>
        </li>
      </ul>

      <!-- This is used to open the menu on mobile devices -->
      <div class="flex items-center md:hidden">
        <button
          class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300" @click="toggleMenu()">&#9776;</button>
      </div>
    </div>
  </header>
</template>

<!-- Javascript Code -->
<script>
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';


export default {
 
  data: function () {
    return {
      menuVisible: true
    }
  },
  mounted() {
    this.menuVisible = true
  },
  methods: {
    toggleMenu() {
      console.log('menuVisible: ', this.menuVisible)
      this.menuVisible = !this.menuVisible
      // menu.classList.toggle('hidden');
      // menu.classList.toggle('w-full');
      // menu.classList.toggle('h-screen');
    }
  }
}
</script>
