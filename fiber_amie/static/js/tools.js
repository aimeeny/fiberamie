

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
        
    },
}
const app = Vue.createApp(App)
app.mount('#app')