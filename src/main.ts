import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice'
import PrimeVue from 'primevue/config'
import { initializeApp } from "firebase/app";
import ConfirmationService from 'primevue/confirmationservice'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import Tooltip from 'primevue/tooltip'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import InlineMessage from 'primevue/inlinemessage'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import Radio from 'primevue/radiobutton'
import Badge from 'primevue/badge'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyA6KcfnH6Gf8eLn4MyLy9_XJ4UpANykd9c",
  authDomain: "interviews-dc4d8.firebaseapp.com",
  projectId: "interviews-dc4d8",
  storageBucket: "interviews-dc4d8.firebasestorage.app",
  messagingSenderId: "1002817395256",
  appId: "1:1002817395256:web:2e2bff4e6b2a2a84e1a4cd"
};

initializeApp(firebaseConfig);


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.use(ConfirmationService)

app.directive('tooltip', Tooltip)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', InlineMessage)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radio', Radio)
app.component('app-badge', Badge)

app.mount('#app')
