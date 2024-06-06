<template>
            <div class="container d-flex  justify-content-center align-items-center flex-column ">
            <div class="row g-4 containerIngresoNotas flex-row">
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Asignatura: {{ asignatura }}</strong></h5>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Nombre: {{ nombre }} {{ apellido }}</strong></h5>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <h5><strong>Minima nota '0.0' - Maxima nota '5.0'</strong></h5>
                </div>
                <form>
                    <div class="d-flex flex-row justify-content-center">
                    <div class="col-xs mb-4">
                        <label  for="nota1"><strong>Nota 1:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota1">
                    </div>
                    <div class="col-xs ms-5 mb-4">
                        <label  for="nota2"><strong>Nota 2:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota2">
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <div class="col-xs">
                        <label  for="nota3"><strong>Nota 3:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota3">
                    </div>
                    <div class="col-xs ms-5">
                        <label  for="nota4"><strong>Nota 4:</strong></label>
                        <input type="text" class="form-control border border-dark mt-2" placeholder="Ejemplo: 3.6"  id="nota4">
                    </div>
                </div> 
                </form>   
            </div>
            <RouterLink to="/teacher" class="routerlink mt-3">Ingresar</RouterLink>
        </div>
</template>

<script setup>
import { ref } from 'vue';
const nombre = ref('')
const apellido = ref('')
const asignatura = ref('')
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