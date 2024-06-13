<template>
    <div class="container d-flex  justify-content-center align-items-center flex-column ">
    <div class="row g-4 containerIngresoNotas flex-row">
        <form @submit="onSubmit" @submit.prevent="handleSubmit">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h3><strong>Student Information</strong></h3>
                <div class="col-xs">
                    <label  for="id"><strong>Student ID</strong></label>
                    <input type="text" class="form-control border border-dark mt-2" placeholder="Studnet ID"  id="id" v-model="idStudent">
                </div>
                <div>
                    <button @click="goToTeacher" class="routerlink routerlinkSubject ms-4">Back</button>
                    <button class="routerlink routerlinkSubject ms-4" type="submit">Search</button>
                    
                </div>
            </div>
        </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStudentId } from '../stores/searchStudentStore'
import StudentDb from '@/table/DataBaseTestStudent';

const serachStudentId = useSearchStudentId();
const router = useRouter();
const idStudent = ref('');

const goToTeacher = () => {
  router.push({ name: 'teacher' });
};

const onSubmit = () => {
    for(let i = 0; i < StudentDb.length; i++){
        if(idStudent.value == StudentDb[i].idStudent)
        {
            serachStudentId.saveId(idStudent.value)
            router.push({ name: 'califications' });
            return
        }
    }
    alert("Student not found")
}
    


</script>

<style scoped>
    
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
