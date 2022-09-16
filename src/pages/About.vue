<template>
 <NavigationBar></NavigationBar>
 <Banner></Banner>
  <div class="w-full flex flex-col flex-row">
    <div class="bg-zinc-900 p-40">
      <h1 class="text-2xl md:text-4xl text-stone-100">Here at <a class="text-yellow-400 text-2xl md:text-4xl font-bold italic">Olivia<span class="text-stone-100">Sports</span></a> we offer a different approach to sports with a few distinct changes.</h1>
      <br>
      <div class="grid md:grid-cols-2 flex flex-col flex-row p-2">
        <button v-on:click="showCompInfo" class="m-2 p-2 rounded-lg border-4 border-yellow-400 bg-white text-stone-900">
          Competition
        </button>
        <button v-on:click="showSportsInfo" class="m-2 p-2 rounded-xl border-4 border-yellow-400 bg-white text-stone-900">
          Sports
        </button>  
      </div>
      <div v-show="displaySportsInfo" class="border-4 border-yellow-400 text-stone-900 bg-stone-100 border-4 border-yellow-400">
        We plan to offer as many sport leagues as possible with each league occuring at least twice a year. As time and interest dictate, we will add new sports and new leagues. Have any suggesstion? Email us <a href="#" class="uppercase text-red-600 font-bold">here</a> <br><br>Want to play multiple sports? EASY. Just coordiante practices with your coaches. Game times for each sport and age will be offset allowing your player to seamlessly juggle their athletic schedules.

      </div>
      <div v-show="displayCompInfo" class="border-4 border-yellow-400 text-stone-900 bg-stone-100 border-4 border-yellow-400">
        Some people love the daily grind and fierce competition of sports.  Others are new and just want to learn. Many just want to play without dedicating a large amount of their time. Perhaps they want to dedicate their time to another hobby or multiple sports yet still find enjoyment in the social atmosphere and the competition. <br><br>Here at <a class="text-yellow-400 text-xl font-bold italic">Olivia<span class="text-stone-900">Sports</span></a> we aim to help everyone accomplish their goals. We believe that <span class="font-bold uppercase">every</span> kid should get to play <span class="font-bold uppercase">every</span> sport at their level.
        <div class="text-stone-900">
          Our goal is to offer as many sports as possible at 3 distinct levels.  
          <ol type="A">
            <li>Elite <InfoIcon v-on:click="eliteHover = !eliteHover" class="inline"></InfoIcon>
              <InfoText v-show="eliteHover" textToDisplay='These are your traditional travel teams that are fairly well established. Designed for players and teams looking for a higher level of competition. Often these are atheletes who love the daily grind and fierce competition. They dont mind putting in the necessary time to improve. While they can certainly play multiple sports many are highly focused on improving in a single sport.'></InfoText>
            </li>
            <li>Competetive <InfoIcon v-on:click="compHover = !compHover" class="inline"></InfoIcon>
              <InfoText v-show="compHover" textToDisplay='These are your traditional travel teams that are fairly well established. Designed for players and teams looking for a higher level of competition. Often these are atheletes who love the daily grind and fierce competition. They dont mind putting in the necessary time to improve. While they can certainly play multiple sports many are highly focused on improving in a single sport.'></InfoText>
            </li>
            <li>Recreation <InfoIcon class="inline"></InfoIcon></li>
          </ol>
        </div>
      </div>
      <br>
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
import InfoIcon from '../components/InfoIcon.vue'
import InfoText from '../components/InfoText.vue'

export default {
  data: function() {
    return {
      displaySportsInfo: false,
      displayCompInfo: false,
      eliteHover: false,
      compHover: false
    }
  },
  components: {NavigationBar, Banner, InfoIcon, InfoText},
  methods: {
    showCompInfo() {
      if (this.displayCompInfo === true) {
        this.displayCompInfo = false
      } else {
        this.displaySportsInfo = false
        this.displayCompInfo = true
      }
    },
    showSportsInfo() {
      if (this.displaySportsInfo === true) {
        this.displaySportsInfo = false
      } else {
        this.displayCompInfo = false
        this.displaySportsInfo = true
      }
    }
  }
};
</script>