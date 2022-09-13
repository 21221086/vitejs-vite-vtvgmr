<template>
  This is the home page
  <NavigationBar></NavigationBar>
  <Banner></Banner>
  <FrontPage></FrontPage>
  <div>Hi</div>
</template>

<script>
import FrontPage from './FrontPage.vue';
import NavigationBar from '../components/NavigationBar.vue';
import Banner from '../components/Banner.vue';

export default {
  components: { NavigationBar, FrontPage, Banner },
};
</script>
