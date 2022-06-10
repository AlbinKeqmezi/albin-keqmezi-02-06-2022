import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

import StudentsList from './pages/students/StudentsList.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const StudentRegistration = defineAsyncComponent(() => import('./pages/students/StudentRegistration.vue'));
const DeleteStudent = defineAsyncComponent(() => import('./pages/students/DeleteStudent.vue'));
const EditStudent = defineAsyncComponent(() => import('./pages/students/EditStudent.vue'));
const studentAuthentication = defineAsyncComponent(() => import('./pages/authentication/studentAuthentication.vue'));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/students' },
        {
            path: '/students', component: StudentsList, meta: { requiresAuthentication: true }, children: [
                { path: ':index/delete', component: DeleteStudent, props: true },
                { path: ':index/edit', component: EditStudent, props: true },
            ]
        },
        { path: '/register', component: StudentRegistration },
        { path: '/authentication', component: studentAuthentication, meta: { authenticationNotRequired: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach(function (to, _, next) {
    if (to.meta.requiresAuthentication && !store.getters.isAuthenticated) {
        next('/authentication');
    } else if (to.meta.authenticationNotRequired && store.getters.isAuthenticated) {
        next('/students')
    } else {
        next();
    }
})

export default router