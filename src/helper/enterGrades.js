
import { gradeStudenDb } from "@/table/DataBaseTestGrades";
import { gradeSubjectDb } from "@/table/DataBaseTestGrades";

export const enterGrade = (studentId, subjectId, grade1, grade2, grade3, grade4) =>{
    if(gradeStudenDb.has(studentId)){
        const estudiante = gradeStudenDb.get(studentId);
        if(estudiante.get(subjectId))
        {
            const asignatura = gradeSubjectDb(subjectId)
            if(grade1 !== undefined){
                asignatura.grade1 = parseInt(grade1)
            }
            if(grade2 !== undefined){
                asignatura.grade2 = parseInt(grade2)
            }
            if(grade3 !== undefined){
                asignatura.grade3 = parseInt(grade3)
            }
            if(grade4 !== undefined){
                asignatura.grade4 = parseInt(grade4)
            }
            gradeSubjectDb.set(subjectId, asignatura)
        }
        

        gradeStudenDb.set(studentId, estudiante)
    }
    else
    {       
        if(grade1 === undefined){
            grade1 = 0
        }
        if(grade2 === undefined){
            grade2 = 0
        }
        if(grade3 === undefined){
            grade3 = 0
        }
        if(grade4 === undefined){
            grade4 = 0
        }
        const notasObj = {
            "subjectId": subjectId,
            "grade1": parseInt(grade1),
            "grade2": parseInt(grade2),
            "grade3": parseInt(grade3),
            "grade4": parseInt(grade4)
        };
        gradeStudenDb.set(studentId, notasObj);
    }

    
}

