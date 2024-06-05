<template>
 <div class="containerLogin">
        <h1 class="title">SIGMA</h1>
        <form class="sinbgInForm">
            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-2">
                <input type="email" id="form2Example1" class="form-control" v-model="usuario"/>
                <label class="form-label" for="form2Example1">Usuario</label>
            </div>

            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-2">
                <input type="password" id="form2Example2" class="form-control" v-model="clave" />
                <label class="form-label" for="form2Example2">Contraseña</label>
            </div>
            <!-- Submit button -->
            <RouterLink to="/student" class="routerlink">Ingresar</RouterLink>
        </form>
    </div>
</template>

<script setup>


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