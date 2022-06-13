

const App = {
    data() {
        return {
            result: '',
            projects: [],
            project: '',
            csrf_token: '',
            pattern_name: '',
            designer: '',
            needles: '',
            hook: '',
            gauge: '',
            yarn: '',
            colorway: '',
            total_yardage: '',
            notes: '',
            image: '',
            showModal: false,
            showMenu: false, 
            showDetails: false,
            user: '',
            username: '',
        }
    },
    mounted() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
        this.getProjects()
    },
    delimiters: ['[[',']]'],
    methods: {
        getProjects () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: 'http://127.0.0.1:8000/projects_drf/',
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }).then(res => {
                this.projects = res.data
            }).catch(error => console.log(error.message))
        },
        addProject () {
            console.log(this.image)
            const form_data = new FormData() 
            form_data.append('image', this.image, this.image.name)
            axios({
                method: 'post',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: 'http://127.0.0.1:8000/projects_drf/',
                data: {
                    pattern_name: this.pattern_name,
                    designer: this.designer, 
                    needles: this.needles,
                    hook: this.hook,
                    gauge: this.gauge,
                    yarn: this.yarn,
                    colorway: this.colorway,
                    total_yardage: this.total_yardage,
                    notes: this.notes,
                    image: this.image,
                }
            }).then(res => this.getProjects())
            .catch(error => console.log(error))
            console.log(res.data) 
        },
        deleteProject (project) {
            axios.delete(`http://127.0.0.1:8000/projects_drf/${project.id}/`, {
                headers: {'X-CSRFToken': this.csrf_token },
                auth: { username: 'username',
                        password: 'password'
                    }
            })
            .then(res => {
                this.getProjects()
                console.log(res.projects)
            }).catch(error => console.log(error.message))
        },
        imageSelected (event) {
            this.image = event.target.files[0]
        },
        getProjectDetail (project) {
            this.project = project
            project.showDetails = true
            // axios({
            //     method: 'get',
            //     headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token },
            //     url:`http://127.0.0.1:8000/projects_drf/${project.id}/`,
            //     auth: {
            //         username: 'username',
            //         password: 'password'
            //     }
            // }).then(res => {
            //     console.log(res.data)
            //     this.project = res.data
            // this.showDetails = true
            // }).catch(error => console.log(error.message))
        },
        closeDetails (project) {
            this.project = project
            project.showDetails = false
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')