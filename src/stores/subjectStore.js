import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useRegisterSubjectId = defineStore('registar',() =>{
    const subjectId = ref ('')
    const saveSbuject = (idClickButton) =>{
        subjectId.value = idClickButton;
    }
    return{subjectId, saveSbuject}
})