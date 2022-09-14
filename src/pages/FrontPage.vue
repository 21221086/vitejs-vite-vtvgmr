<template>
  <div class="w-full flex flex-col flex-row">
    <div class="bg-zinc-900 p-40">
      <h1 class="text-2xl md:text-4xl text-stone-100">Upcoming Leagues</h1>
      <br />
      <UpcomingSports class="w-full" :leagues="leagues"></UpcomingSports>
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
          duration: '7',
          url: '/register'
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
          url: '/register'
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
          url: '/register'
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
          url: '/register'
        },
      ],
    };
  },
};
</script>
