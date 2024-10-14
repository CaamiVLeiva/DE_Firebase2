<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Asegúrate de que este nombre coincida con el archivo

import { auth } from '@/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'App',
  components: {
    NavBar
  },
  created() {
    // Monitoriza el estado de autenticación
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Usuario autenticado:', user);
      } else {
        console.log('No hay usuario autenticado');
      }
    });
  }
}
</script>

<style>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    background-color: #f1f1f1;
    color: #343a40;
}

h1, h2 {
    margin: 0;
}

</style>
