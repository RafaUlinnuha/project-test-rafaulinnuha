<script setup>
import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const formData = reactive({
    name: "",
    email: "",
    textarea: "",
});

const rules = {
    name: { required },
    email: { required, email },
    textarea: { required },
};

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
    const result = await v$.value.$validate();
};

</script>

<template>
    <div class="mt-24 max-w-screen-sm mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 uppercase text-center mb-6">Contact Us</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="formData.name">
                <span v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
            </div>
            <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="formData.email">
                <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
            </div>
            <div class="mb-6">    
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" v-model="formData.textarea"></textarea>
                <span v-for="error in v$.textarea.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
            </div>
            
            <button type="submit" class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center uppercase">Submit</button>
        </form>
    </div>
</template>
