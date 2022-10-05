<script setup>
import { defineProps } from "vue";
defineProps({
  bgColor: {
    type: String,
    default: "none"
  },
  color: {
    type: String,
    default: "white"

  }
})
</script>
<template>
  <svg width="20" height="20" viewBox="0 0 20 20" :fill="bgColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5083 9.3501V13.0918C17.5083 16.8334 16.0166 18.3335 12.2666 18.3335H7.77501C7.29168 18.3335 6.84998 18.3085 6.44165 18.2501"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.53333 12.9335V9.3501" :stroke="color" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M10.0251 9.99984C11.5501 9.99984 12.6751 8.75821 12.5251 7.23321L11.9667 1.6665H8.07507L7.51675 7.23321C7.36675 8.75821 8.50009 9.99984 10.0251 9.99984Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M15.275 9.99984C16.9584 9.99984 18.1917 8.63315 18.025 6.95815L17.7917 4.66648C17.4917 2.49982 16.6583 1.6665 14.475 1.6665H11.9333L12.5167 7.50818C12.6667 8.88318 13.9 9.99984 15.275 9.99984Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M4.72499 9.99984C6.09999 9.99984 7.34165 8.88318 7.47498 7.50818L7.65834 5.66654L8.05832 1.6665H5.51667C3.33333 1.6665 2.50002 2.49982 2.20002 4.66648L1.96666 6.95815C1.79999 8.63315 3.04166 9.99984 4.72499 9.99984Z"
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M7.50004 15.8333C7.50004 16.4583 7.32503 17.05 7.01669 17.55C6.85836 17.8167 6.66669 18.0584 6.44169 18.25C6.41669 18.2834 6.39171 18.3083 6.35838 18.3333C5.77504 18.8583 5.00837 19.1667 4.16671 19.1667C3.15004 19.1667 2.24168 18.7083 1.64168 17.9916C1.62502 17.9666 1.60006 17.95 1.58339 17.925C1.48339 17.8083 1.39172 17.6834 1.31672 17.55C1.00839 17.05 0.833374 16.4583 0.833374 15.8333C0.833374 14.7833 1.31671 13.8417 2.08337 13.2333C2.22504 13.1167 2.37502 13.0167 2.53336 12.9333C3.01669 12.6583 3.57504 12.5 4.16671 12.5C5.00004 12.5 5.75002 12.8 6.33335 13.3083C6.43335 13.3833 6.52503 13.475 6.60837 13.5667C7.15837 14.1667 7.50004 14.9583 7.50004 15.8333Z"
      :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.40837 15.8169H2.92505" :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M4.16675 14.6001V17.0918" :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>