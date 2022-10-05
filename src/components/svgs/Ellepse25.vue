<script setup>
  import { defineProps } from "vue";
  defineProps({
    bgColor: {
      type: String,
      default: "#BFD1FF"
    },
    color: {
      type: String,
      default: "#1E0E62"
  
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
      d="M20 19.9998C22.3012 19.9998 24.1667 18.1344 24.1667 15.8332C24.1667 13.532 22.3012 11.6665 20 11.6665C17.6989 11.6665 15.8334 13.532 15.8334 15.8332C15.8334 18.1344 17.6989 19.9998 20 19.9998Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.1585 28.3333C27.1585 25.1083 23.9501 22.5 20.0001 22.5C16.0501 22.5 12.8418 25.1083 12.8418 28.3333"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>