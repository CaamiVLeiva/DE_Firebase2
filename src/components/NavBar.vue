<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Firebase-Auth</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link class="nav-link" to="/signup">Registro</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/login">Iniciar Sesión</router-link></li>
                    <li class="nav-item" v-if="isLoggedIn"><router-link class="nav-link" to="/home">Inicio</router-link>
                    </li>
                    <li class="nav-item" v-if="isLoggedIn">
                        <button class="btn btn-outline-danger" @click="logout">Cerrar Sesión</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import { auth } from '@/firebaseConfig'
import { signOut } from 'firebase/auth'

export default {
    name: 'NavBar',
    data() {
        return {
            isLoggedIn: false,
        };
    },
    methods: {
        async logout() {
            try {
                await signOut(auth);
                this.isLoggedIn = false;
                this.$router.push('/login'); 
            } catch (error) {
                console.error("Error al cerrar sesión: ", error);
            }
        },
    },
    created() {
        auth.onAuthStateChanged((user) => {
            this.isLoggedIn = !!user; 
        });
    }
}
</script>

<style>
nav {
    background-color: #f8f9fa;
    padding: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline;
    margin-right: 20px;
}

a {
    text-decoration: none;
    color: #007bff;
}

button {
    background-color: transparent;
    border: none;
    color: #007bff;
    cursor: pointer;
}

button:hover {
    text-decoration: underline;
}

a:hover {
    text-decoration: underline;
}
</style>