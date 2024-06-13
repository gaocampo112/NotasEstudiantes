import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useSearchStudentId  = defineStore('asignatura',() =>{
    const studentId = ref ('')
    const saveId = (studentIdForm) =>{
        studentId.value = studentIdForm;
    }
    return{studentId, saveId}
})