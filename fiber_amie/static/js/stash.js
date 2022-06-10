

const App = {
    data() {
        return {
            result: '',
            yarns: [],
            yarn: '',
            users: [],
            user: '',
            csrf_token: '',
            name: '',
            fiber_type: '',
            colorway: '',
            skeins: '',
            yardage: '',
            weight: '',
            image: '',
            notes: '',
            showModal: false,
            showMenu: false,
            showDetails: false,
            user: '',
            username: '',
            
        }
    },
    mounted() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
        // this.csrf_token = 'GRnZNdvT9lGhVKU18oRUFStJC6MFuQ9DVfhiIvJwXlzNHxedYo2DAgsY5nGrHWsu'
        this.getStash()
    },
    delimiters: ['[[',']]'],
    methods: {
        getStash () {
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
        },
        addYarn () {
            // console.log(this.image)
            // const form_data = new FormData() 
            // form_data.append('image', this.image, this.image.name)
            axios({
                method: 'post',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: 'http://127.0.0.1:8000/yarns/',
                data: {
                    name: this.name,
                    fiber_type: this.fiber_type,
                    colorway: this.colorway,
                    skeins: this.skeins,
                    yardage: this.yardage,
                    weight: this.weight,
                    notes: this.notes,
                    image: this.image,
                }
            }).then(res => this.getStash())
            .catch(error => console.log(error))
            
        },
        deleteYarn (yarn) {
            axios.delete(`http://127.0.0.1:8000/yarns/${yarn.id}/`, {
                headers: {'X-CSRFToken': this.csrf_token },
                auth: { username: 'username',
                        password: 'password'
                    }
            })
            .then(res => {
                this.getStash()
                console.log(res.yarns)
            }).catch(error => console.log(error.message))
        },
        imageSelected (event) {
            this.image = event.target.files[0]
        },
        getUsers () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: 'http://127.0.0.1:8000/users/',
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }).then(res => {
                console.log(res.data)
                this.users = res.data
            }).catch(error => console.log(error.message))
        },
        getYarnDetail (yarn) {
            axios({
                method: 'get',
                headers: { Accept: 'application/json' },
                url:`http://127.0.0.1:8000/yarns/${yarn.id}/`,
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }).then(res => {
                console.log(res.data)
                this.yarn = res.data
            }).catch(error => console.log(error.message))
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')