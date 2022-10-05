<script setup>
import { defineProps } from "vue";
defineProps({
  bgColor: {
    type: String,
    default: "#D6D6D6"
  },
  color: {
    type: String,
    default: "#505050"

  }
})
</script>
<template>
  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="23" r="23" :fill="bgColor" />
    <path
      d="M22.9993 23.0002C25.5307 23.0002 27.5827 20.9481 27.5827 18.4168C27.5827 15.8855 25.5307 13.8335 22.9993 13.8335C20.468 13.8335 18.416 15.8855 18.416 18.4168C18.416 20.9481 20.468 23.0002 22.9993 23.0002Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M30.8743 32.1667C30.8743 28.6192 27.3451 25.75 23.0001 25.75C18.6551 25.75 15.126 28.6192 15.126 32.1667"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>