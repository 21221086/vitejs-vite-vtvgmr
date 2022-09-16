<template>
  This is the home page
  <NavigationBar></NavigationBar>
  <Banner></Banner>
  <FrontPage></FrontPage>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import FrontPage from './FrontPage.vue';
import Banner from '../components/Banner.vue';

export default {
  components: { NavigationBar, FrontPage, Banner },
};
</script>
