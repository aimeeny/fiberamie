const App = {
    data() {
        return {
            title: 'Hello!',
        }
    },
    delimiters: ['[[',']]'],
    methods: {
        
    },
}
const app = Vue.createApp(App)
app.mount('#app')