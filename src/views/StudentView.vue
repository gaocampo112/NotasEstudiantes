<template>
<div class="container">
    <div>
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
            <div class="card infoPerson align-items-center"> 
                <img src="../image/usuario.png" height="100" width="100" />
                <div class=" image d-flex flex-column justify-content-center  "> 
                    <span class="name mt-3"><strong>ID: </strong>{{ id }}</span> 
                    <span class="name mt-3"><strong>Name: </strong>{{ name }}</span> 
                    <span class="name mt-3"><strong>Last Name: </strong>{{ lastName }}</span> 
                    <span class="name mt-3"><strong>Age: </strong>{{ edad }}</span>       
                </div> 
                <RouterLink to="/" class="routerlink">Log Out</RouterLink>
            </div>
        </div>
    </div>
    <table class="table grades">
        <div>
            
        </div>
    <thead>
        <tr>
        <th scope="col">Subject</th>
        <th scope="col">Calification 1</th>
        <th scope="col">Calification 2</th>
        <th scope="col">Calification 3</th>
        <th scope="col">Calification 4</th>
        <th scope="col">Final</th>
        </tr>
    </thead> 
    <tbody>
        <tr>
        <th scope="row">Biology</th>
        <td>{{ biology.grade1 }}</td>
        <td>{{ biology.grade2 }}</td>
        <td>{{ biology.grade3 }}</td>
        <td>{{ biology.grade4 }}</td>
        <td>{{ biology.final }}</td>
        </tr>
        <tr>
        <th scope="row">Physics</th>
        <td>{{ physics.grade1 }}</td>
        <td>{{ physics.grade2 }}</td>
        <td>{{ physics.grade3 }}</td>
        <td>{{ physics.grade4 }}</td>
        <td>{{ physics.final }}</td>
        </tr>
        <tr>
        <th scope="row">Chemistry</th>
        <td>{{ chemistry.grade1 }}</td>
        <td>{{ chemistry.grade2 }}</td>
        <td>{{ chemistry.grade3 }}</td>
        <td>{{ chemistry.grade4 }}</td>
        <td>{{ chemistry.final }}</td>
        </tr>
        <tr>
        <th scope="row">Economy</th>
        <td>{{ economy.grade1 }}</td>
        <td>{{ economy.grade2 }}</td>
        <td>{{ economy.grade3 }}</td>
        <td>{{ economy.grade4 }}</td>
        <td>{{ economy.final }}</td>
        </tr>
        <tr>
        <th scope="row">Arts</th>
        <td>{{ arts.grade1 }}</td>
        <td>{{ arts.grade2 }}</td>
        <td>{{ arts.grade3 }}</td>
        <td>{{ arts.grade4 }}</td>
        <td>{{ arts.final }}</td>
        </tr>
        <tr>
        <th scope="row">Spanish</th>
        <td>{{ spanish.grade1 }}</td>
        <td>{{ spanish.grade2 }}</td>
        <td>{{ spanish.grade3 }}</td>
        <td>{{ spanish.grade4 }}</td>
        <td>{{ spanish.final }}</td>
        </tr>
        <tr>
        <th scope="row">English</th>
        <td>{{ english.grade1 }}</td>
        <td>{{ english.grade2 }}</td>
        <td>{{ english.grade3 }}</td>
        <td>{{ english.grade4 }}</td>
        <td>{{ english.final }}</td>
        </tr>
        <tr>
        <th scope="row">Math</th>
        <td>{{ math.grade1 }}</td>
        <td>{{ math.grade2 }}</td>
        <td>{{ math.grade3 }}</td>
        <td>{{ math.grade4 }}</td>
        <td>{{ math.final }}</td>
        </tr>
        <tr>
        <th scope="row">Geometry</th>
        <td>{{ geometry.grade1 }}</td>
        <td>{{ geometry.grade2 }}</td>
        <td>{{ geometry.grade3 }}</td>
        <td>{{ geometry.grade4 }}</td>
        <td>{{ geometry.final }}</td>
        </tr>
        <tr>
        <th scope="row">Statistics</th>
        <td>{{ statistics.grade1 }}</td>
        <td>{{ statistics.grade2 }}</td>
        <td>{{ statistics.grade3 }}</td>
        <td>{{ statistics.grade4 }}</td>
        <td>{{ statistics.final }}</td>
        </tr>
        <tr>
        <th scope="row">Philosophy</th>
        <td>{{ philosophy.grade1 }}</td>
        <td>{{ philosophy.grade2 }}</td>
        <td>{{ philosophy.grade3 }}</td>
        <td>{{ philosophy.grade4 }}</td>
        <td>{{ philosophy.final }}</td>
        </tr>
        <tr>
        <th scope="row">Technology</th>
        <td>{{ technology.grade1 }}</td>
        <td>{{ technology.grade2 }}</td>
        <td>{{ technology.grade3 }}</td>
        <td>{{ technology.grade4 }}</td>
        <td>{{ technology.final }}</td>
        </tr>


    </tbody>
    </table>
</div>
<router-view></router-view>
</template>



<script setup>
import {calculateGrade} from "../helper/CalculateStudentsgrades.js"
import { ref, computed } from 'vue'
import StudentDb from '@/table/DataBaseTestStudent.js'
import {useLogIn} from '../stores/loginStore';
import { getGrades } from "@/helper/getGrades.js";

const useStore = useLogIn()
const id = ref("")
const name = ref("")
const lastName = ref("")
const edad = ref("")
const showGrade = getGrades(useStore.username);
let i = 0

while(StudentDb[i].idStudent != useStore.username)
{
    i++
}
id.value = StudentDb[i].idStudent
name.value = StudentDb[i].name
lastName.value = StudentDb[i].lastName
edad.value = StudentDb[i].age
i=0

let biology;
if (showGrade !== undefined && showGrade.idAsignatura === 1) {
    biology = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(biology.grade1.value, biology.grade2.value, biology.grade3.value, biology.grade4.value))
    };
} else {
    biology = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let physics;
if (showGrade !== undefined && showGrade.idAsignatura === 2) {
    physics = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(physics.grade1.value, physics.grade2.value, physics.grade3.value, physics.grade4.value))
    };
} else {
    physics = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let chemistry;
if (showGrade !== undefined && showGrade.idAsignatura === 3) {
    chemistry = {
        garde1: ref(showGrade.garde1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(chemistry.garde1.value, chemistry.grade2.value, chemistry.grade3.value, chemistry.grade4.value))
    };
} else {
    chemistry = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let economy;
if (showGrade !== undefined && showGrade.idAsignatura === 4) {
    economy = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(economy.grade1.value, economy.grade2.value, economy.grade3.value, economy.grade4.value))
    };
} else {
    economy = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let arts;
if (showGrade !== undefined && showGrade.idAsignatura === 5) {
    arts = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(arts.grade1.value, arts.grade2.value, arts.grade3.value, arts.grade4.value))
    };
} else {
    arts = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let spanish;
if (showGrade !== undefined && showGrade.idAsignatura === 6) {
    spanish = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(spanish.grade1.value, spanish.grade2.value, spanish.grade3.value, spanish.grade4.value))
    };
} else {
    spanish = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let english;
if (showGrade !== undefined && showGrade.idAsignatura === 7) {
    english = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(english.grade1.value, english.grade2.value, english.grade3.value, english.grade4.value))
    };
} else {
    english = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let math;
if (showGrade !== undefined && showGrade.idAsignatura === 8) {
    math = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(math.grade1.value, math.grade2.value, math.grade3.value, math.grade4.value))
    };
} else {
    math = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let geometry;
if (showGrade !== undefined && showGrade.idAsignatura === 9) {
    geometry = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(geometry.grade1.value, geometry.grade2.value, geometry.grade3.value, geometry.grade4.value))
    };
} else {
    geometry = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let statistics;
if (showGrade !== undefined && showGrade.idAsignatura === 10) {
    statistics = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(statistics.grade1.value, statistics.grade2.value, statistics.grade3.value, statistics.grade4.value))
    };
} else {
    statistics = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let philosophy;
if (showGrade !== undefined && showGrade.idAsignatura === 11) {
    philosophy = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(philosophy.grade1.value, philosophy.grade2.value, philosophy.grade3.value, philosophy.grade4.value))
    };
} else {
    philosophy = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}

let technology;
if (showGrade !== undefined && showGrade.idAsignatura === 12) {
    technology = {
        grade1: ref(showGrade.grade1),
        grade2: ref(showGrade.grade2),
        grade3: ref(showGrade.grade3),
        grade4: ref(showGrade.grade4),
        final: computed(() => calculateGrade(technology.grade1.value, technology.grade2.value, technology.grade3.value, technology.grade4.value))
    };
} else {
    technology = {
        grade1: ref(0),
        grade2: ref(0),
        grade3: ref(0),
        grade4: ref(0),
        final: ref(0)
    };
}
</script>



<style>
    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .grades{
        margin-top: 40px;
        width: 50vw;   
        border: 2px solid black;
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.37);
    }
</style>