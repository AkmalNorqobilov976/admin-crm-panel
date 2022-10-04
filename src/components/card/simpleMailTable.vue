<script  >
import { ref, computed } from "vue";
import MailTableCard from "./MailTableCard.vue";
import Frame24 from "../svgs/Frame24.vue";
import SearchStatus from "../svgs/search-status.vue";
export default {
  setup(props, context) {
    const itemsSelected = ref([]);
    const sortBy = ["player", "team", "number", "position", "weight"];
    const sortType = "desc";
    const headers = [
      { text: "PLAYER", value: "player", sortable: true },
      { text: "TEAM", value: "team", sortable: true },
      { text: "NUMBER", value: "number", sortable: true },
      { text: "POSITION", value: "position", sortable: true },
      { text: "HEIGHT", value: "indicator.height", sortable: true },
      { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
      { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
      { text: "COUNTRY", value: "country" },
    ];
    const dataTable = ref();
    const currentPageFirstIndex = computed(
      () => dataTable.value?.currentPageFirstIndex
    );
    const currentPageLastIndex = computed(
      () => dataTable.value?.currentPageLastIndex
    );
    const clientItemsLength = computed(
      () => dataTable.value?.clientItemsLength
    );
    // pagination related
    const maxPaginationNumber = computed(
      () => dataTable.value?.maxPaginationNumber
    );
    const currentPaginationNumber = computed(
      () => dataTable.value?.currentPaginationNumber
    );
    const isFirstPage = computed(() => dataTable.value?.isFirstPage);
    const isLastPage = computed(() => dataTable.value?.isLastPage);
    const nextPage = () => {
      dataTable.value.nextPage();
    };
    const prevPage = () => {
      dataTable.value.prevPage();
    };
    const updatePage = (paginationNumber) => {
      console.log(paginationNumber);
      dataTable.value.updatePage(paginationNumber);
    };
    // rows per page related
    const rowsPerPageOptions = computed(
      () => dataTable.value?.rowsPerPageOptions
    );
    const rowsPerPageActiveOption = computed(
      () => dataTable.value?.rowsPerPageActiveOption
    );
    const updateRowsPerPageSelect = (e) => {
      dataTable.value.updateRowsPerPageActiveOption(Number(e.target.value));
    };
    const items = ref([
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
      {
        player: "Stephen Curry",
        team: "GSW",
        number: 30,
        position: "G",
        indicator: { height: "6-2", weight: 185 },
        lastAttended: "Davidson",
        country: "USA",
      },
      {
        player: "Lebron James",
        team: "LAL",
        number: 6,
        position: "F",
        indicator: { height: "6-9", weight: 250 },
        lastAttended: "St. Vincent-St. Mary HS (OH)",
        country: "USA",
      },
      {
        player: "Kevin Durant",
        team: "BKN",
        number: 7,
        position: "F",
        indicator: { height: "6-10", weight: 240 },
        lastAttended: "Texas-Austin",
        country: "USA",
      },
      {
        player: "Giannis Antetokounmpo",
        team: "MIL",
        number: 34,
        position: "F",
        indicator: { height: "6-11", weight: 242 },
        lastAttended: "Filathlitikos",
        country: "Greece",
      },
    ]);
    const page = ref(1);
    context.expose({
      itemsSelected,
    });
    const headerss = [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ];
    const desserts = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ];
    return {
      itemsSelected,
      sortBy,
      sortType,
      headers,
      dataTable,
      currentPageFirstIndex,
      currentPageLastIndex,
      currentPaginationNumber,
      clientItemsLength,
      maxPaginationNumber,
      isFirstPage,
      isLastPage,
      nextPage,
      prevPage,
      updatePage,
      rowsPerPageActiveOption,
      rowsPerPageOptions,
      updateRowsPerPageSelect,
      items,
      page,
    };
  },
  components: { MailTableCard, Frame24, SearchStatus },
};
</script>
<template>
  <div class="my-4 d-flex justify-space-between">
    <v-btn
      color="yellow-darken-2"
      height="46"
      class="text-capitalize simple-mail-table-btn"
      ><v-icon>mdi-plus</v-icon>Yangi pochta qo‘shish</v-btn
    >
    <v-spacer></v-spacer>
    <div class="mails-main-search-rightsidebar">
      <form @submit.prevent="searchByIdAndProduct">
        <div class="mails-search">
          <input
            type="search"
            class="mails-search-input"
            placeholder="ID yoki Mahsulot qidirish"
          />
          <SearchStatus />
        </div>
      </form>
    </div>
  </div>
  <EasyDataTable
    ref="dataTable"
    :sort-by="sortBy"
    :sort-type="sortType"
    :headers="headers"
    :items="items"
    table-class-name="customize-table"
    button-pagination
    :hide-footer="true"
    :rows-per-page="10"
  >
    <!-- v-model:items-selected="itemsSelected" -->
    <!-- <template #expand="item">
      <MailTableCard />
      {{ item }}
    </template> -->
  </EasyDataTable>
  <v-data-table
    :headers="headerss"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  <div class="customize-footer mt-5">
    <div class="customize-index">
      <span class="customize-index-icon"> <Frame24 /></span>
      <p>
        Ko'rsatilganlari: {{ items.length }} tadan {{ currentPageFirstIndex }} -
        {{ currentPageLastIndex }}
      </p>
    </div>

    <v-pagination
      :model-value="currentPaginationNumber"
      :length="maxPaginationNumber"
      :total-visible="5"
      @update:modelValue="updatePage"
      color="gray-f5--text"
      :disabled="false"
      active-color="yellow-darken-4"
      @click:previous="prevPage"
      @click:next="nextPage"
    ></v-pagination>
  </div>
</template>
    
    
    <style lang="scss" scoped>
.simple-mail-table-btn {
  font-weight: 600;
  @extend %fSize18lHeight22;
}
.mails-main-search-rightsidebar {
  background: $gray-eb;
  font-size: 16px;
  padding: 0 15px;
  border-radius: 8px;
  width: 344px;
  .mails-search {
    display: flex;
    align-items: center;
    input {
      flex: 1 1 auto;
      height: 46px;
      outline: none;
    }
  }
}
.customize-table {
  border-radius: 10px;
  // --easy-table-body-row-background-color: #fff7d9;
  --easy-table-header-height: 44px;
  --easy-table-header-font-color: $dark-900;
  --easy-table-header-font-size: 18px;
  text-transform: none;
  --easy-table-header-background-color: #e9e9e9;
  --easy-table-body-even-row-font-color: blue;
  // --easy-table-body-row-hover-background-color: blue;

  --easy-table-body-row-height: 78px;
  --easy-table-body-row-font-size: 14px;
}
.customize-footer {
  display: flex;
  justify-content: space-between;
  // .customize-buttons{

  // }
  .customize-index {
    display: flex;
    align-items: center;
    .customize-index-icon {
      margin-right: 10px;
    }
    p {
      @extend %fSize18lHeight22;
      // font-size: 18px;
      // font-style: medium;
      color: black;
    }
  }
  .customize-buttons {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    span {
      height: 30px;
      border-radius: 5px;
      line-height: 30px;
      background: $gray-f5;
      @extend %fSize18lHeight22;
      font-weight: bold;
      padding: 0 9px;
    }
  }
}
.pagination-active {
  background-color: $yellow-500;
}
</style>