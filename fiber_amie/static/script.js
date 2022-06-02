

const App = {
    data() {
        return {
            yarns: [],
            yarn: '',
        }
    },
    mounted() {
        this.getStash()
    },
    delimiters: ['[[',']]'],
    methods: {
        getStash() {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: 'http://127.0.0.1:8000/yarns/',
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }).then(res => {
                console.log(res.data)
                this.yarns = res.data
            }).catch(error => console.log(error.message))
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')