<script setup>
import BaseInput from '../Form/BaseInput.vue';
import BaseSelect from '../Form/BaseSelect.vue';
import { defineProps } from "vue";
const shipments = defineProps({
    shipmentName: {
        type: String,
        default: ""
    },
    destination: {
        type: String,
        default: ""
    },
    transportType: {
        type: String,
        default: ""
    },
    totalSum: {
        type: Number,
        default: 0
    },
    deliveryPrice: {
        type: Number,
        default: 0
    },
    deliveryTime: {
        type: String,
        default: ""
    },
    isAddition: {
        type: Boolean,
        default: false
    },
});
</script>
<template>

    <v-card class="pa-10 mt-15 pb-10" elevation="0">
        <v-form>
            <div>
                <BaseInput v-model="shipments.shipmentName" label="Jo‘natma nomi"
                    placeholder="Nima olib borish kerak" />
            </div>
            <div class="mt-10">
                <BaseInput v-model="shipments.destination" label="Qayerga yetkazish kerak"
                    placeholder="Manzilni kiriting" />
            </div>
            <div class="my-10">
                <BaseSelect :options="['go', 'python', 'rust', 'javascript']" :default="'go'" label="Transport turi" />
            </div>

            <div class="mt-10">
                <BaseInput v-model="shipments.totalSum" label="Umumiy summa" isPrice />
            </div>
            <div class="mt-10">
                <BaseInput v-model="shipments.deliveryPrice" label="Yetkazish summa" isPrice isRecommendedPrices />
            </div>
            <div class="shipment-addition">
                <p>Qo‘shimcha ma’lumotlarni kiritish</p>
                <div>
                    <v-switch color="blue-darken-5" v-model="shipments.isAddition"></v-switch>
                </div>
            </div>
            <div v-if="shipments.isAddition" class="mt-10">
                <BaseInput v-model="shipments.deliveryPrice" label="Qachonga yetkazish kerak" placeholder="10/09/2022"
                    type="date" />
            </div>
            <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
        </v-form>
    </v-card>
</template>