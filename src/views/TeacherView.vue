<template>
<div class="container">
    <div>
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div class="card infoPerson align-items-center"> 
                <img src="../image/usuario.png" height="100" width="100" />
                <div class=" image d-flex flex-column justify-content-center  "> 
                    <span class="name mt-3"><strong>ID:</strong> {{ id }}</span> 
                    <span class="name mt-3"><strong>Name:</strong> {{ name }}</span> 
                    <span class="name mt-3"><strong>Last Name:</strong> {{ lastName }}</span> 
                    <span class="name mt-3"><strong>Age:</strong> {{ age }}</span>       
                </div> 
                <RouterLink to="/" class="routerlink">Log Out</RouterLink>
            </div>
        </div>
    </div>
    <div class="mt-4 mb-4 p-3 "> 
        <div class="card  align-items-center"> 
            <h2><strong>What subject grade do you want to upload: </strong></h2>
            <div class="containerAsignature">
                <div class="columAsignature">
                    <button @click="goToCalifications(1)" class="routerlink routerlinkSubject">Biology</button>
                    <button @click="goToCalifications(2)" class="routerlink routerlinkSubject">Physics</button>
                    <button @click="goToCalifications(3)" class="routerlink routerlinkSubject">Chemistry</button>
                    <button @click="goToCalifications(4)" class="routerlink routerlinkSubject">Economy</button>
                </div>
                <div class="columAsignature">
                    <button @click="goToCalifications(5)" class="routerlink routerlinkSubject">Arts</button>
                    <button @click="goToCalifications(6)" class="routerlink routerlinkSubject">Spanish</button>
                    <button @click="goToCalifications(7)" class="routerlink routerlinkSubject">English</button>
                    <button @click="goToCalifications(8)" class="routerlink routerlinkSubject">Math</button>         
                </div>
                <div class="columAsignature">
                    <button @click="goToCalifications(9)" class="routerlink routerlinkSubject">Geometry</button>
                    <button @click="goToCalifications(10)" class="routerlink routerlinkSubject">Statistics</button>
                    <button @click="goToCalifications(11)" class="routerlink routerlinkSubject">Philosophy</button>
                    <button @click="goToCalifications(12)" class="routerlink routerlinkSubject">Technology</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRegisterSubjectId } from '../stores/subjectStore'
import TeacherDb from '@/table/DataBaseTestTeacher';
import {useLogIn} from '../stores/loginStore';

const router = useRouter();
const subjectStore = useRegisterSubjectId();
const id = ref('')
const name = ref('')
const lastName = ref('')
const age = ref('')
const useStore = useLogIn()
let i = 0

const goToCalifications = (id) => {
    subjectStore.saveSbuject(id)  
  router.push({ name: 'search' });
};

while(TeacherDb[i].idTeacher != useStore.username)
{
    i++
}
id.value = TeacherDb[i].idTeacher
name.value = TeacherDb[i].name
lastName.value = TeacherDb[i].lastName
age.value = TeacherDb[i].age
i=0


</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .containerAsignature{
        background-color: rgba(255, 255, 255, 0.884);
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.37);
        border-radius: 10px;
    }
 
    .columAsignature{
        display: flex;
        justify-content: space-between;
    }

    .routerlinkSubject{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
        margin: 20px;
        transition: all 0.3s ease;
        &:hover{
            background-color:   #3b3b3b;
            color: white;
            transform: scale(1.05);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            
        }
    }
    



</style>