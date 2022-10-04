<script setup>
import { defineProps, ref, computed, reactive } from "vue";
const props = defineProps({
    color: {
        type: String,
        default: ""
    },
    width: {
        type: Number,
        default: 466
    }
})
const color = reactive({
    color: "red",
    width: 
})
const cssProps = computed(() => {
    return {
        '--color': props.color
    }
})
</script>

<template>
    <div>salomda {{props.color}}</div>
</template>


<style lang="scss" scoped>
div {
    color: v-bind('color.color');
}
</style>