<template>
 <div class="containerLogin">
        <h1 class="title">SIGMA</h1>
        <Form class="sinbgInForm" @submit="onSubmit"  :validation-schema="schemaLogin">
            <div class="d-flex flex-row mb-2 ">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="opcionSeleccionada" value="profesor">
                    <label class="form-check-label" for="flexRadioDefault1">Profesor</label>
                </div>
                <div class="form-check ms-4">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="opcionSeleccionada" value="estudiante">
                    <label class="form-check-label" for="flexRadioDefault2">Estudiante</label>
                </div>
                </div>
            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-2 d-flex flex-column containerInput">
                <Field type="text" name="id" id="form2Example1" class="form inputlogin" v-model="usuario"/>
                <label class="form-label" for="form2Example1">Usuario</label>

            </div>
            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-2 d-flex flex-column containerInput">
                <Field type="password" name="password" id="form2Example2" class="form inputlogin" v-model="clave" />
                
                <label class="form-label" for="form2Example2">Contraseña</label>

                
            </div>
            <!-- Submit button -->
            <button class="routerlink routerlinkAsignature mt-1" type="submit">Ingresar</button>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schemaLogin } from '@/schemas/validationSchema';
import AlumnosDb from '@/table/BaseDatosPruebaAlumnos';
import ProfesorDb from '@/table/BaseDatosPruebaProfesores';
import {uselogin} from '../stores/loginStore'

const registrarStore = uselogin();
const router = useRouter();
const opcionSeleccionada = ref('')
const usuario = ref('')
const clave = ref('')

const onSubmit = () => {
    if(opcionSeleccionada.value === 'profesor')
    {
        for(let i = 0; i < ProfesorDb.length; i++)
        {
            if(ProfesorDb[i].idProfesor == usuario.value && ProfesorDb[i].contrasenia == clave.value){
                registrarStore.iniciarSesion(usuario.value)
                router.push({ name: 'teacher' });
                return
            }
        }
    }else if(opcionSeleccionada.value === 'estudiante'){
        for(let i = 0; i < AlumnosDb.length; i++)
        {
            if(AlumnosDb[i].idAlumno == usuario.value && AlumnosDb[i].contrasenia == clave.value){
                registrarStore.iniciarSesion(usuario.value)
                router.push({ name: 'student' });
                return
            }
        }

    }
    alert("Usuario o contraseña incorrecta") 
}

</script>

<style>
/* Contenedor del login */
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

/* Formulario de inicio de secion */
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

/* Estilos del titulo */
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