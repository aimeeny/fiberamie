const App = {
    data() {
        return {
            showMenu: false,
            count: 0,
            counters: [],
            counter: '',
            name: '',
        }
    },
    delimiters: ['[[',']]'],
    methods: {
        countUp () {
            this.count += 1;
        },
        countDown () {
            this.count -= 1
        },
        reset () {
            this.count = 0
        },
        geCounters () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: 'http://127.0.0.1:8000/counters/',
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }).then(res => {
                console.log(res.data)
                this.counters = res.data
            }).catch(error => console.log(error.message))
        },
        addCounter () {
            axios({
                method: 'post',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: 'http://127.0.0.1:8000/counters/',
                data: {
                    name: this.name,
                    count: this.count
                }
            }).then(res => this.getCounters())
            .catch(error => console.log(error))
        },
    },
}
const app = Vue.createApp(App)
app.mount('#app')