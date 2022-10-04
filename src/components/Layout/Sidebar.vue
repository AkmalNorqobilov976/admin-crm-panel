<script setup >
import { ref } from "vue";
import Location from "../svgs/Location.vue";
import ClipboardText from "../svgs/clipboard-text.vue";
const dashboardList = ref([
  {
    text: "Pochtalar",
    icon: "SvgsBox",
    route: "/mails",
  },
  {
    text: "Ro‘yhatlar",
    icon: "SvgsClipboard-text",
    route: "/lists",
  },

  {
    text: "Sozlamalar",
    icon: "SvgsSetting",
    route: "/settings",
  },
  {
    text: "Bildirishnomalar",
    icon: "SvgsNotification",
    route: "/notification",
  },
]);
</script>
<template>
  <v-navigation-drawer id="sidebar" width="290" color="white" permanent>
    <v-list>
      <div class="sidebar-title d-flex flex-row align-center">
        <div class="sidebar-title-image">
          <img :src="require('@/assets/images/Ellipse 14.png')" />
        </div>
        <div class="sidebar-title-main">
          <p
            class="
              sidebar-title-location
              font-weight-bold
              flex-grow-1 flex-shrink-1
            "
          >
            Chilonzor
          </p>
          <p class="sidebar-title-price">23,000,000 UZS</p>
        </div>
        <div class="sidebar-title-location-icon">
          <Location />
        </div>
      </div>
      <v-list-item
        v-for="(item, i) in dashboardList"
        :key="i"
        :value="item"
        :to="item.route"
        class="list-item-menu"
        active-class="active-yellow-style"
      >
        <template v-slot:prepend>
          <ClipboardText class="sidebar-icon" />
          <component :is="item.icon" />
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
    <v-spacer></v-spacer>
    <div class="position-absolute bottom right left">
      <v-divider></v-divider>
      <div class="sidebar-admin d-flex">
        <div class="sidebar-admin-image">
          <img :src="require('@/assets/images/Ellipse 15.png')" alt="" />
        </div>
        <div class="user-short-info">
          <p class="username font-weight-bold">Abdulaziz</p>
          <p class="usertype font-weight-medium">Admin</p>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.sidebar-title {
  margin: $size30px;
  margin-bottom: 85px;
  .sidebar-title-image {
    width: $size50;
    height: $size50;
  }
  .sidebar-title-main {
    margin-left: $size15px;
    flex: 1 1 auto;
    .sidebar-title-location {
      @extend %fSize20lHeight24;
    }
    .sidebar-title-price {
      color: $gren-600;
      margin-top: 6px;
      @extend %fSize14lHeight17;
    }
  }
}
.list-item-menu {
  @extend %fSize22lHeight27;
  @extend %sidebarItemsWidth;
}
.sidebar-icon {
  width: 24px;
  height: 24px;
  margin-left: 30px;
  margin-right: 15px;
}
.sidebar-admin {
  margin: $size30px;
  width: 100%;
  img {
    width: 46px;
    height: 46px;
  }
  .user-short-info {
    margin-left: 10px;

    @extend %fSize22lHeight27;
    flex: 1 1 auto;
    .usertype {
      @extend %fSize14lHeight17;
    }
  }
}
</style>