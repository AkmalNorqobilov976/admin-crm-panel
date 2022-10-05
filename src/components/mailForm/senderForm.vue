<script setup>
import BaseInput from '../Form/BaseInput.vue';
import { defineProps, reactive } from "vue";

const sender = reactive({
    form: {
        phone: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        }
    }
})
</script>
<template>
    <v-card class="pa-10 mt-15" elevation="0">
        <v-form>
            <div>
                <BaseInput phone v-model="sender.phone" label="Telefon raqami" placeholder="(00) 000 - 00 - 00" />
            </div>
            <div class="mt-10">
                <BaseInput v-model="sender.name" label="Ismi" placeholder="Ismini kiriting" />
            </div>
            <!-- <v-text-field class="add-new-post" placeholder="+998 (00) 000 - 00 - 00"  label="Telefon raqami" variant="plain" elevation="0"/> -->
        </v-form>
    </v-card>
</template>