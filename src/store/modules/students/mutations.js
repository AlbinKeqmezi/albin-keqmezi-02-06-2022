export default {
    addStudent(state, payload) {
        state.students.push(payload);
    },
    allStudents(state, payload) {
        state.students = payload;
    },
}