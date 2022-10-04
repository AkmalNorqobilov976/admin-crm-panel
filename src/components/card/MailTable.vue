<script  >

import { ref, computed } from "vue";
import MailTableCard from "./MailTableCard.vue";
import Frame24 from "../svgs/Frame24.vue";
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
        const currentPageFirstIndex = computed(() => dataTable.value?.currentPageFirstIndex);
        const currentPageLastIndex = computed(() => dataTable.value?.currentPageLastIndex);
        const clientItemsLength = computed(() => dataTable.value?.clientItemsLength);
        // pagination related
        const maxPaginationNumber = computed(() => dataTable.value?.maxPaginationNumber);
        const currentPaginationNumber = computed(() => dataTable.value?.currentPaginationNumber);
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
        const rowsPerPageOptions = computed(() => dataTable.value?.rowsPerPageOptions);
        const rowsPerPageActiveOption = computed(() => dataTable.value?.rowsPerPageActiveOption);
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
            itemsSelected
        });
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
    components: { MailTableCard, Frame24 }
};
</script>
<template>
  <EasyDataTable
    ref="dataTable"
    :sort-by="sortBy"
    :sort-type="sortType"
    :headers="headers"
    :items="items"
    table-class-name="customize-table"
    button-pagination
    :hide-footer="true"
    v-model:items-selected="itemsSelected"
    :rows-per-page="10"
  >
    <template #expand="item">
      <MailTableCard />
      {{ item }}
    </template>
  </EasyDataTable>
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