<script setup >
import { ref } from "vue";
// import { dashboardAppList } from "~/data/datas/dashboard";
const dashboardAppList = ref([
  {
    text: "Yangi zakazlar",
    route: "/mails",
    amount: 322,
  },
  {
    text: "Skladda qabul qilinganlar",
    route: "/storage",
  },
  {
    text: "Yo‘ldagi zakazlar",
    route: "/delivering",
  },
  {
    text: "Yetkazib berilganlar",
    route: "/delivered",
  },
  {
    text: "Bekor qilingan zakazlar",
    route: "/canceled",
  },
  {
    text: "Hammasi",
    route: "/all",
  },
]);
</script>
<template>
  <div class="d-flex navbar align-center">
    <div v-for="(item, i) in dashboardAppList" :key="i" class="navbar-item">
      <router-link
        active-class="active-appbar-style"
        :to="item.route"
        class="navbar-item-link"
        ><p>{{ item.text }}</p>
        <span v-if="item.amount">{{ item.amount }}</span></router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @extend %fSize14lHeight17;
  .navbar-item {
    padding-left: 20px;
    flex: 1 1 auto;
    align-items: center;
    margin: 50px 16px 50px 11px;
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