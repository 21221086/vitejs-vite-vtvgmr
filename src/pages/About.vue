<template>
 <NavigationBar></NavigationBar>
 This is the About page
 <Banner></Banner>
 </template>

<script>
import NavigationBar from '../components/NavigationBar.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {NavigationBar, Banner}
};
</script>