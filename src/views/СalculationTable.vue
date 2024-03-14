<template>
  <div>
    <paragraph-option :selectedOption="selectedOption" />
    <table>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Количество</th>
          <th>Цена за единицу</th>
          <th>Общая стоимость</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <input
              type="number"
              v-model="item.quantity"
              @input="calculateTotalCost"
              min="0"
            />
          </td>
          <td>
            <input
              type="number"
              v-model="item.price"
              @input="calculateTotalCost"
              min="0"
            />
          </td>
          <td>{{ item.totalCost }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="total-label">Общая стоимость выбора:</td>
          <td>{{ totalCost }}</td>
        </tr>
      </tfoot>
    </table>
    <button @click="goToFirstPage">Вернуться на первую страницу</button>
  </div>
</template>

<script>
import ParagraphOption from "../views/ParagraphOption.vue";
import { reactive, computed, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

// import { useStore } from "vuex";

export default {
  components: { ParagraphOption },

  props: {
    selectedOption: {
      type: String,
      default: "",
    },
  },
  setup() {
    const router = useRouter();
    const goToFirstPage = () => {
      // eslint-disable-next-line no-undef
      router.push("/");
    };

    const items = reactive([
      { name: "", quantity: 0, price: 0, totalCost: 0 },
      { name: "", quantity: 0, price: 0, totalCost: 0 },
      { name: "", quantity: 0, price: 0, totalCost: 0 },
    ]);

    const calculateTotalCost = () => {
      for (const item of items) {
        item.totalCost = item.quantity * item.price;
      }
    };

    const totalCost = computed(() => {
      let sum = 0;
      for (const item of items) {
        sum += item.totalCost;
      }
      return sum;
    });

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/items");
        const data = response.data;

        // Обновление значений в таблице на основе полученных данных
        for (let i = 0; i < data.length; i++) {
          const item = items[i];
          item.name = data[i].name;
          item.price = data[i].price;
        }
      } catch (error) {
        // console.error(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      items,
      calculateTotalCost,
      totalCost,
      goToFirstPage,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  height: 250px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
}

tfoot th {
  text-align: right;
}

.total-label {
  font-weight: bold;
}
input {
  width: 200px;
  height: 30px;
  padding-left: 20px;
  font-size: 20px;
}

button {
  margin-top: 20px;
}
</style>
