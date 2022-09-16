<template>
<div class="inline-block visible z-10 py-1 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">{{ textToDisplay }} </div>
</template>

<script>
export default {
  name: 'InfoText',
  props: ['textToDisplay'],
};
</script>