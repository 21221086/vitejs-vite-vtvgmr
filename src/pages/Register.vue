<template>
  <NavigationBar></NavigationBar>
  This is the Registration page
  <br>My League: <br> {{ JSON.parse(league).sport }}
  <Banner></Banner>
</template>



<script>
import NavigationBar from '../components/NavigationBar.vue';
import Banner from '../components/Banner.vue'
import FrontPage from '../pages/FrontPage.vue'
export default {
  data: function () {
    return {
      showFrontPage: true
    }
  },
  props: ['league'],
  components: { FrontPage, Banner, NavigationBar  },
};
</script>