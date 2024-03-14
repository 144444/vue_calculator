<template>
  <div>
    <select v-model="selectedOption">
      <option value="" disabled selected>Выбeрите тип сайта</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.label"
      >
        {{ option.label }}
      </option>
    </select>
    <paragraph-option :selectedOption="selectedOption" />
    <button v-if="selectedOption" @click="goToCalculationTable">
      Перейти к расчету стоимости выбора
    </button>
  </div>
</template>

<script>
import ParagraphOption from "../views/ParagraphOption.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
// import { useStore } from "vuex";
export default {
  components: { ParagraphOption },
  setup() {
    // eslint-disable-next-line no-undef
    const selectedOption = ref("");
    const router = useRouter();

    const options = ref([]);
    // const selectedOption = ref("");

    // Загрузка данных с сервера
    onMounted(() => {
      fetch("http://localhost:3000/options")
        .then((response) => response.json())
        .then((data) => {
          options.value = data;
        })
        .catch((error) => {
          console.error("Ошибка загрузки данных:", error);
        });
    });
    const goToCalculationTable = () => {
      // eslint-disable-next-line no-undef
      router.push({ path: "/calc/" + selectedOption.value });
      console.log(selectedOption.value);
    };

    // Возвращаем данные, которые будут доступны в шаблоне
    return {
      options,
      // eslint-disable-next-line vue/no-dupe-keys
      selectedOption,
      goToCalculationTable,
      // setSelectedOption,
    };
  },
};
</script>
<style>
select {
  width: 300px;
  height: 50px;
  font-size: 25px;
  padding-left: 15px;
}
p {
  font-size: 20px;
}
button {
  width: 360px;
  height: 67px;
  border-radius: 30px;
  font-size: 18px;
}
</style>
