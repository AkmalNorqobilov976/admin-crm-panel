<script setup>
  import { defineProps } from "vue";
  defineProps({
    bgColor: {
      type: String,
      default: "#E9E9E9"
    },
    color: {
      type: String,
      default: "#292D32"
  
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
    <rect width="40" height="40" rx="20" :fill="bgColor" />
    <path
      d="M16.25 14.1665H23.75C24.2666 14.1665 24.725 14.1832 25.1333 14.2415C27.325 14.4832 27.9166 15.5165 27.9166 18.3332V21.6665C27.9166 24.4832 27.325 25.5165 25.1333 25.7582C24.725 25.8165 24.2666 25.8332 23.75 25.8332H16.25C15.7333 25.8332 15.275 25.8165 14.8666 25.7582C12.675 25.5165 12.0833 24.4832 12.0833 21.6665V18.3332C12.0833 15.5165 12.675 14.4832 14.8666 14.2415C15.275 14.1832 15.7333 14.1665 16.25 14.1665Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.75 11.6665H26.25"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.1667 28.3335H26.6667"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>