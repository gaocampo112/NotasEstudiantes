<template>
<div class="contenedor">
    <div>
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div class="card infoPersona align-items-center"> 
                <img src="../image/usuario.png" height="100" width="100" />
                <div class=" image d-flex flex-column justify-content-center  "> 
                    <span class="name mt-3"><strong>ID:</strong> {{ id }}</span> 
                    <span class="name mt-3"><strong>Nombre:</strong> {{ nombre }}</span> 
                    <span class="name mt-3"><strong>Apellido:</strong> {{ apellido }}</span> 
                    <span class="name mt-3"><strong>Edad:</strong> {{ edad }}</span>       
                </div> 
                <RouterLink to="/" class="routerlink">Salir</RouterLink>
            </div>
        </div>
    </div>
    <div class="mt-4 mb-4 p-3 "> 
        <div class="card  align-items-center"> 
            <h2><strong>Elija la asignatura a ingresar: </strong></h2>
            <div class="containerAsignature">
                <div class="columAsignature">
                    <button @click="goToCalifications(1)" class="routerlink routerlinkAsignature">Biology</button>
                    <button @click="goToCalifications(2)" class="routerlink routerlinkAsignature">Fisica</button>
                    <button @click="goToCalifications(3)" class="routerlink routerlinkAsignature">Quimica</button>
                    <button @click="goToCalifications(4)" class="routerlink routerlinkAsignature">Economia</button>
                </div>
                <div class="columAsignature">
                    <button @click="goToCalifications(5)" class="routerlink routerlinkAsignature">Artes</button>
                    <button @click="goToCalifications(6)" class="routerlink routerlinkAsignature">Español</button>
                    <button @click="goToCalifications(7)" class="routerlink routerlinkAsignature">Ingles</button>
                    <button @click="goToCalifications(8)" class="routerlink routerlinkAsignature">Matematicas</button>         
                </div>
                <div class="columAsignature">
                    <button @click="goToCalifications(9)" class="routerlink routerlinkAsignature">Geometria</button>
                    <button @click="goToCalifications(10)" class="routerlink routerlinkAsignature">Estadistica</button>
                    <button @click="goToCalifications(11)" class="routerlink routerlinkAsignature">Filosofia</button>
                    <button @click="goToCalifications(12)" class="routerlink routerlinkAsignature">Informatica</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRegisterAsignatureId } from '../stores/idStore'

const router = useRouter();
const registrarStore = useRegisterAsignatureId();

const goToCalifications = (id) => {
  registrarStore.guardarRegistro(id)  
  router.push({ name: 'search' });
};

const id = ref('')
const nombre = ref('')
const apellido = ref('')
const edad = ref('')
const asignatura = ref('')
</script>

<style scoped>
    .contenedor{
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

    .routerlinkAsignature{
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