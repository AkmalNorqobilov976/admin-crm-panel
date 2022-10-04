<script setup >
import { useRoute } from "vue-router";
// import { useGetBreadcrumbs } from "~/composables/layouts/useBreadcrumb";
// let breadcrumbs = useGetBreadcrumbs();
// const breadcrumbs = useGetBreadcrumbs();
const route = useRoute();
</script>
<template>
  <div class="breadcrumbs d-flex">
    <div class="breadcrumbs-item" v-for="(item, i) in $store.state.layout.breadcrumbs" :key="i">
      <span
        :class="
          route.path == item.route ? 'breadcrumb-active' : 'breadcrumb-inactive'
        "
        >{{ item.text }}</span
      >
      <v-icon v-if="i !=  $store.state.layout.breadcrumbs.length - 1">mdi-chevron-right</v-icon>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.breadcrumbs {
  margin-left: 40px;
  .breadcrumbs-item {
    .breadcrumb-active {
      @extend %fSize14lHeight17;
      font-weight: bold;
      color: $dark-900;
    }

    .breadcrumb-inactive {
      @extend %fSize14lHeight17;
      font-weight: 500;
      color: $gray-87;
    }
  }
}
</style>