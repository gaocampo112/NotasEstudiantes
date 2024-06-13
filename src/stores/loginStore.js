import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useLogIn = defineStore('Login',() =>{
    const username = ref ('')
    const userStore = (usernameForm) =>{
        username.value = usernameForm;
    }
    return{username, userStore}
})