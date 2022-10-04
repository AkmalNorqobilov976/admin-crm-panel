<script setup >
import { reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import BaseInput from "@/components/Form/BaseInput.vue";
import BaseSelect from "@/components/Form/BaseSelect.vue";
import Sender from "@/components/svgs/sender.vue";
import Accepter from "@/components/svgs/accepter.vue";
import ShipmentIcon from "@/components/svgs/shipmentIcon.vue";
import DefaultLayout from '@/layouts/defaultLayout.vue'

let formLevel = "accepter";
const store = useStore();
store.commit('layout/pushBreadcrumbs', {
  text: "Yangi pochta qo‘shish",
  route: "/mails/add-new-post",
  level: 2
})
const sender = reactive({
  phone: "",
  name: "",
});

const accepter = reactive({
  phone: "",
  name: "",
});
const linears = reactive({
  linear1: 10,
  linear2: 10,
});
const shipments = reactive({
  shipmentName: "",
  destination: "",
  transportType: "",
  totalSum: 0,
  deliveryPrice: 0,
  deliveryTime: "",
  isAddition: false,
});
const linearsColor = reactive({
  color1: "#F0B400",
  color2: "#F5F5F5",
});
onBeforeMount(() => {
  store.commit('layout/pushBreadcrumbs',{
    route: "/mails/addNewPost",
    text: "Yangi pochta qo‘shish",
  });
});
</script>
<template>
  <default-layout :right-sidebar="true">
    <template #appbar>
      <LayoutBreadcrumb />
    </template>
    <template #rigthsidebar>
      <v-card v-if="formLevel === 'sender'" class="pa-10 mt-15" elevation="0">
        <v-form>
          <div>
            <BaseInput
              phone
              v-model="sender.phone"
              label="Telefon raqami"
              placeholder="(00) 000 - 00 - 00"
            />
          </div>
          <div class="mt-10">
            <BaseInput
              v-model="sender.name"
              label="Ismi"
              placeholder="Ismini kiriting"
            />
          </div>
          <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
        </v-form>
      </v-card>
      <v-card
        v-else-if="formLevel === 'accepter'"
        class="pa-10 mt-15"
        elevation="0"
      >
        <v-form>
          <div>
            <BaseInput
              phone
              v-model="accepter.phone"
              label="Telefon raqami"
              placeholder="(00) 000 - 00 - 00"
            />
          </div>
          <div class="mt-10">
            <BaseInput
              v-model="accepter.name"
              label="Ismi"
              placeholder="Ismini kiriting"
            />
          </div>
          <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
        </v-form>
      </v-card>
      <v-card
        v-else-if="formLevel === 'shipment'"
        class="pa-10 mt-15 pb-10"
        elevation="0"
      >
        <v-form>
          <div>
            <BaseInput
              v-model="shipments.shipmentName"
              label="Jo‘natma nomi"
              placeholder="Nima olib borish kerak"
            />
          </div>
          <div class="mt-10">
            <BaseInput
              v-model="shipments.destination"
              label="Qayerga yetkazish kerak"
              placeholder="Manzilni kiriting"
            />
          </div>
          <div class="my-10">
            <BaseSelect
              :options="['go', 'python', 'rust', 'javascript']"
              :default="'go'"
              label="Transport turi"
            />
          </div>

          <div class="mt-10">
            <BaseInput
              v-model="shipments.totalSum"
              label="Umumiy summa"
              isPrice
            />
          </div>
          <div class="mt-10">
            <BaseInput
              v-model="shipments.deliveryPrice"
              label="Yetkazish summa"
              isPrice
              isRecommendedPrices
            />
          </div>
          <div class="shipment-addition">
            <p>Qo‘shimcha ma’lumotlarni kiritish</p>
            <div>
              <v-switch
                color="blue-darken-5"
                v-model="shipments.isAddition"
              ></v-switch>
            </div>
          </div>
          <div v-if="shipments.isAddition" class="mt-10">
            <BaseInput
              v-model="shipments.deliveryPrice"
              label="Qachonga yetkazish kerak"
              placeholder="10/09/2022"
              type="date"
            />
          </div>
          <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
        </v-form>
      </v-card>
    </template>

    <div class="gray step-form d-inline-flex align-center">
      <div class="step-form-icon">
        <Sender />
        <p class="step-form-info">Yuboruvchi</p>
      </div>
      <div>
        <v-progress-linear
          class="step-form-linear"
          height="10"
          :color="linearsColor.color1"
          v-model="linears.linear1"
          bg-color="#F5F5F5"
          :bg-opacity="1"
        ></v-progress-linear>
      </div>
      <div class="step-form-icon">
        <Accepter />
        <p class="step-form-info">Qabul qiluvchi</p>
      </div>
      <div class="step-form-icon">
        <v-progress-linear
          class="step-form-linear"
          height="10"
          bg-color="#F5F5F5"
          :bg-opacity="1"
          :color="linearsColor.color2"
          v-model="linears.linear2"
        ></v-progress-linear>
      </div>
      <div class="step-form-icon">
        <ShipmentIcon />
        <p class="step-form-info">Jo‘natma</p>
      </div>
    </div>
    <v-card
      v-if="formLevel === 'sender'"
      class="sender-card d-flex mt-10"
      color="#F4F4F4"
      elevation="0"
    >
      <div>
        <v-img
          width="388"
          height="280"
          :src="require('@/assets/images/yuboruvchi.png')"
        ></v-img>
      </div>
      <div class="sender-card-info">
        <div class="mb-12">
          <p class="sender-label">Telefon raqami</p>
          <p class="sender-info" :class="{blackColor: sender.phone}">
            +998 {{ sender.phone ? sender.phone : "(00)000-00-00" }}
          </p>
        </div>
        <div>
          <p class="sender-label">Ismi</p>
          <p v-if="sender.name" class="sender-info" :class="{blackColor: sender.name}">
            {{ sender.name }}
          </p>
          <p v-else class="sender-info">Kiritilmagan</p>
        </div>
      </div>
    </v-card>
    <v-card
      v-else-if="formLevel === 'accepter'"
      class="sender-card d-flex mt-10"
      color="#F4F4F4"
      elevation="0"
    >
      <div class="sender-card-image">
        <v-img
          width="388"
          :src="require('@/assets/images/qabul qluvchi 1.png')"
        ></v-img>
      </div>
      <div class="sender-card-info">
        <div class="mb-12">
          <p class="sender-label">Telefon raqami</p>
          <p class="sender-info" :class="{blackColor: accepter.phone}">
            +998 {{ accepter.phone ? accepter.phone : "(00)000-00-00" }}
          </p>
        </div>
        <div>
          <p class="sender-label">Ismi</p>
          <p v-if="accepter.name" class="sender-info" :class="{blackColor: accepter.name}">
            {{ accepter.name }}
          </p>
          <p v-else class="sender-info">Kiritilmagan</p>
        </div>
      </div>
    </v-card>
    <v-card
      v-else-if="formLevel === 'shipment'"
      class="sender-card d-flex mt-10"
      color="#F4F4F4"
      elevation="0"
    >
      <div>
        <v-img
          width="388"
          height="400"
          :src="require('@/assets/images/jo\'natma 1.png')"
        ></v-img>
      </div>
      <v-row justify="space-between" class="sender-card-info">
        <v-col md="6">
          <p class="sender-label">Jo‘natma nomi</p>
          <p v-if="shipments.shipmentName" class="sender-info" :class="{blackColor: shipments.shipmentName}">
            {{ shipments.shipmentName }}
          </p>
          <p v-else class="sender-info">Kiritilmagan</p>
        </v-col>
        <v-col md="6">
          <p class="sender-label">Umumiy summa</p>
          <p class="sender-info" :class="{blackColor: shipments.totalSum}">{{ shipments.totalSum }} so‘m</p>
          <!-- <p v-else class="sender-info">Kiritilmagan</p> -->
        </v-col>
        <v-col md="6">
          <p class="sender-label">Qayerga yetkazish kerak</p>
          <p v-if="shipments.destination" class="sender-info" :class="{blackColor: shipments.destination}">
            {{ shipments.destination }}
          </p>
          <p v-else class="sender-info">Kiritilmagan</p>
        </v-col>
        <v-col md="6">
          <p class="sender-label">Yetkazish summasi</p>
          <p class="sender-info" :class="{blackColor: shipments.deliveryPrice}">{{ shipments.deliveryPrice }} so‘m</p>
        </v-col>
        <v-col md="6">
          <p class="sender-label">Transport turi</p>
          <p v-if="shipments.transportType" class="sender-info" :class="{blackColor: shipments.transportType}">
            {{ shipments.transportType }}
          </p>
          <p v-else class="sender-info">Tanlanmagan</p>
        </v-col>
      </v-row>
    </v-card>
  </default-layout>
</template>


<style lang="scss" scoped>
.step-form {
  // display: flex;
  .step-form-linear {
    width: 320px;
  }
  .step-form-icon {
    position: relative;
    .step-form-info {
      @extend %fSize28lHeight34;
      position: absolute;
      width: 200px;
      font-style: normal;
      font-weight: 600;
    }
  }
}
.shipment-addition {
  @extend %fSize20lHeight24;
  font-weight: 600;
  display: flex;
  align-items: center;

  p {
    flex: 1 1 auto;
  }
  div {
    // display: inline-block;
    // align-self: flex-end;
    margin-top: 10px;
  }
}
.sender-card {
  border-radius: 20px;
  .sender-card-image {
    align-self: center;
  }
  .sender-card-info {
    flex: 1 1 auto;
    margin: 54px 60px;
    color: $gray-95;
    .sender-label {
      color: $dark-62;
      @extend %fSize20lHeight24;
      font-weight: 500;
      font-style: normal;
    }
    .sender-info {
      @extend %fSize26lHeight31;
      font-weight: 600;
    }
  }
}
.blackColor{
  color: #000;
}

</style>