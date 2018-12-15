<template>
    <v-layout row wrap justify-center>
        <v-flex xs10>
            <v-card class="pa-3 mt-5">
                <v-text-field v-model="user.email" label="Email"></v-text-field>
                <v-text-field v-model="user.password" type="password" label="Senha"></v-text-field>
                <v-btn color="primary" @click="login">Entrar</v-btn>
            </v-card>
        </v-flex>
        <v-dialog v-model="loading" persistent width="300">
            <v-card color="primary" dark>
                <v-card-text>
                    Aguarde um instante
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
    import Axios from 'axios'
    import config from '@/resources/config'

    export default {
        methods: {
            async login() {
                this.loading = true;
                try {
                    let response = await Axios.post(`${config.apiLink}/auth`, this.user)
                    console.log(response)
                    this.$router.push('/home')
                } catch (response) {
                    console.log(response)
                    alert(response.data)
                } finally {
                    this.loading = false;
                }
            }
        },
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                loading: false
            }
        }
    }
</script>