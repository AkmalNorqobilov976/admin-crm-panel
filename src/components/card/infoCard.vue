<script  >
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
    <template>
  <div class="info-card">
    <label :for="label">{{ label }}</label>
    <div class="info-part">
      {{ text }}
    </div>
  </div>
</template>
    
    <style lang="scss" scoped>
.info-card {
  color: $dark-62;
  label {
    @extend %fSize16lHeight20;
    margin-bottom: 6px;
    font-weight: 500;
  }
  .info-part {
    font-weight: 600;
    @extend %fSize34lHeight40;
    background: #F4F1FF;
    border-radius: 20px;
    padding: 30px 0;
    text-align: center;
  }
}
</style>