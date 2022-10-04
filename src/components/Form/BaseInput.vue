<script  >
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    phone: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    isPrice: {
      type: Boolean,
      default: false,
    },
    isRecommendedPrices: {
      type: Boolean,
      default: false,
    },
    selectedPrice: {
      type: String,
      default: "30,000",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<template>
  <div class="custom-input">
    <label :for="label">{{ label }}</label>
    <div class="input-part">
      <div>
        <span v-if="phone">+998</span
        ><input
          :type="type"
          v-bind="$attrs"
          :value="modelValue"
          @input="updateValue"
        />
        <span v-if="isPrice">so‘m</span>
      </div>
    </div>
    <div v-if="isRecommendedPrices" class="d-inline-flex recommended-prices">
      <span
        class="recommended-price"
        @click="selectedPrice = '20,000'"
        :class="{ selectedPrice: selectedPrice == '20,000' }"
        >20,000</span
      >
      <span
        class="recommended-price"
        @click="selectedPrice = '30,000'"
        :class="{ selectedPrice: selectedPrice == '30,000' }"
        >30,000</span
      >
      <span
        class="recommended-price"
        @click="selectedPrice = '35,000'"
        :class="{ selectedPrice: selectedPrice == '35,000' }"
        >35,000</span
      >
      <span
        class="recommended-price"
        @click="selectedPrice = '40,000'"
        :class="{ selectedPrice: selectedPrice == '40,000' }"
        >40,000</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-input {
  label {
    @extend %fSize16lHeight20;
    margin-bottom: 6px;
    color: $dark-62;
    font-weight: 500;
  }
  .input-part {
    background: $gray-f4;
    border-radius: 20px;
    div {
      display: flex;
      align-items: center;
      padding: 0 20px;
      @extend %fSize20lHeight24;
      span {
        margin-right: 5px;
        font-weight: bold;
      }
      input {
        height: 56px;
        flex: 1 1 auto;
        outline: none;
      }
    }
  }
  .recommended-prices {
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 10px;
    .recommended-price {
      @extend %fSize20lHeight24;
      background: $gray-f4;
      color: $gray-95;
      padding: 5px 10px;
      border-radius: 8px;
      cursor: default;
    }
    .selectedPrice {
      color: $dark-900;
      background: $gray-dc;
      font-weight: 500;
    }
  }
}
</style>