<script setup >
// import { info } from "console";
import { reactive} from 'vue'
import FileInput from '@/components/Form/FileInput.vue'
import BaseInput from '@/components/Form/BaseInput.vue'
import CardInfo from '@/components/card/infoCard.vue'
import SettingsBase from '@/components/settings/baseSwitch.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'
import LayoutBreadcrumb from '../../components/Layout/LayoutBreadcrumb.vue'
// import { usePushBreadcrumb } from "~~/composables/layouts/useBreadcrumb";

// usePushBreadcrumb({
//   route: "/settings",
//   text: "Sozlamalar",
// });
// usePushBreadcrumb({
//   route: "/settings/settings",
//   text: "Filial sozlamalari",
// });
const switches = reactive({
  switch1: false,
  switch2: false,
  switch3: false,
});
</script>
<template>
  <DefaultLayout>
    <template #appbar>
      <LayoutBreadcrumb />
    </template>
    <v-row justify="space-around">
      <v-col md="2">
        <FileInput label="Fillial Logotip rasmi" />
      </v-col>
      <v-col md="4">
        <div>
          <BaseInput
            label="Fillial nomi"
            placeholder="Fillialga nom yozing"
          />
        </div>
        <div class="mt-10">
          <FormBaseInput
            label="Murojat uchun"
            phone
            placeholder="(00) 000-00-00"
          />
        </div>
        <div class="settings-additional py-4 mt-4">
          <button><v-icon>mdi-plus</v-icon> Qo‘shimcha</button>
        </div>
        <div class="mt-10">
          <CardInfo label="Viloyat/Region" text="Toshkent shahar" />
        </div>
        <div class="mt-10">
          <CardInfo label="Shahar/Tuman" text="Uchtepa tuman" />
        </div>
      </v-col>
      <v-col md="4">
        <div>
          <CardInfo label="Fillial balansi" text="23,000,000 so‘m" />
        </div>
        <div class="mt-10">
          <CardInfo label="Fillial komissiyasi" text="10%" />
        </div>
        <div class="mt-10">
          <SettingsBase
            label="Fillial pochtalari ilovada chop etiladimi"
            :info="switches.switch1"
          />
        </div>
        <div class="mt-10">
          <SettingsBase
            label="Fillial ilova orqali pochta qabul qiladi"
            :info="switches.switch2"
          />
        </div>
        <div class="mt-10">
          <SettingsBase
            label="Avtomatik tarzda buyurtmalarni yetkazib berildiga o‘tkazish"
            :info="switches.switch3"
          />
        </div>
      </v-col>
    </v-row>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.settings-additional {
  @extend %fSize20lHeight24;
  font-weight: normal;
  border: 1px dashed #656565;
  border-radius: 20px;
  text-align: center;
  color: $gray-400;
  background: $gray-f4;
}
</style>