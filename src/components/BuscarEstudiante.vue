<template>
    <div class="container d-flex  justify-content-center align-items-center flex-column ">
    <div class="row g-4 containerIngresoNotas flex-row">
        <form @submit="onSubmit" @submit.prevent="handleSubmit">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h3><strong>Informacion del estudiante</strong></h3>
                <div class="col-xs">
                    <label  for="id"><strong>ID del estudiante</strong></label>
                    <input type="text" class="form-control border border-dark mt-2" placeholder="ID estudiante"  id="id" v-model="idStudent">
                </div>
                <div>
                    <button class="routerlink routerlinkAsignature ms-4" type="submit">Buscar</button>
                    <button @click="goToTeacher" class="routerlink routerlinkAsignature ms-4">Regresar</button>
                </div>

            </div>
        </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const idStudent = ref('');

const goToTeacher = () => {
  router.push({ name: 'teacher' });
};

const onSubmit = () => {
    /* Aca tenemos que crear una validacion para saber si el id del estudante existe o no */
    router.push({ name: 'califications' });
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
