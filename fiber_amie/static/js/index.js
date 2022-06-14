const App = {
    data() {
        return {
            showSignUp: false,
            showLogIn: false,
        }
    },
    delimiters: ['[[',']]'],
    methods: {
        
    },
}
const app = Vue.createApp(App)
app.mount('#app')