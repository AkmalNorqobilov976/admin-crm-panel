<script setup>
import { defineProps } from "vue";
defineProps({
  bgColor: {
    type: String,
    default: "none"
  },
  color: {
    type: String,
    default: "black"

  }
})
</script>
<template>
  <svg width="20" height="20" viewBox="0 0 20 20" :fill="bgColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.97484 4.94189L2.9165 10.0002L7.97484 15.0586" :stroke="color" stroke-width="2" stroke-miterlimit="10"
      stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.0831 10H3.05811" :stroke="color" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>