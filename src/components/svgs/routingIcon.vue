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
      d="M13.8972 16.2166C14.6306 13.045 19.4064 13.045 20.1306 16.2166C20.5614 18.0775 19.3789 19.6541 18.3522 20.635C17.6006 21.35 16.4181 21.3408 15.6664 20.635C14.6489 19.6541 13.4664 18.0775 13.8972 16.2166Z"
      :stroke="color" stroke-width="1.5" />
    <path
      d="M25.8146 27.2166C26.548 24.045 31.3513 24.045 32.0847 27.2166C32.5155 29.0775 31.333 30.6541 30.2971 31.635C29.5455 32.35 28.3538 32.3408 27.6022 31.635C26.5663 30.6541 25.3838 29.0775 25.8146 27.2166Z"
      :stroke="color" stroke-width="1.5" />
    <path
      d="M23.0005 16.5835H25.4572C27.153 16.5835 27.9414 18.6827 26.6672 19.801L19.343 26.2085C18.0689 27.3177 18.8572 29.4168 20.5439 29.4168H23.0005"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.0294 17.0418H17.04" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M28.9454 28.0418H28.956" :stroke="color" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>