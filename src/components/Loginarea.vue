<script setup>

import { computed, ref } from 'vue';
import logo from '@/assets/img/logo_reservatorio.jpg'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const idA = ''
const passwordA = ''
const incorrectInfo = ref(false)
const router = useRouter();
const authStore = useAuthStore();
const errorMessage = ref('');


const delay = ms => new Promise(res => setTimeout(res, ms));



const handleLogin = () => {
  if (authStore.login(id.value, password.value)) {
    router.push(`user/${id.value}`);
  } else {
    window.history.replaceState(null, '', '/');
    incorrectInfo.value = true
    setTimeout(() => {
        incorrectInfo.value = false;
    }, 5000)
  }
};


</script>

<template>
    <div class="flex items-center justify-center max-w-7xl p-20 mx-auto">
        <div class="flex bg-white h-96 w-96 items-center justify-center flex-col">
            <div class="block items-center justify-center">
                <img :src="logo" alt="logo" class="w-auto h-10 rounded m-auto pb-2" hidden>
                <span class="flex justify-center items-center pb-8 text-2xl font-bold">Faça o login</span>
                <form>
                    <input type="text" name="id" id="id" v-model="id" placeholder="ID" class=" pl-1 bg-gray-300 text-black placeholder-black placeholder-opacity-30" required>
                    <br>
                    <div class=" py-2"></div>
                    <input type="password" name="password" id="password" v-model="password" placeholder="Password" class="pl-1 bg-gray-300 text-black placeholder-black placeholder-opacity-30" required>
                    <br>
                    <div class=" py-2"></div>
                    <div class="flex justify-center">
                        <button class=" text-white bg-gray-700 rounded-md hover:bg-black hover:text-white px-3 py-2" type="submit" @click="handleLogin">Entrar</button>
                    </div>
                </form>
            </div>
            <div class="flex items-center pt-7 justify-center opacity-80" v-if="incorrectInfo">
                <span class="bg-red-500 text-black rounded-md p-2">Id ou senha incorretos</span>
            </div>
        </div>
    </div>

</template>