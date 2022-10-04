<script  >
import { ref } from "vue";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  data: () => {
    const file = ref();
    let isSent = true;
    return {
      file,
      isSent,
    };
  },
  methods: {
    updateValue(event) {
      debugger;
      this.$emit("update:modelValue", event.file.value);
    },
  },
};
</script>
    <template>
  <div class="custom-file-input">
    <label :for="label">{{ label }}</label>
    <div class="file-input-part pa-5" @click="$refs.file.click()">
      <div>
        <input
          ref="file"
          type="file"
          v-bind="$attrs"
          :value="modelValue"
          @change="updateValue"
        />
      </div>
      <div>
        <SvgsGalleryAddIcon v-if="!isSent" />
        <SvgsGalleryAddIcon v-else />
      </div>
      <div v-if="!isSent" class="file-input-info mt-4 mb-8">
        <p class="file-info">Logotip o‘lchamlari:</p>
        <p class="file-size">100x100</p>
        <p class="file-size-mb">Fayl hajmi: <span class="file-mb">5mb</span></p>
      </div>
      <div v-else class="file-input-info mt-4 mb-8">
        <v-progress-linear :width="25" color="#1E0E62"></v-progress-linear>
      </div>
      <v-btn
        flat
        color="yellow-darken-2 white--text"
        @click.stop="
          isSent = true;
          submitFile();
        "
        class="file-input-btn"
      >
        Fayl yuklash
      </v-btn>
    </div>
  </div>
</template>
    
    <style lang="scss" scoped>
.custom-file-input {
  width: 250px;
  label {
    @extend %fSize16lHeight20;
    margin-bottom: 6px;
    color: $dark-62;
    font-weight: 500;
  }
  .file-input-part {
    border-radius: 20px;
    text-align: center;
    border: 1px dashed $dark-62;
    input {
      display: none;
    }
    .file-input-info {
      color: $gray-58;
      .file-size {
        color: $dark-62;
        @extend %fSize16lHeight20;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .file-size-mb {
        span {
          color: $dark-62;
          @extend %fSize16lHeight20;
          font-weight: 600;
        }
      }
    }
    .file-input-btn {
      color: #fff !important;
      border-radius: 15px;
    }
  }
}
</style>