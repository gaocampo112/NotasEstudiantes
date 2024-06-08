import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useIdIngresaNotas  = defineStore('asignatura',() =>{
    const idEstudiante = ref ('')
    const guardarId = (idEstudianteForm) =>{
        idEstudiante.value = idEstudianteForm;
    }
    return{idEstudiante, guardarId}
})