<template>
  <table class="table-auto border-collapse border border-slate-300">
    <thead>
      <tr class="bg-sky-500 text-stone-900">
        <td class="p-2">Sport</td>
        <td class="p-2">League</td>
        <td class="p-2">Ages</td>
        <td class="p-2">Registration Deadline</td>
        <td class="p-2">Season Start</td>
        <td class="p-2">Duration</td>
        <td class="p-2"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(league, key) in upcomingLeagues"
        class="even:bg-amber-100 odd:bg-blue-100"
      >
        <td class="p-2">{{ league.sport }}</td>
        <td class="p-2">{{ league.name }}</td>
        <td class="p-2">{{ league.minAge }} - {{ league.maxAge }}</td>
        <td class="p-2">{{ league.registrationDeadline }}</td>
        <td class="p-2">{{ league.seasonStart }}</td>
        <td class="p-2">{{ league.duration }} Weeks</td>
        <td class="p-2">
          <router-link :to="league.url">
          <PencilIcon></PencilIcon></router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PencilIcon from '../components/PencilIcon.vue';

export default {
  name: 'UpcomingSports',
  props: ['upcomingLeagues'],
  components: { PencilIcon },
};
</script>
