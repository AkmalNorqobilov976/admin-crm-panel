<script setup>
  import { defineProps } from "vue";
  defineProps({
    bgColor: {
      type: String,
      default: "#D5FFD8"
    },
    color: {
      type: String,
      default: "#12A60F"
  
    }
  })
  </script>
<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" :fill="bgColor" />
    <path
      d="M24.1666 27.0832H15.8333C13.3333 27.0832 11.6666 25.8332 11.6666 22.9165V17.0832C11.6666 14.1665 13.3333 12.9165 15.8333 12.9165H24.1666C26.6666 12.9165 28.3333 14.1665 28.3333 17.0832V22.9165C28.3333 25.8332 26.6666 27.0832 24.1666 27.0832Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20C22.5 18.6193 21.3807 17.5 20 17.5C18.6193 17.5 17.5 18.6193 17.5 20C17.5 21.3807 18.6193 22.5 20 22.5Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.6666 17.5002H12.5C15 17.5002 15.8333 16.6668 15.8333 14.1668V13.3335"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.3333 17.5002H27.5C25 17.5002 24.1666 16.6668 24.1666 14.1668V13.3335"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.6666 22.5H12.5C15 22.5 15.8333 23.3333 15.8333 25.8333V26.6667"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.3333 22.5H27.5C25 22.5 24.1666 23.3333 24.1666 25.8333V26.6667"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>