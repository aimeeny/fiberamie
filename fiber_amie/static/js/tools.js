

const App = {
    data() {
        return {
            result: '',
            needles: [],
            needle: '',
            csrf_token: '',
            size: '',
            brand: '',
            length: '',
            showModal: false,
            showModal2: false,
            showMenu: false,
            hooks: [],
            hook: '',
            sizes: { 0:2.00, 1:2.25, 1.5:2.50, 2:2.75, 2.5:3.00, 3:3.25, 4:3.50, 5:3.75, 6:4.00, 7:4.50, 8:5.00, 9:5.50, 10:6.00, 10.5:6.50, 11:8.00, 13:9.00, 15:10.00, 17:12.25, 19:15-16, 35:19, 36:20, 50:25},
            metric: '',
            
        }
    },
    mounted() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
        this.getNeedles()
        this.getHooks()
    },
    delimiters: ['[[',']]'],
    methods: {
        getNeedles () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: 'http://127.0.0.1:8000/needles/',
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }).then(res => {
                console.log(res.data)
                this.needles = res.data
            }).catch(error => console.log(error.message))
        },
        addNeedles () {
            axios({
                method: 'post',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token },
                url: 'http://127.0.0.1:8000/needles/',
                data: {
                    size: this.size,
                    length: this.length,
                    brand: this.brand,
                }
            }).then(res => this.getNeedles())
            .catch(error => console.log(error))
            // console.log(res.data)
            this.size = ''
        },
        getHooks () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: 'http://127.0.0.1:8000/needles/',
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }).then(res => {
                console.log(res.data)
                this.hooks = res.data
            }).catch(error => console.log(error.message))
        },
        addHooks () {
            axios({
                method: 'post',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token },
                url: 'http://127.0.0.1:8000/hooks/',
                data: {
                    size: this.size,
                    brand: this.brand,
                }
            }).then(res => this.getHooks())
            .catch(error => console.log(error))
            console.log(res.data)
            this.size = ''
        },
        deleteHooks (hook) {
            axios.delete(`http://127.0.0.1:8000/hooks/${hook.id}/`, {
                headers: {'X-CSRFToken': this.csrf_token },
                auth: { username: 'username',
                        password: 'password'
                    }
            })
            .then(res => {
                this.getHooks()
                console.log(res.yarns)
            }).catch(error => console.log(error.message))
        },
        deleteNeedles (needle) {
            axios.delete(`http://127.0.0.1:8000/needles/${needle.id}/`, {
                headers: {'X-CSRFToken': this.csrf_token },
                auth: { username: 'username',
                        password: 'password'
                    }
            })
            .then(res => {
                this.getHooks()
                console.log(res.yarns)
            }).catch(error => console.log(error.message))
        },
        getNeedleMetric (size) {
            this.size = size
            metric = this.sizes['size']
            console.log(metric)
        }
        
    },
}
const app = Vue.createApp(App)
app.mount('#app')