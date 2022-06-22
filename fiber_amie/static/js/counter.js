const App = {
    data() {
        return {
            showMenu: false,
            count: '',
            counters: [],
            counter: '',
            name: '',
            csrf_token: '',
            
        }
    },
    mounted() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
        this.getCounters()
    },
    delimiters: ['[[',']]'],
    methods: {
        countUp (counter) {

            this.counter.count += 1;
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/counters/${this.counter.id}/`,
                data: {
                    count: this.counter.count,
                }
            }).then(this.getCounter(counter))
            .catch(error => console.log(error))
        },
        countDown (counter) {
            this.counter.count -= 1
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/counters/${this.counter.id}/`,
                data: {
                    count: this.counter.count,
                }
            }).then(this.getCounter(counter))
            .catch(error => console.log(error))
        },
        reset (counter) {
            this.counter.count = 0
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/counters/${this.counter.id}/`,
                data: {
                    count: 0,
                }
            }).then(this.getCounter(counter))
            .catch(error => console.log(error))
        },
        getCounters () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: '/counters/',
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
                url: '/counters/',
                data: {
                    name: this.name,
                    count: this.count
                }
            }).then(this.getCounters())
            .catch(error => console.log(error))
        },
        getCounter (counter) {
            this.counter = counter
        },
        deleteCounter (counter) {
            counter = this.counter
            axios.delete(`/counters/${this.counter.id}/`, {
                headers: {'X-CSRFToken': this.csrf_token },
                auth: { username: 'username',
                        password: 'password'
                    }
            })
            .then(res => {
                this.getCounters()
                console.log(res.counters)
            }).catch(error => console.log(error.message))
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')