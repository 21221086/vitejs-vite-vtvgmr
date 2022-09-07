<template>
  <table class="table-auto border-collapse border border-slate-300">
    <thead>
      <tr class="bg-indigo-400 text-white">
        <td class="p-2">ID</td>
        <td class="p-2">Name</td>
        <td class="p-2">Price</td>
      </tr>
    </thead>
    <tbody>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">1</td>
        <td class="p-2">Blue T-shirt</td>
        <td class="p-2">$9</td>
      </tr>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">2</td>
        <td class="p-2">Pink T-shirt</td>
        <td class="p-2">$7</td>
      </tr>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">3</td>
        <td class="p-2">Red T-shirt</td>
        <td class="p-2">$4</td>
      </tr>
      <tr class="even:bg-amber-100 odd:bg-blue-100">
        <td class="p-2">4</td>
        <td class="p-2">Green T-shirt</td>
        <td class="p-2">$20</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UpcomingSports'
  props: {
    label: String,
  },
};
</script>
