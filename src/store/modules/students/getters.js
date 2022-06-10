export default {
    students(state) {
        return state.students;
    },
    student(state, payload) {
        return state.students[payload];
    }
}