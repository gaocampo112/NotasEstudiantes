<template>
<div class="contenedor">
    <div>
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div class="card infoPersona align-items-center"> 
                <img src="../image/usuario.png" height="100" width="100" />
                <div class=" image d-flex flex-column justify-content-center  "> 
                    <span class="name mt-3"><strong>ID: </strong>{{ id }}</span> 
                    <span class="name mt-3"><strong>Nombre: </strong>{{ nombre }}</span> 
                    <span class="name mt-3"><strong>Apellido: </strong>{{ apellido }}</span> 
                    <span class="name mt-3"><strong>Edad: </strong>{{ edad }}</span>       
                </div> 
                <RouterLink to="/" class="routerlink">Salir</RouterLink>
            </div>
        </div>
    </div>
    <table class="table notas">
        <div>
            
        </div>
    <thead>
        <tr>
        <th scope="col">Asignaturas</th>
        <th scope="col">Nota 1</th>
        <th scope="col">Nota 2</th>
        <th scope="col">Nota 3</th>
        <th scope="col">Nota 4</th>
        <th scope="col">Final</th>
        </tr>
    </thead> 
    <tbody>
        <tr>
        <th scope="row">Biologia</th>
        <td>{{ biologia.nota1 }}</td>
        <td>{{ biologia.nota2 }}</td>
        <td>{{ biologia.nota3 }}</td>
        <td>{{ biologia.nota4 }}</td>
        <td>{{ biologia.final }}</td>
        </tr>
        <tr>
        <th scope="row">Ficica</th>
        <td>{{ fisica.nota1 }}</td>
        <td>{{ fisica.nota2 }}</td>
        <td>{{ fisica.nota3 }}</td>
        <td>{{ fisica.nota4 }}</td>
        <td>{{ fisica.final }}</td>
        </tr>
        <tr>
        <th scope="row">Quimica</th>
        <td>{{ quimica.nota1 }}</td>
        <td>{{ quimica.nota2 }}</td>
        <td>{{ quimica.nota3 }}</td>
        <td>{{ quimica.nota4 }}</td>
        <td>{{ quimica.final }}</td>
        </tr>
        <tr>
        <th scope="row">Economia</th>
        <td>{{ economia.nota1 }}</td>
        <td>{{ economia.nota2 }}</td>
        <td>{{ economia.nota3 }}</td>
        <td>{{ economia.nota4 }}</td>
        <td>{{ economia.final }}</td>
        </tr>
        <tr>
        <th scope="row">Artes</th>
        <td>{{ artes.nota1 }}</td>
        <td>{{ artes.nota2 }}</td>
        <td>{{ artes.nota3 }}</td>
        <td>{{ artes.nota4 }}</td>
        <td>{{ artes.final }}</td>
        </tr>
        <tr>
        <th scope="row">Español</th>
        <td>{{ espaniol.nota1 }}</td>
        <td>{{ espaniol.nota2 }}</td>
        <td>{{ espaniol.nota3 }}</td>
        <td>{{ espaniol.nota4 }}</td>
        <td>{{ espaniol.final }}</td>
        </tr>
        <tr>
        <th scope="row">Ingles</th>
        <td>{{ ingles.nota1 }}</td>
        <td>{{ ingles.nota2 }}</td>
        <td>{{ ingles.nota3 }}</td>
        <td>{{ ingles.nota4 }}</td>
        <td>{{ ingles.final }}</td>
        </tr>
        <tr>
        <th scope="row">Matematicas</th>
        <td>{{ matematicas.nota1 }}</td>
        <td>{{ matematicas.nota2 }}</td>
        <td>{{ matematicas.nota3 }}</td>
        <td>{{ matematicas.nota4 }}</td>
        <td>{{ matematicas.final }}</td>
        </tr>
        <tr>
        <th scope="row">Geometria</th>
        <td>{{ geometria.nota1 }}</td>
        <td>{{ geometria.nota2 }}</td>
        <td>{{ geometria.nota3 }}</td>
        <td>{{ geometria.nota4 }}</td>
        <td>{{ geometria.final }}</td>
        </tr>
        <tr>
        <th scope="row">Estadistica</th>
        <td>{{ estadistica.nota1 }}</td>
        <td>{{ estadistica.nota2 }}</td>
        <td>{{ estadistica.nota3 }}</td>
        <td>{{ estadistica.nota4 }}</td>
        <td>{{ estadistica.final }}</td>
        </tr>
        <tr>
        <th scope="row">Filosofia</th>
        <td>{{ filosofia.nota1 }}</td>
        <td>{{ filosofia.nota2 }}</td>
        <td>{{ filosofia.nota3 }}</td>
        <td>{{ filosofia.nota4 }}</td>
        <td>{{ filosofia.final }}</td>
        </tr>
        <tr>
        <th scope="row">Informatica</th>
        <td>{{ informatica.nota1 }}</td>
        <td>{{ informatica.nota2 }}</td>
        <td>{{ informatica.nota3 }}</td>
        <td>{{ informatica.nota4 }}</td>
        <td>{{ informatica.final }}</td>
        </tr>


    </tbody>
    </table>
</div>
<router-view></router-view>
</template>



<script setup>
import {calcularNotas} from "../helper/estudiantes/calculos.js"
import { ref, computed } from 'vue'
import AlumnosDb from '@/table/BaseDatosPruebaAlumnos';
import {uselogin} from '../stores/loginStore';
import { obtenerNotas } from "@/helper/estudiantes/obtenerNotas.js";

const useStore = uselogin()
const id = ref("")
const nombre = ref("")
const apellido = ref("")
const edad = ref("")
const mostrarNotas = obtenerNotas(useStore.username);
let i = 0

while(AlumnosDb[i].idAlumno != useStore.username)
{
    i++
}
id.value = AlumnosDb[i].idAlumno
nombre.value = AlumnosDb[i].nombre
apellido.value = AlumnosDb[i].apellido
edad.value = AlumnosDb[i].edad
i=0

let biologia;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 1) {
    biologia = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(biologia.nota1.value, biologia.nota2.value, biologia.nota3.value, biologia.nota4.value))
    };
} else {
    biologia = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let fisica;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 2) {
    fisica = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(fisica.nota1.value, fisica.nota2.value, fisica.nota3.value, fisica.nota4.value))
    };
} else {
    fisica = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let quimica;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 3) {
    quimica = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(quimica.nota1.value, quimica.nota2.value, quimica.nota3.value, quimica.nota4.value))
    };
} else {
    quimica = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let economia;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 4) {
    economia = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(economia.nota1.value, economia.nota2.value, economia.nota3.value, economia.nota4.value))
    };
} else {
    economia = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let artes;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 5) {
    artes = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(artes.nota1.value, artes.nota2.value, artes.nota3.value, artes.nota4.value))
    };
} else {
    artes = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let espaniol;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 6) {
    espaniol = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(espaniol.nota1.value, espaniol.nota2.value, espaniol.nota3.value, espaniol.nota4.value))
    };
} else {
    espaniol = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let ingles;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 7) {
    ingles = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(ingles.nota1.value, ingles.nota2.value, ingles.nota3.value, ingles.nota4.value))
    };
} else {
    ingles = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let matematicas;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 8) {
    matematicas = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(matematicas.nota1.value, matematicas.nota2.value, matematicas.nota3.value, matematicas.nota4.value))
    };
} else {
    matematicas = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let geometria;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 9) {
    geometria = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(geometria.nota1.value, geometria.nota2.value, geometria.nota3.value, geometria.nota4.value))
    };
} else {
    geometria = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let estadistica;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 10) {
    estadistica = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(estadistica.nota1.value, estadistica.nota2.value, estadistica.nota3.value, estadistica.nota4.value))
    };
} else {
    estadistica = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let filosofia;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 11) {
    filosofia = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(filosofia.nota1.value, filosofia.nota2.value, filosofia.nota3.value, filosofia.nota4.value))
    };
} else {
    filosofia = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}

let informatica;
if (mostrarNotas !== undefined && mostrarNotas.idAsignatura === 12) {
    informatica = {
        nota1: ref(mostrarNotas.nota1),
        nota2: ref(mostrarNotas.nota2),
        nota3: ref(mostrarNotas.nota3),
        nota4: ref(mostrarNotas.nota4),
        final: computed(() => calcularNotas(informatica.nota1.value, informatica.nota2.value, informatica.nota3.value, informatica.nota4.value))
    };
} else {
    informatica = {
        nota1: ref(0),
        nota2: ref(0),
        nota3: ref(0),
        nota4: ref(0),
        final: ref(0)
    };
}


</script>



<style>
    .contenedor{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .notas{
        margin-top: 40px;
        width: 50vw;   
        border: 2px solid black;
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.37);
    }
</style>