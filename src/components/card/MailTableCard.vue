<script setup>
import Ellepse21 from '../svgs/Ellepse21.vue';
import Ellepse22 from '../svgs/Ellepse22.vue';
import Ellepse23 from '../svgs/Ellepse23.vue';
import Ellepse25 from '../svgs/Ellepse25.vue';
import Message from '../svgs/message.vue';
import Ellepse28 from '../svgs/Ellepse28.vue';

</script>
<template>
  <v-row justify="space-around">
    <v-col md="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Ellepse21 />
        </div>
        <div>
          <p class="ordered-item">
            Bolalar uchun Aqqli soat (baby Smartwatch H23)
          </p>
          <p class="ordered-item-info">Buyurtma:</p>
        </div>
      </div>
    </v-col>
    <v-col md="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Ellepse22 />
        </div>
        <div>
          <p class="ordered-item-price">367,000 so‘m</p>
          <p class="ordered-item-info">Mijozdan olinadigan umumiy summa:</p>
        </div>
      </div>
    </v-col>
    <v-col md="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Ellepse23 />
        </div>
        <div>
          <p class="ordered-item-price">40,000 so‘m</p>
          <p class="ordered-item-info">Yetkazib berish summasi:</p>
        </div>
      </div>
    </v-col>
    <v-col md="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Ellepse25 />
        </div>
        <div>
          <p class="orderer-name">Farhod</p>
          <p class="ordered-item-owner-phone">+998 99 000-45-22</p>
          <p class="ordered-item-info">Kuryer:</p>
        </div>
      </div>
    </v-col>
    <v-col md="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Ellepse25 />
        </div>
        <div>
          <p class="orderer-name">Farhod</p>
          <p class="ordered-item-owner-phone">+998 99 000-45-22</p>
          <p class="ordered-item-info">Yuboruvchi:</p>
        </div>
      </div>
    </v-col>
    <v-col md="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Ellepse25 />
        </div>
        <div>
          <p class="orderer-name">Farhod</p>
          <p class="ordered-item-owner-phone">+998 99 000-45-22</p>
          <p class="ordered-item-info">Qabul qiluvchi:</p>
        </div>
      </div>
    </v-col>
    <v-divider></v-divider>
    <v-col md="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Message />
        </div>
        <div>
          <p class="ordered-item">
            mahsuloni iloji boricha tezroq yetkazish kerak
          </p>
          <p class="ordered-item-info">Izoh:</p>
        </div>
      </div>
    </v-col>
    <v-col md="4" offset="4">
      <div class="order-card">
        <div class="order-card-icon">
          <Ellepse28 />
        </div>
        <div>
          <p class="ordered-item">
            Yengil avtomobil
          </p>
          <p class="ordered-item-info">transport turi:</p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.order-card {
  display: flex;
  background: white !important;
  align-items: center;
  padding: 10px;
 border-radius: 8px;
  margin-top: 20px;
  margin-left: 30px;
  .order-card-icon {
    margin-right: 10px;
  }
  font-weight: 500;
  .ordered-item {
    @extend %fSize20lHeight24;
  }
  .ordered-item-price {
    font-weight: 700;
    @extend %fSize22lHeight27;
  }

  .orderer-name {
    font-weight: 600;
    @extend %fSize18lHeight22;
  }
  .ordered-item-owner-phone {
    font-weight: 700;
    @extend %fSize20lHeight24;
  }
  .ordered-item-info {
    margin-top: 5px;
    font-weight: 500;
    @extend %fSize16lHeight20;
  }
}
</style>