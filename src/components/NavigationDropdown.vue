<template>
  <div  class="text-white opacity-70 hover:opacity-100 duration-300"> {{ header }}</div>
  <div  class="text-white opacity-70 hover:opacity-100 duration-300"> {{ options }}</div>
</template>

<script>
export default {
  name: 'NavigationDropdown',
  props: ['header', 'options']

}
</script>