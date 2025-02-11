<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Mynavbar from '@/components/Mynavbar.vue';
  import Loginarea from './components/Loginarea.vue';
  import User from '@/User.vue';
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';

  const route = useRoute();
  const updateTitle = () => {
    if (route.meta && route.meta.title) {
      document.title = route.meta.title;
    }
  };

  watch(route, updateTitle);
  onMounted(updateTitle)

</script>

<template>
    <!--<Mynavbar />-->
    <!--<Loginarea />-->
    <RouterView />
    
</template>