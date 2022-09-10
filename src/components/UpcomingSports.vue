<template>
  <table class="table-auto border-collapse border border-slate-300">
    <thead>
      <tr class="bg-sky-500 text-white">
        <td class="p-2">League</td>
        <td class="p-2">Ages</td>
        <td class="p-2">Grade Level</td>
        <td class="p-2">Registration Deadline</td>
        <td class="p-2">Season Start</td>
        <td class="p-2">Duration</td>
        <td class="p-2"></td>
      </tr>
    </thead>
    <tbody>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">Soccer</td>
        <td class="p-2">6-18</td>
        <td class="p-2">K-12</td>
        <td class="p-2">Oct 10, 2022</td>
        <td class="p-2">Oct 15, 2022</td>
        <td class="p-2">7 Weeks</td>
        <td class="p-2"><PencilIcon></PencilIcon></td>
      </tr>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">Soccer</td>
        <td class="p-2">6-18</td>
        <td class="p-2">K-12</td>
        <td class="p-2">Oct 10, 2022</td>
        <td class="p-2">Oct 15, 2022</td>
        <td class="p-2">7 Weeks</td>
        <td class="p-2"><PencilIcon></PencilIcon></td>
      </tr>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">Soccer</td>
        <td class="p-2">6-18</td>
        <td class="p-2">K-12</td>
        <td class="p-2">Oct 10, 2022</td>
        <td class="p-2">Oct 15, 2022</td>
        <td class="p-2">7 Weeks</td>
        <td class="p-2"><PencilIcon></PencilIcon></td>
      </tr>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">Soccer</td>
        <td class="p-2">6-18</td>
        <td class="p-2">K-12</td>
        <td class="p-2">Oct 10, 2022</td>
        <td class="p-2">Oct 15, 2022</td>
        <td class="p-2">7 Weeks</td>
        <td class="p-2"><PencilIcon></PencilIcon></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PencilIcon from './PencilIcon.vue';

export default {
  name: 'UpcomingSports',
  props: {
    label: String,
  },
  components: { PencilIcon },
};
</script>
