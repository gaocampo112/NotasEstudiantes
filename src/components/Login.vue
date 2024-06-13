<template>
 <div class="containerLogin">
        <h1 class="title">SIGMA</h1>
        <Form class="sinbgInForm" @submit="onSubmit"  :validation-schema="schemaLogin">
            <div class="d-flex flex-row mb-2 ">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="selecteOption" value="teacher">
                    <label class="form-check-label" for="flexRadioDefault1">Teacher</label>
                </div>
                <div class="form-check ms-4">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="selecteOption" value="student">
                    <label class="form-check-label" for="flexRadioDefault2">Student</label>
                </div>
                </div>
            <div data-mdb-input-init class="form-outline mb-2 d-flex flex-column containerInput">
                <Field type="text" name="id" id="form2Example1" class="form inputlogin" v-model="user"/>
                <label class="form-label" for="form2Example1">User ID</label>
            </div>
            <div data-mdb-input-init class="form-outline mb-2 d-flex flex-column containerInput">
                <Field type="password" name="password" id="form2Example2" class="form inputlogin" v-model="password" />
                
                <label class="form-label" for="form2Example2">Password</label>     
            </div>
            <button class="routerlink routerlinkSubject mt-1" type="submit">Login</button>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Form, Field } from 'vee-validate';
import { schemaLogin } from '@/schemas/validationSchema';
import StudentDb from '@/table/DataBaseTestStudent';
import TeacherDb from '@/table/DataBaseTestTeacher';
import {useLogIn} from '../stores/loginStore'

const logInStore = useLogIn();
const router = useRouter();
const selecteOption = ref('')
const user = ref('')
const password = ref('')

const onSubmit = () => {
    if(selecteOption.value === 'teacher')
    {
        for(let i = 0; i < TeacherDb.length; i++)
        {
            if(TeacherDb[i].idTeacher == user.value && TeacherDb[i].password == password.value){
                logInStore.userStore(user.value)
                router.push({ name: 'teacher' });
                return
            }
        }
    }else if(selecteOption.value === 'student'){
        for(let i = 0; i < StudentDb.length; i++)
        {
            if(StudentDb[i].idStudent == user.value && StudentDb[i].password == password.value){
                logInStore.userStore(user.value)
                router.push({ name: 'student' });
                return
            }
        }

    }
    alert("Incorrect user or password") 
}

</script>

<style>
/* Container of Login */
 .containerLogin{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;
    margin: 0;
}

/* Login Form */
.sinbgInForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 420px;
    height: 280px;
    background-image: url('../image/pizarron.png');
    background-size: cover;
    background-position: center;
    color: white;
    font-weight: bold;
    font-size:19px;
    border-radius: 10px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.37);
}

/* Title styles */
.title{
    display: flex;
    color: white;
    font-weight: bold;
    letter-spacing: 5px;
    background-color: #648d75;
    border: 8px solid #BA8A53;
    border-radius: 15px;
    padding: 0px 15px 0px 15px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.37);
}
</style>