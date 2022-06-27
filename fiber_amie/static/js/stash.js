

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
            yarn_weight: '',
            image: '',
            notes: '',
            showModal: false,
            showMenu: false,
            showDetails: false,
            user: '',
            username: '',
            search: '',
            
        }
    },
    mounted() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
        this.getStash()
    },
    created() {
        this.getStash()
    },
    delimiters: ['[[',']]'],
    methods: {
        getStash () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: `/yarns/?search=${this.search}`,
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
            const form_data = new FormData() 
            form_data.append('image', this.image, this.image.name)
            axios({
                method: 'post',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: 'https://fiberamie.herokuapp.com/yarns/',
                data: {
                    name: this.name,
                    fiber_type: this.fiber_type,
                    colorway: this.colorway,
                    skeins: this.skeins,
                    yardage: this.yardage,
                    yarn_weight: this.yarn_weight,
                    notes: this.notes,
                    image: this.image,
                }
            }).then(res => this.getStash())
            .catch(error => {
                console.log(error)
                this.getStash()
            })
        },
        deleteYarn (yarn) {
            axios.delete(`/yarns/${yarn.id}/`, {
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
                url: '/users/',
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
            this.yarn = yarn
            yarn.showDetails = true
        },
        closeDetails (yarn) {
            this.yarn = yarn
            yarn.showDetails = false
        },
        // EDIT SECTION 
        saveName (yarn) {
            this.yarn = yarn
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/yarns/${yarn.id}/`,
                data: {
                    name: this.name,
                }
            }).then(res => this.getYarnDetail())
            .catch(error => console.log(error))
        },
        saveColorway (yarn) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/yarns/${this.yarn.id}/`,
                data: {
                    colorway: this.yarn.colorway,
                }
            }).then(res => {
                this.yarn.edit = false
                this.getYarnDetail(yarn) 
            }).catch(error => console.log(error))
        },
        saveFiberType (yarn) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/yarns/${this.yarn.id}/`,
                data: {
                    fiber_type: this.yarn.fiber_type,
                }
            }).then(res => {
                this.yarn.edit = false
                this.getYarnDetail(yarn) 
            }).catch(error => console.log(error))
        },
        saveSkeins (yarn) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/yarns/${this.yarn.id}/`,
                data: {
                    skeins: this.yarn.skeins,
                }
            }).then(res => {
                this.yarn.edit = false
                this.getYarnDetail(yarn) 
            }).catch(error => console.log(error))
        },
        saveYardage (yarn) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/yarns/${this.yarn.id}/`,
                data: {
                    yardage: this.yarn.yardage,
                }
            }).then(res => {
                this.yarn.edit = false
                this.getYarnDetail(yarn) 
            }).catch(error => console.log(error))
        },
        saveYarnWeight (yarn) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/yarns/${this.yarn.id}/`,
                data: {
                    weight: this.yarn.weight,
                }
            }).then(res => {
                this.yarn.edit = false
                this.getYarnDetail(yarn) 
            }).catch(error => console.log(error))
        },
        saveNotes (yarn) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/yarns/${this.yarn.id}/`,
                data: {
                    notes: this.yarn.notes,
                }
            }).then(res => {
                this.yarn.edit = false
                this.getYarnDetail(yarn) 
            }).catch(error => console.log(error))
        },
        submitSearch () {
            console.log(this.search)
            this.getStash()
        },
    },
}
const app = Vue.createApp(App)
app.mount('#app')