<template>
 <NavigationBar></NavigationBar>
 <Banner></Banner>
  <div class="w-full flex flex-col flex-row">
    <div class="bg-zinc-900 p-40">
      <h1 class="text-2xl md:text-4xl text-stone-100">Here at OliviaSports we are offering a different approach to sports!</h1>
      <br>
      <div class="grid grid-cols-2 flex flex-col p-5">
        <div class="mx-5 p-2 rounded-lg border-2 border-purple-300 bg-white text-stone-900">
          Competition
        </div>
        <div class="mx-5 p-2 rounded-lg border-2 border-purple-300 bg-white text-stone-900">
          Sports
        </div>  
      </div>
      <div class="text-stone-100">
        Some people love the daily grind and fierce competition of sports.  Others just want the opportunity to learn, while some just want to play competetive sports without dedicating their life to it. Or perhaps dedicate their time to multiple sports.  <br><br>We believe that every kid should get to play every sport at their level.
      </div>
      <br>
      <div class="text-stone-100">
        Our goal is to offer as many sports as possible at 3 distinct levels.  
          <ol type="A">
            <li>Elite</li>
            <li>Competetive</li>
            <li>Recreation</li>
          </ol>
      </div>
      <br />
    </div>
  </div>

  <footer class="bg-slate-800 mt-auto p-5">
    <h1 class="text-2xl md:text-4xl text-white">Footer</h1>
  </footer>
 </template>

<script>
import NavigationBar from '../components/NavigationBar.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {NavigationBar, Banner}
};
</script>