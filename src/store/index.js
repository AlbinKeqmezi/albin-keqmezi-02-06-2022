import { createStore } from 'vuex';

import studentsModule from './modules/students/index.js';
import AuthenticationModule from './modules/authentication/index.js';

const store = createStore({
    modules: {
        students: studentsModule,
        authentication: AuthenticationModule,
    },
    state() {
        return {

        }
    }
})

export default store;