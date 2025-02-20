<script setup>
import UserImg from '@/assets/img/userPadrao.png'
import menubarIcon from '@/assets/img/menubarButton.png'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './store/auth';
import newDevice from './components/newDevice.vue';

const menubar = ref(false);
const adding = ref(false);
const countDevice = ref(1);
const devices = ref([]);
const user = ref(null);


const router = useRouter();
const authStore = useAuthStore();

const logout = () => {
    authStore.logout();
    router.push('/');
};

const menubarChange = () => {
    menubar.value = !menubar.value
}

const addingChange = () => {
    adding.value = !adding.value
}

const addDevice = () => {
    addingChange();
    
    countDevice.value++
}

const removeDevice = (index) => {
    devices.value.splice(index, 1);
}

const sendData = () => {
    devices.value.push(`Device ${deviceName.value}`);
    addingChange();
}

onMounted(() => {
    const storedUser = localStorage.getItem('auth');
    if (storedUser) {
        user.value = JSON.parse(storedUser);
        document.title = `Dispositivos de ${ authStore.user.name }`;
    }
})

</script>




<template>
    <div class="bg-cyan-500 w-auto h-16">
        <div class="flex justify-between">
            <div>
                <button @click="menubarChange">
                    <img :src="menubarIcon" alt="menuButton" class=" size-16">
                </button>
            </div>
            <div class="flex items-center justify-end h-16">
                <div class=" pr-2">
                    <span class="font-sans font-bold text-white" >Olá, {{ user?.name }}</span>
                </div>
                <div class=" h-auto">
                    <img :src="UserImg" alt="User" class="size-14 rounded-full">
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-1">
        <div v-if="menubar" class="bg-cyan-700 w-28 h-screen"> <!--Div da barra lateral-->
            <div class="flex flex-1 flex-col justify-between items-center h-screen">
                <button class="flex bg-cyan-800 hover:bg-cyan-900 items-center justify-center w-full h-[40px] border-black border-y mt-4">
                    Dispositivos
                </button>
                <button @click="logout" class="flex bg-cyan-800 hover:bg-cyan-900 items-center justify-center w-full h-[40px] border-black border-y mb-4">
                    Logout
                </button>
            </div>
        </div> <!--Div da barra lateral-->
        <div class="flex flex-col flex-1" v-if="!adding"> <!--Div da area de devices-->
            <div v-for="(device, index) in devices" :key="device" class="h-16 mb-1 border-black border-2 rounded-lg flex items-center">
                <div class=" flex flex-1 justify-between items-center">
                    <span>{{ device }}</span>
                    <div>
                        <button @click="" class="bg-gray-400 p-2 mr-2 rounded-lg hover:bg-gray-500">Detalhes</button>
                        <button @click="removeDevice(index)" class="bg-red-700 p-2 mr-2 rounded-lg hover:bg-red-800">Remover</button>
                    </div>
                </div>
            </div>
            <div>
                <button @click="addingChange" class="bg-cyan-800 w-max p-4 rounded-lg hover:bg-cyan-900">Adicionar</button>
            </div>
        </div> <!--Div da area de devices-->
        <div v-if="adding" class="flex flex-1 w-full">
            <div class="h-screen w-full flex justify-center items-center">
                <div class="rounded-lg bg-white w-[800px] h-[400px] flex flex-row items-center justify-center">
                    <form>
                        <input type="text" v-model="deviceName" placeholder="Nome do dispositivo">
                        <button @click="sendData" class="bg-cyan-800 w-max p-4 rounded-lg hover:bg-cyan-900">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>