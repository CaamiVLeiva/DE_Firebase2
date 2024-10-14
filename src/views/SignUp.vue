<template>
    <div class="container mt-5">
        <h2 class="text-center">Registro</h2>
        <form @submit.prevent="signUp" class="col-md-4 mx-auto">
            <div class="mb-3">
                <input type="email" class="form-control" placeholder="Correo Electrónico" v-model="email" required />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" placeholder="Contraseña" v-model="password" required />
            </div>
            <button type="submit" class="btn btn-success">Registrar</button>
        </form>
    </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async signUp() {
            try {
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push('/home');
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>