import { defineStore } from 'pinia'
import {ref} from 'vue'

export const uselogin = defineStore('Login',() =>{
    const username = ref ('')
    const iniciarSesion = (usernameForm) =>{
        username.value = usernameForm;
    }
    return{username, iniciarSesion}
})