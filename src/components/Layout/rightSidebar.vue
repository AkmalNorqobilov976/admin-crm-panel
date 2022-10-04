<script setup>
import { defineProps, ref, computed, reactive, defineEmits } from "vue";
const props = defineProps({
    color: {
        type: String,
        default: ""
    },
    width: {
        type: String,
        default: '466px'
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})
const cssProps = reactive({
    color: props.color,
    width: props.width
})
const updateValue = ($event) => {
    console.log($event.target.checked);
}
</script>

<template>
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
    <div id="rightsidebar" :class="{'active-right-sidebar':modelValue}">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
input[type="checkbox"] {
    display: none;
}

div {
    display: none;
}

.active-right-sidebar {
    display: unset;
    position: absolute;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    z-index: 9999;
    width: v-bind('props.width');
    background-color: v-bind('props.color');
    // background-color: rgba($color: #000000, $alpha: .5);
}
</style>