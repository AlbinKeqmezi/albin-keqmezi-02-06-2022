export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.autoLogout = false;
    },
    autoLogout(state) {
        state.autoLogout = true;
    },
    activeStudent(state, payload) {
        state.activeStudent = payload;
    }
};