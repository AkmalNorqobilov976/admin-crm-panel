<script >
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>
  
  
<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <label :for="label" class="custom-select-label">{{ label }}</label>
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <span class="selected-info" :class="{inputBordered: selected}">
        {{ selected }}
      </span>
      <span class="selected-icon mdi mdi-chevron-down" :class="{ rotate: open }">
      </span>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="
        selected = option;
        open = false;
        $emit('input', option);
      ">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


.custom-select {
  position: relative;

  width: 100%;
  text-align: left;
  outline: none;
  height: 56px;
  line-height: 56px;

  .custom-select-label {
    @extend %fSize16lHeight20;
    margin-bottom: 6px;
    color: $dark-62;
    font-weight: 500;
  }
}

.custom-select .selected {
  background: $gray-f4;
  height: 56px;
  line-height: 56px;
  border-radius: 20px;
  padding-left: 20px;
  color: $gray-95;
  @extend %fSize20lHeight24;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  display: flex;

  .selected-info {
    flex: 1 1 auto;
  }

  .selected-icon {
    transition: transform 0.2s ease-in;
    margin-right: 25px;
  }

  .rotate {
    transform: rotate(-180deg);
    transition: transform 0.2s ease-in;
  }
}

.custom-select .selected.open {
  border: none;
  border-radius: 20px 20px 0px 0px;
}

.custom-select .selected:after {
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: $gray-95;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  overflow-y: scroll;
  position: absolute;
  height: 56px * 2;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 99999;
}

.custom-select .items div {
  color: $gray-95;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: $gray-f4;
}

.selectHide {
  display: none;
}
</style>
