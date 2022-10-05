<script setup>
import { defineProps } from "vue";
defineProps({
  bgColor: {
    type: String,
    default: "none"
  },
  color: {
    type: String,
    default: "#F0B400"

  }
})
</script>
<template>
  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="23" r="23" :fill="bgColor" />
    <path
      d="M23.4582 32.1667H15.7398C14.6765 32.1667 13.8057 31.3142 13.8057 30.2692V16.6658C13.8057 14.2642 15.5932 13.1733 17.784 14.2458L21.854 16.2442C22.734 16.675 23.4582 17.8208 23.4582 18.7925V32.1667Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M32.1398 25.8051V29.2701C32.1398 31.2501 31.2232 32.1668 29.2432 32.1668H23.459V21.5518L23.8898 21.6434L28.0148 22.5693L29.8757 22.9818C31.0857 23.2476 32.0757 23.8709 32.1307 25.6309C32.1398 25.6859 32.1398 25.7409 32.1398 25.8051Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.041 20.25H20.2218" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M17.041 23.917H20.2218" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M28.0146 22.5694V25.5211C28.0146 26.6577 27.0888 27.5836 25.9521 27.5836C24.8155 27.5836 23.8896 26.6577 23.8896 25.5211V21.6436L28.0146 22.5694Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M32.1305 25.631C32.0755 26.7127 31.1771 27.5835 30.0771 27.5835C28.9405 27.5835 28.0146 26.6577 28.0146 25.521V22.5693L29.8755 22.9818C31.0855 23.2477 32.0755 23.871 32.1305 25.631Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>