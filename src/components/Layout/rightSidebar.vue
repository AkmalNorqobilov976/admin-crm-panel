<script setup>
import { defineProps, ref, computed, reactive, defineEmits } from "vue";
const props = defineProps({
    color: {
        type: String,
        default: ""
    },
    width: {
        type: Number,
        default: 466
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})
const color = reactive({
    color: props.color,
    width: props.width
})
const updateValue= ($event)=>{
    console.log($event.target.checked);
}
const cssProps = computed(() => {
    return {
        '--color': props.color
    }
})
</script>

<template>
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
    <div id="rightsidebar">salomda {{props.color}}</div>
</template>


<style lang="scss" scoped>
div {
    color: v-bind('color.color');
}
</style>