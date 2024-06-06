import { defineStore } from 'pinia'
import {ref} from 'vue'

export const uselogin = defineStore('Login',() =>{
    const username = ref ('')
    const password = ref('')
    const iniciarSesion = (usernameForm, passwordForm) =>{
        username.value = usernameForm;
        password.value = passwordForm;
    }
    return{username, password, iniciarSesion}
})