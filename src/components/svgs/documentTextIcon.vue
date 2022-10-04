<script setup>
    import { defineProps } from 'vue'
    defineProps({
        color: {
            type: String
        },
        bgColor: {
            type: String
        }
    })
</script>
<template>
  <svg
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="23" cy="23" r="23" :fill="bgColor" />
    <path
      d="M31.25 18.4168V27.5835C31.25 30.3335 29.875 32.1668 26.6667 32.1668H19.3333C16.125 32.1668 14.75 30.3335 14.75 27.5835V18.4168C14.75 15.6668 16.125 13.8335 19.3333 13.8335H26.6667C29.875 13.8335 31.25 15.6668 31.25 18.4168Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.2915 16.125V17.9583C25.2915 18.9667 26.1165 19.7917 27.1248 19.7917H28.9582"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.3335 23.9165H23.0002"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.3335 27.5835H26.6668"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>