<script setup >
import DefaultLayout from "@/layouts/defaultLayout.vue";
import { useStore } from "vuex";
import LayoutBreadcrumb from "@/components/Layout/LayoutBreadcrumb.vue";
import { onBeforeMount, ref } from "vue";
import ArrowLeftIcon from "@/components/svgs/arrowLeftIcon.vue";
import PencilIcon from "@/components/svgs/pencilIcon.vue";
import D3Rotate from "../../components/svgs/3d-rotate.vue";
import BuildingIcon from "../../components/svgs/buildingIcon.vue";
import DocumentTextIcon from "../../components/svgs/documentTextIcon.vue";
import UserIcon from "@/components/svgs/userIcon.vue";
import RoutingIcon from "@/components/svgs/routingIcon.vue";
import UnionIcon from "../../components/svgs/UnionIcon.vue";
import SimpleMailTable from "@/components/card/simpleMailTable.vue";
const store = useStore();
onBeforeMount(() => {
  store.commit("mails/SetSelectedItems", {
    route: "/mails/give-to-curier",
    text: "Kuryerga topshirish",
    level: 2,
  });
});

const lists = ref([
  {
    text: "Buyurtmalar",
    route: "/mails/give-to-curier#order",
    amount: 20,
  },
  {
    text: "Hisob kitob",
    route: "/mails/give-to-curier#calculate",
  },
  {
    text: "Kommentlar/eslatmalar",
    route: "/mails/give-to-curier#comment",
  },
]);
</script>
<template>
  <DefaultLayout>
    <template #appbar>
      <LayoutBreadcrumb />
    </template>
    <v-row justify="start">
      <v-col md="2">
        <v-btn
          @click="$router.back()"
          flat
          class="give-curier-btn px-6"
          color="#ECECEC"
          height="46"
          ><v-avatar><ArrowLeftIcon /></v-avatar>Listga qaytish</v-btn
        >
      </v-col>
      <v-col md="3">
        <v-btn
          flat
          class="give-curier-btn px-6 white-color"
          height="46"
          color="#1E0E62"
          ><v-avatar><PencilIcon /></v-avatar>Malumotlarini o‘zgaritirish</v-btn
        >
      </v-col>
      <v-col md="2">
        <v-btn flat class="give-curier-btn px-6" height="46" color="#FFCE33"
          ><v-avatar><D3Rotate /></v-avatar>Kuryerga topshirish</v-btn
        >
      </v-col>
    </v-row>
    <v-card class="give-to-curier-info-card mt-8" flat>
      <v-row justify="start" class="py-5 px-8">
        <v-col md="12">
          <p class="give-to-curier-main-info">Kuryer ro‘yxati</p>
        </v-col>
        <v-col md="3">
          <v-list class="d-flex">
            <v-list-item-avatar class="mr-3">
              <BuildingIcon />
            </v-list-item-avatar>
            <div class="list-info">
              <p class="list-item-info-1">Filiall</p>
              <p class="list-item-info-2">100K filiall</p>
            </div>
          </v-list>
        </v-col>
        <v-col md="3">
          <v-list class="d-flex">
            <v-list-item-avatar class="mr-3">
              <DocumentTextIcon color="#F0B400" bgColor="#FFF0C5" />
            </v-list-item-avatar>
            <div class="list-info">
              <p class="list-item-info-1">Ro‘yxat turi</p>
              <p class="list-item-info-2">Kuryer ro‘yxati</p>
            </div>
          </v-list>
        </v-col>
        <v-col md="6"></v-col>
        <v-col md="3">
          <v-list class="d-flex">
            <v-list-item-avatar class="mr-3">
              <UserIcon />
            </v-list-item-avatar>
            <div class="list-info">
              <p class="list-item-info-1">Kuryer</p>
              <p class="list-item-info-2">Belgilanmagan</p>
            </div>
          </v-list>
        </v-col>
        <v-col md="3">
          <v-list class="d-flex">
            <v-list-item-avatar class="mr-3">
              <RoutingIcon />
            </v-list-item-avatar>
            <div class="list-info">
              <p class="list-item-info-1">Yuborish hududi</p>
              <p class="list-item-info-2">Belgilanmagan</p>
            </div>
          </v-list>
        </v-col>
      </v-row>
      <UnionIcon class="give-to-curier-info-card-bottom" />
    </v-card>
    <div class="navbar mt-8">
      <div v-for="(item, i) in lists" :key="i" class="navbar-item">
        <router-link
          active-class="active-appbar-style"
          :to="item.route"
          class="navbar-item-link"
          ><p>{{ item.text }}</p>
          <span v-if="item.amount">{{ item.amount }}</span></router-link
        >
      </div>
    </div>

    <SimpleMailTable />
    <!-- {{ $store.state.mails.selectedItems }} -->
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.give-curier-btn {
  @extend %fSize18lHeight22;
  font-weight: 600;
  text-transform: none;
}
.white-color {
  color: $white;
}
.give-to-curier-info-card {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 5px 8px 15px rgba(192, 192, 192, 0.15);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  // background: #f7f7f7;
  // border: solid 0.2px;
  border-bottom: none;
  position: relative;
  z-index: 0;
  .give-to-curier-main-info {
    @extend %fSize24lHeight29;
    color: $dark-900;
    font-weight: 600;
  }
  .list-info {
    color: $gray-50;
    @extend %fSize18lHeight22;
    font-weight: 500;
    font-style: normal;
    .list-item-info-2 {
      @extend %fSize24lHeight29;
      color: $dark-900;
      font-weight: 600;
    }
  }
  .give-to-curier-info-card-bottom {
    position: absolute;
    bottom: -85px;
    z-index: 1000;
    left: 0;
    right: 0;
  }
}

.navbar {
  @extend %fSize14lHeight17;
  display: flex;
  justify-items: flex-start;
  background: $gray-f8;
  padding: 8px 40px;
  gap: 50px;
  .navbar-item {
    padding-left: 20px;
    // flex: 1 1 auto;
    align-items: center;
    // margin: 50px 16px 50px 11px;
    .navbar-item-link {
      color: $dark-900;
      display: flex;
      align-items: center;
      span {
        width: 29px;
        height: 16px;
        background-color: $red-500;
        font-size: 10px;
        color: white;
        line-height: 16px;
        text-align: center;
        font-weight: 600;
        border-radius: 30px;
        margin-left: 8px;
      }
    }
  }
}
</style>