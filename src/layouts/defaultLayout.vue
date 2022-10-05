<script setup >
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
defineProps({
  rightSidebar: {
    type: Boolean,
    default: false,
  },
  rightWidth: {
    type: Number,
    default: 466,
  },
});
</script>
<template>
  <v-app id="app" app>
    <layout-sidebar />
    <v-navigation-drawer
      v-model="rightSidebar"
      :width="rightWidth"
      location="right"
    >
      <slot name="rigthsidebar">
        
      </slot>
    </v-navigation-drawer>
    <v-main>
      <v-app-bar absolute color="app-bar-color" height="44" flat>
        <slot name="appbar"></slot>
      </v-app-bar>
      <slot name=""></slot>
      <div class="pa-5">
        <slot></slot>
      </div>
    </v-main>
  </v-app>
</template>



