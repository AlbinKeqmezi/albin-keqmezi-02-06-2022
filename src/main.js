import { createApp, defineAsyncComponent } from 'vue';

import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import StudentsList from './pages/students/StudentsList.vue';
import BaseCard from './components/layouts/BaseCard.vue';
import BaseButton from './components/layouts/BaseButton.vue';

const BaseDialog = defineAsyncComponent(() => import('./components/layouts/BaseDialog.vue'))

const app = createApp(App);

app.component('students-list', StudentsList);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.use(router);
app.use(store);
app.mount('#app');


