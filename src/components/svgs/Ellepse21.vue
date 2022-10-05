<script setup>
  import { defineProps } from "vue";
  defineProps({
    bgColor: {
      type: String,
      default: "#FFEFD0"
    },
    color: {
      type: String,
      default: "#F0B400"
  
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
      d="M12.6417 16.1997L20 20.458L27.3083 16.2247"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.0001 28.008V20.4497"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.2751 12.0665L13.8251 14.5415C12.8167 15.0999 11.9918 16.4998 11.9918 17.6498V22.3582C11.9918 23.5082 12.8167 24.9082 13.8251 25.4665L18.2751 27.9415C19.2251 28.4665 20.7834 28.4665 21.7334 27.9415L26.1834 25.4665C27.1918 24.9082 28.0167 23.5082 28.0167 22.3582V17.6498C28.0167 16.4998 27.1918 15.0999 26.1834 14.5415L21.7334 12.0665C20.7751 11.5332 19.2251 11.5332 18.2751 12.0665Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.1664 21.0337V17.9837L16.2581 13.417"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>