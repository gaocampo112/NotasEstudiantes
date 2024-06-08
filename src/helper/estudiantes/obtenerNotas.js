import { NotaDb } from "@/table/BaseDatosPruebaCalificaciones";

export const obtenerNotas = (idEstudiante) => {
    if (NotaDb.has(idEstudiante)) {
        return NotaDb.get(idEstudiante);
    }
}