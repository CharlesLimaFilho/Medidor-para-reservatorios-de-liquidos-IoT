<script setup>
    import logo from '@/assets/img/logo_reservatorio.jpg'
</script>

<template>
    <nav class="bg-green-700 border-b border-green-500">
        <div class="mx-auto max-w-7xl px-2">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center">
                    <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
                        <img class="h-10 w-auto rounded" :src="logo" alt="Main site" title="Aiiiiiiiii">
                        <span class="hidden md:block text-2xl font-bold text-white ml-2">Main site</span>
                    </a>
                    <div class="flex space-x-2">
                        <a 
                           href="index.html" 
                           class=" text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home
                        </a>
                        <a 
                           href=""
                           class=" text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs
                        </a>
                        <a 
                           href=""
                           class=" text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>