import axios from "axios"

const API_URL = ''

export const getStudentDb  = async () => {
    const answer = await axios.get(API_URL);
    const neAnswer = answer.data.;
    return newAnswer
}