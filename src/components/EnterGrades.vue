<template>
            <div class="container d-flex  justify-content-center align-items-center flex-column ">
            <div class="row g-4 containerIngresoNotas flex-row">
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Subject: </strong>{{ subject }}</h5>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Student: </strong>{{ name }} {{ lastName }}</h5>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>lowest grade '0.0' - highest grade '5.0'</strong></h5>
                </div>
                <form @submit="onSubmit">
                    <div class="d-flex flex-row justify-content-center">
                    <div class="col-xs mb-4">
                        <label  for="nota1"><strong>Grade 1:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Example: 3.6"  id="grade1" v-model="grade1">
                    </div>
                    <div class="col-xs ms-5 mb-4">
                        <label  for="nota2"><strong>Grade 2:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Example: 3.6"  id="grade2" v-model="grade2">
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <div class="col-xs">
                        <label  for="nota3"><strong>Grade 3:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Example: 3.6"  id="grade3" v-model="grade3">
                    </div>
                    <div class="col-xs ms-5">
                        <label  for="grade4"><strong>Grade 4:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Example: 3.6"  id="grade4" v-model="grade4">
                    </div>
                </div> 
                <div class="d-flex justify-content-center align-items-center">
                    <button @click="goToSearchStudent" class="routerlink routerlinkSubject">Back</button>
                    <button type="submit" class="routerlink routerlinkSubject mt-4 ms-4">Enter</button>
                </div>
                </form>   
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchStudentId } from '../stores/searchStudentStore'
import { useRegisterSubjectId } from '../stores/subjectStore'
import StudentDb from '@/table/DataBaseTestStudent';
import SubjectDb from '@/table/DataBaseTestSubject';
import { enterGrade } from '@/helper/enterGrades';
import { useRouter } from 'vue-router';

const name = ref('')
const lastName = ref('')
const subject = ref('')
const grade1 = ref()
const grade2 = ref()
const grade3 = ref()
const grade4 = ref()
const router = useRouter();
const searchStudent = useSearchStudentId();
const subjectStore = useRegisterSubjectId();

const goToSearchStudent = () => {
  router.push({ name: 'search' });
};


for(let i = 0; i < StudentDb.length; i++){
    if(searchStudent.studentId == StudentDb[i].idStudent)
    {
        name.value = StudentDb[i].name
        lastName.value = StudentDb[i].lastName
    }
}

for(let i = 0; i < SubjectDb.length; i++){
    if(subjectStore.subjectId == SubjectDb[i].subjectId)
    {
        subject.value = SubjectDb[i].subject;
    }
}

const onSubmit = () => {
    enterGrade(searchStudent.studentId,subjectStore.subjectId, grade1.value, grade2.value, grade3.value, grade4.value)
    alert('Notas Subidas')
    router.push({ name: 'teacher' });
}




</script>


<style scoped>
    .containerIngresoNotas{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }
    
    .container{
        position: relative;
        top: 100px;
        background-color: rgba(255, 255, 255, 0.884);
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.37);
        padding: 20px;
        border: 1px solid black;
        border-radius: 10px;
        width: 35vw;
    }

</style>