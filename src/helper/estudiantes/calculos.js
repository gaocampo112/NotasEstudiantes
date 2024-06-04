export const calcularNotas = (nota1, nota2, nota3, nota4) => {
    const promedio = (nota1 + nota2 + nota3 + nota4)/4;
    return Math.round(promedio * 10) / 10;
}