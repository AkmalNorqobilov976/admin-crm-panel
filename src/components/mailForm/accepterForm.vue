<script setup>
import BaseInput from '../Form/BaseInput.vue';
import { defineProps } from "vue";

const accepter = defineProps({
    phone: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    }
})
</script>
<template>
    <v-card class="pa-10 mt-15" elevation="0">
        <v-form>
            <div>
                <BaseInput phone v-model="accepter.phone" label="Telefon raqami" placeholder="(00) 000 - 00 - 00" />
            </div>
            <div class="mt-10">
                <BaseInput v-model="accepter.name" label="Ismi" placeholder="Ismini kiriting" />
            </div>
            <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
        </v-form>
    </v-card>
</template>