<script setup>
import { defineProps } from "vue";
defineProps({
  bgColor: {
    type: String,
    default: "none"
  },
  color: {
    type: String,
    default: "#1E0E62"

  }
})
</script>
<template>
  <svg width="54" height="54" viewBox="0 0 54 54" :fill="bgColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.2499 22.5C22.7352 22.5 24.7499 20.4853 24.7499 18C24.7499 15.5147 22.7352 13.5 20.2499 13.5C17.7646 13.5 15.7499 15.5147 15.7499 18C15.7499 20.4853 17.7646 22.5 20.2499 22.5Z"
      :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M29.2501 4.50781H20.2501C9.00012 4.50781 4.50012 9.00781 4.50012 20.2578V33.7578C4.50012 45.0078 9.00012 49.5078 20.2501 49.5078H33.7501C45.0001 49.5078 49.5001 45.0078 49.5001 33.7578V22.5078"
      :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M35.4375 11.2578H47.8125" :stroke="color" stroke-width="3" stroke-linecap="round" />
    <path d="M41.6251 17.4375V5.0625" :stroke="color" stroke-width="3" stroke-linecap="round" />
    <path
      d="M6.00739 42.6353L17.0999 35.1878C18.8774 33.9953 21.4424 34.1303 23.0399 35.5028L23.7824 36.1553C25.5374 37.6628 28.3724 37.6628 30.1274 36.1553L39.4874 28.1228C41.2424 26.6153 44.0774 26.6153 45.8324 28.1228L49.4999 31.2728"
      :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>