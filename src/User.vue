<script setup>
import UserImg from '@/assets/img/logo.png'
import menubarIcon from '@/assets/img/menubarButton.png'
import { ref } from 'vue';

const menubar = ref(false);
const countDevice = ref(1);
const devices = ref([]);



// must finish (i hope)
const menubarAdapt = () => {
    //if (window.screenX < )
}

const menubarChange = () => {
    menubar.value = !menubar.value
}

const addDevice = () => {
    devices.value.push(`Device ${countDevice.value}`)
    countDevice.value++
}

const removeDevice = (index) => {
    devices.value.splice(index, 1);
}
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
                    <span class="font-sans font-bold text-white ">User name</span>
                </div>
                <div class=" h-auto">
                    <img :src="UserImg" alt="User" class="size-14 rounded-full">
                </div>
            </div>
        </div>
    </div>
    <div class="absolute"> okla</div>
    <div class="flex flex-1">
        <div v-if="menubar" class="bg-cyan-700 w-28 h-screen">

        </div>
        <div class="flex flex-col flex-1">
            <div v-for="(device, index) in devices" :key="device" class="h-16 mb-1 border-black border-2 rounded-lg flex items-center">
                <div class=" flex flex-1 justify-between items-center">
                    <span>{{ device }}</span>
                    <button @click="removeDevice(index)" class="bg-red-700 p-2 mr-2 rounded-lg hover:bg-red-800">Remove</button>
                </div>
            </div>
            <div>
                <button @click="addDevice" class="bg-cyan-800 w-max p-4 rounded-lg hover:bg-cyan-900">Add device</button>
            </div>
        </div>
    </div>
</template>