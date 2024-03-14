<template>
  <div>
    <p>Выбран вариант: {{ selectedOption }}</p>
  </div>
</template>
<script>
// import { computed } from "vue";
// import { useRoute } from "vue-router";

export default {
  props: {
    selectedOption: String,
  },
};
// // eslint-disable-next-line no-undef
// const props = defineProps({
//   selectedOption: {
//     // eslint-disable-next-line no-undef
//     type: String,
//   },
// });
// // eslint-disable-next-line no-undef
// const selectedOption = ref("");

// // eslint-disable-next-line no-undef
// onMounted(() => {
//   // eslint-disable-next-line no-undef
//   selectedOption.value = props.selectedOption;

//   return {
//     selectedOption,
//   };
// });
</script>
