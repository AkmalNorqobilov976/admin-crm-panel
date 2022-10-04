<script >
export default {
  props: {
    label: String,
    info: {
      type: Boolean,
    },
  },
  data: () => {
    const isActive = true;
    return {
      isActive,
    };
  },
};
</script>
<template>
  <div class="custom-switch">
    <p class="custom-switch-label" :class="{ label: info }">{{ label }}</p>
    <div class="custom-switch-swch">
      <v-switch v-model="info" color="indigo darken-4"></v-switch>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-switch {
  display: flex;
  justify-content: baseline;
  align-content: center;
  align-items: center;
  .custom-switch-label {
    flex: 1 1 auto;
    @extend %fSize20lHeight24;
    font-weight: 500;
    color: $gray-38;
    font-style: normal;
  }
  .custom-switch-swch {
    align-self: flex-start;
    display: inline;
    bottom: 30px;
    right: 100px;
  }
  .label {
    color: $dark-62;
  }
}
</style>