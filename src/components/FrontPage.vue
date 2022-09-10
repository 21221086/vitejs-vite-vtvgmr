<template>
  <header class="bg-gray-200 p-5">
    <h1 class="text-2xl md:text-4xl">Every kid should get to play!</h1>
  </header>

  <div class="bg-white w-full flex flex-col md:flex-row md:space-y-0">
    <div class="bg-zinc-900 px-5 py-40">
      <h1 class="text-2xl md:text-4xl text-stone-100">Upcoming Leagues</h1>
      <br />
      <UpcomingSports :upcomingLeagues="leagues"></UpcomingSports>
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
  data: function () {
    return {
      leagues: [
        {
          sport: 'Soccer',
          name: 'Fall Soccer Recreation',
          minAge: 6,
          maxAge: 18,
          minGrade: 'K',
          maxGrade: '12',
          registrationDeadline: 'Oct 15, 2022',
          seasonStart: 'Oct 21, 2022',
          duration: '8',
        },
        {
          sport: 'Soccer',
          name: 'Fall Soccer Competive',
          minAge: 6,
          maxAge: 18,
          minGrade: 'K',
          maxGrade: '12',
          registrationDeadline: 'Oct 15, 2022',
          seasonStart: 'Oct 21, 2022',
          duration: '8',
        },
        {
          sport: 'Baseball',
          name: 'Fall Baseball Recreation',
          minAge: 6,
          maxAge: 18,
          minGrade: 'K',
          maxGrade: '12',
          registrationDeadline: 'Oct 18, 2022',
          seasonStart: 'Oct 21, 2022',
          duration: '7',
        },
        {
          sport: 'Baseball',
          name: 'Fall Baseball Competive',
          minAge: 6,
          maxAge: 18,
          minGrade: 'K',
          maxGrade: '12',
          registrationDeadline: 'Oct 18, 2022',
          seasonStart: 'Oct 21, 2022',
          duration: '8',
        },
      ],
    };
  },
};
</script>
