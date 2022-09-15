<template>
  <NavigationBar></NavigationBar>
  <Banner></Banner>

  <!-- FORM -->
  <div class="flex h-screen w-full bg-gray-900 items-center justify-center">
  <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-3/4 mt-20 mb-20">
  
    <div class="flex justify-center">
      <div class="flex">
          <div v-if="league">For {{ JSON.parse(league).sport }} </div>
      </div>
    </div>

    <div class="grid">
      <!-- SPORT -->
      <div class="pt-5 pb-5" v-if="formToShow === 'Sport'">
        <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
          League Information
        </h1>
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Sport</label>
          <select class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Baseball</option>
            <option>Soccer</option>
            <option>Football</option>
          </select>
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Season</label>
          <select class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Fall 2020</option>
            <option>Winter 2020</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <InfoText v-show="leagueHover" textToDisplay="Competition Level"></InfoText>
          <label class="text-left uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">League
            <InfoIcon v-on:click="leagueHover = !leagueHover" class="inline"></InfoIcon>
          </label>
          <select class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Recreational</option>
            <option>Competetive</option>
            <option>Elite</option>
          </select>
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <InfoText v-show="registrationHover" textToDisplay="Are you a coach registering a team or a parent registering a player?"></InfoText>
          <label class="text-left uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Registration Type
            <InfoIcon v-on:click="registrationHover = !registrationHover" class="inline"></InfoIcon>
          </label>
            
          <select class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Team</option>
            <option>Player</option>
          </select>
        </div>

        <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <router-link to="/"><button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button></router-link>
          <button v-on:click="displayForm('Player')" class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Next</button>
        </div>
      </div>

      <!-- PLAYER INFO -->
      <div class="pt-5 pb-5" v-if="formToShow === 'Player'">
        <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
          Player Information
        </h1>
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 1</label>
          <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 1" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div class="grid grid-cols-1">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 2</label>
            <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 2" />
          </div>
          <div class="grid grid-cols-1">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 3</label>
            <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 3" />
          </div>
        </div>
        <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <button v-on:click="displayForm('Sport')" class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Back</button>
          <button v-on:click="displayForm('Parent')" class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Next</button>
        </div>
      </div>

      <div class="pt-5 pb-5" v-if="formToShow === 'Parent'">
        <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
          Parent Information
        </h1>
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Another Input</label>
          <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Another Input" />
        </div>

        <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <button v-on:click="displayForm('Player')" class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Back</button>
          <button v-on:click="submitForm" class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>



<script>
import NavigationBar from '../components/NavigationBar.vue';
import Banner from '../components/Banner.vue'
import InfoIcon from '../components/InfoIcon.vue'
import InfoText from '../components/InfoText.vue'
import FrontPage from '../pages/FrontPage.vue'
export default {
  data: function () {
    return {
      showFrontPage: true,
      formToShow: 'Sport',
      leagueHover: false,
      registrationHover: false
    }
  },
  props: ['league'],
  components: { FrontPage, Banner, NavigationBar, InfoIcon, InfoText },
  methods: {
    displayForm (formToShow) {
      console.log('formToShow: ', formToShow)
      this.formToShow = formToShow
    },
    submitForm () {
      console.log('Form Submitted')
    }
  }
};
</script>