<template>
  <header class="bg-yellow-400 p-5">
    <h1 class="text-2xl md:text-4xl">Because every kid should get to play!</h1>
  </header>

  <div class="bg-white w-full flex flex-col md:flex-row md:space-y-0">
    <div class="bg-zinc-400 px-5 py-40">
      <h1 class="text-2xl md:text-4xl text-stone-900">Upcoming Leagues</h1>
      <br />
      <UpcomingSports></UpcomingSports>
    </div>
  </div>

  <footer class="bg-slate-800 mt-auto p-5">
    <h1 class="text-2xl md:text-4xl text-white">Footer</h1>
  </footer>
</template>

<script>
import UpcomingSports from './UpcomingSports.vue';

export default {
  components: { UpcomingSports },
};
</script>
