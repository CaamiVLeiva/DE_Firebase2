<template>
    <div class="container mt-5">
        <h2 class="text-center">Iniciar Sesión</h2>
        <form @submit.prevent="login" class="col-md-4 mx-auto">
            <div class="mb-3">
                <input type="email" class="form-control" placeholder="Correo Electrónico" v-model="email" required />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" placeholder="Contraseña" v-model="password" required />
            </div>
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
    </div>
</template>

<script>
import { auth } from '@/firebaseConfig.js'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push('/home');
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>