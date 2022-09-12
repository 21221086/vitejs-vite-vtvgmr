<template>
  This is the home page
  <Banner></Banner>
  <FrontPage></FrontPage>
  <div>Hi</div>
</template>

<script>
import FrontPage from './FrontPage.vue';
import Banner from '../components/Banner.vue';

export default {
  components: { FrontPage, Banner },
};
</script>
