import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useRegisterAsignatureId = defineStore('registar',() =>{
    const idAsignatura = ref ('')
    const guardarRegistro = (idClickButton) =>{
        idAsignatura.value = idClickButton;
    }
    return{idAsignatura, guardarRegistro}
})