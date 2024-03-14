import { createRouter, createWebHistory } from "vue-router";
import OptionsComponent from "../views/OptionsComponent";
import CalculationTable from "../views/СalculationTable";
import ParagraphOption from "../views/ParagraphOption";
const routes = [
  {
    path: "/",
    component: OptionsComponent,
  },
  {
    path: "/calc/:selectedOption",
    component: CalculationTable,
    props: true,
  },
  {
    path: "/paragraph",
    component: ParagraphOption,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
