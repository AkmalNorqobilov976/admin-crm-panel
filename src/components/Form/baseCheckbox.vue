<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
};
</script>
<template>
  <div class="checkboxes">
    <label class="checkbox">
      <input type="checkbox" :checked="modelValue" @change="updateValue" />
      <span class="indicator"></span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
body {
  font-family: Helvetica, Sans Serif;
  padding: 1rem 2rem;
}

h1 {
  font-weight: 100;
  font-size: 1.5rem;
  color: #2d3137;
}

p {
  color: #898e95;
}

.checkboxes {
  //   margin-top: 2rem;
  transform: scale(1.5);
}

/* Checkbox styles */
// --color: blue;
$black: #2d3137;
$blue: #3785bc;
$green: #329e78;
$grey: #d6d6d6;
$red: #dd3c3a;
$white: #ffffff;

$border-radius: 3px;

@mixin checkbox($color) {
  //   margin-right: 1rem;
  margin-top: 40px;
  //   padding-left: 1.75rem;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    transform: scale(1.5);

    &:focus ~ span {
      //   border: 2px solid lighten($black, 50%);
    }

    &:focus:checked ~ span {
      //   border: 2px solid darken($color, 15%);
    }

    &:checked ~ span {
      color: $white;
      background: $color
        url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxMiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTIgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggZD0iTTQuNTc1IDguOTc3cy0uNDA0LS4wMDctLjUzNi0uMTY1TC4wNTcgNS42NGwuODI5LTEuMjI3TDQuNDcgNy4yNjggMTAuOTIxLjA4NmwuOTIzIDEuMTAzLTYuODYzIDcuNjRjLS4xMzQtLjAwMy0uNDA2LjE0OC0uNDA2LjE0OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPg0KPC9zdmc+)
        50% 40% no-repeat;
      //   border: 2px solid $color;
    }
  }

  span {
    border-radius: $border-radius;
    position: absolute;
    left: 0;
    top: -2px;
    width: 1rem;
    height: 1rem;
    background-color: lighten($black, 65%);
    // border: 2px solid lighten($black, 65%);
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

label.checkbox {
  @include checkbox($yellow-600);

  &.blue {
    @include checkbox($blue);
  }

  &.red {
    @include checkbox($red);
  }
}
</style>