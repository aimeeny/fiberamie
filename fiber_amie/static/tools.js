

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
            
        }
    },
    mounted() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
        this.getNeedles()
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
            console.log(res.data)
            this.size = ''
        }
        
    },
}
const app = Vue.createApp(App)
app.mount('#app')