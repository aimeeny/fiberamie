

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
            search: '',
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
    created() {
        this.getProjects()
    },
    delimiters: ['[[',']]'],
    methods: {
        getProjects () {
            axios({
                method: 'get',
                headers: { Accept: 'application/json'},
                url: `/projects_drf/?search=${this.search}`,
                auth: {
                    username: 'username',
                    password: 'password'
                },
            }).then(res => {
                console.log(res.data)
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
                url: '/projects_drf/',
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
            axios.delete(`/projects_drf/${project.id}/`, {
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
        },
        closeDetails (project) {
            this.project = project
            project.showDetails = false
        },
        saveName (project) {
            // this.project = project
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    pattern_name: this.project.pattern_name,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveDesigner (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    designer: this.project.designer,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveNeedles (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    needles: this.project.needles,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveHook (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    hook: this.project.hook,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveGauge (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    gauge: this.project.gauge,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveYarn (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    yarn: this.project.yarn,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveColorway (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    colorway: this.project.colorway,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveYardage (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    total_yardage: this.project.total_yardage,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        saveNotes (project) {
            axios({
                method: 'patch',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token, 'Content-Type': 'multipart/form-data' },
                url: `/projects_drf/${this.project.id}/`,
                data: {
                    notes: this.project.notes,
                }
            }).then(res => {
                this.project.edit = false
                this.getProjectDetail(project) 
            }).catch(error => console.log(error))
        },
        submitSearch () {
            console.log(this.search)
            this.getProjects()
        },
    },
}
const app = Vue.createApp(App)
app.mount('#app')