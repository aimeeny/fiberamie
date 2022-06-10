const App = {
    data() {
        return {
            showMenu: false,
        }
    },
    delimiters: ['[[',']]'],
    methods: {
        
    },
}
const app = Vue.createApp(App)
app.mount('#app')