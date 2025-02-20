<script setup>
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
</template>