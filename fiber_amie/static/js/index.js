const App = {
    data() {
        return {
            showSignUp: false,
            showLogIn: false,
        }
    },
    delimiters: ['[[',']]'],
    methods: {
        goHome () {
            window.location.href = '/home'
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')