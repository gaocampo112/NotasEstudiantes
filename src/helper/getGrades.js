import { gradeStudenDb } from "@/table/DataBaseTestGrades";

export const getGrades = (studenId) => {
    if (gradeStudenDb.has(studenId)) {
        return gradeStudenDb.get(studenId);
    }
}