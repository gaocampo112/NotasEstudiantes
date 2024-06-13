export const calculateGrade = (grade1, grade2, grade3, grade4) => {
    const total = (grade1 + grade2 + grade3 + grade4)/4;
    return Math.round(total * 10) / 10;
}