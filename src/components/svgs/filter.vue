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
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    :fill="bgColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.10832 1.75L4.99998 8.33333M4.49998 1.75H15.5C16.4166 1.75 17.1666 2.5 17.1666 3.41667V5.25C17.1666 5.91667 16.75 6.75 16.3333 7.16667L12.75 10.3333C12.25 10.75 11.9166 11.5833 11.9166 12.25V15.8333C11.9166 16.3333 11.5833 17 11.1666 17.25L9.99998 18C8.91665 18.6667 7.41665 17.9167 7.41665 16.5833V12.1667C7.41665 11.5833 7.08331 10.8333 6.74998 10.4167L3.58331 7.08333C3.16665 6.66667 2.83331 5.91667 2.83331 5.41667V3.5C2.83331 2.5 3.58331 1.75 4.49998 1.75Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>