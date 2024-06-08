
import { NotaDb } from "@/table/BaseDatosPruebaCalificaciones";

export const agregarNota = (idEstudiante, idAsignatura, nota1, nota2, nota3, nota4) =>{
    if(NotaDb.has(idEstudiante)){
        const estudiante = NotaDb.get(idEstudiante);
        if(nota1 !== undefined){
            estudiante.nota1 = parseInt(nota1)
        }
        if(nota2 !== undefined){
            estudiante.nota2 = parseInt(nota2)
        }
        if(nota3 !== undefined){
            estudiante.nota3 = parseInt(nota3)
        }
        if(nota4 !== undefined){
            estudiante.nota4 = parseInt(nota4)
        }
        NotaDb.set(idEstudiante, estudiante)
    }
    else
    {       
        if(nota1 === undefined){
            nota1 = 0
        }
        if(nota2 === undefined){
            nota2 = 0
        }
        if(nota3 === undefined){
            nota3 = 0
        }
        if(nota4 === undefined){
            nota4 = 0
        }
        const notasObj = {
            "idAsignatura": idAsignatura,
            "nota1": parseInt(nota1),
            "nota2": parseInt(nota2),
            "nota3": parseInt(nota3),
            "nota4": parseInt(nota4)
        };
        NotaDb.set(idEstudiante, notasObj);
    }

    
}


