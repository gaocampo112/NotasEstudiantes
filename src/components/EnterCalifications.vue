<template>
            <div class="container d-flex  justify-content-center align-items-center flex-column ">
            <div class="row g-4 containerIngresoNotas flex-row">
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Asignatura: </strong>{{ asignatura }}</h5>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Estudiante: </strong>{{ nombre }} {{ apellido }}</h5>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Minima nota '0.0' - Maxima nota '5.0'</strong></h5>
                </div>
                <form @submit="onSubmit">
                    <div class="d-flex flex-row justify-content-center">
                    <div class="col-xs mb-4">
                        <label  for="nota1"><strong>Nota 1:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota1" v-model="nota1">
                    </div>
                    <div class="col-xs ms-5 mb-4">
                        <label  for="nota2"><strong>Nota 2:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota2" v-model="nota2">
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <div class="col-xs">
                        <label  for="nota3"><strong>Nota 3:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota3" v-model="nota3">
                    </div>
                    <div class="col-xs ms-5">
                        <label  for="nota4"><strong>Nota 4:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota4" v-model="nota4">
                    </div>
                </div> 
                <div class="d-flex justify-content-center align-items-center">
                    <button type="submit" class="routerlink routerlinkAsignature mt-4">Ingresar</button>
                </div>
                </form>   
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
import { useIdIngresaNotas } from '../stores/BuscarEstudianteStore'
import { useRegisterAsignatureId } from '../stores/idStore'
import AlumnosDb from '@/table/BaseDatosPruebaAlumnos';
import asignaturaDb from '@/table/BaseDatosPruebaAsignatura';
import { agregarNota } from '@/helper/estudiantes/ingresarNotas';
import { useRouter } from 'vue-router';

const nombre = ref('')
const apellido = ref('')
const asignatura = ref('')
const nota1 = ref()
const nota2 = ref()
const nota3 = ref()
const nota4 = ref()
const router = useRouter();
const idEstudanteStore = useIdIngresaNotas();
const idAsignaturaStore = useRegisterAsignatureId();


for(let i = 0; i < AlumnosDb.length; i++){
    if(idEstudanteStore.idEstudiante == AlumnosDb[i].idAlumno)
    {
        nombre.value = AlumnosDb[i].nombre
        apellido.value = AlumnosDb[i].apellido
    }
}

for(let i = 0; i < asignaturaDb.length; i++){
    if(idAsignaturaStore.idAsignatura == asignaturaDb[i].idAsignatura)
    {
        asignatura.value = asignaturaDb[i].asignatura;
    }
}

const onSubmit = () => {
    agregarNota(idEstudanteStore.idEstudiante,idAsignaturaStore.idAsignatura, nota1.value, nota2.value, nota3.value, nota4.value)
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