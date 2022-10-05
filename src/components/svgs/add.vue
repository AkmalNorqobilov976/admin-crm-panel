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
  < template >
<svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    :fill="bgColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 10H15"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 15V5"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template >