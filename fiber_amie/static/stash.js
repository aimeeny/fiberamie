

const App = {
    data() {
        return {
            result: '',
            yarns: [],
            yarn: '',
            csrf_token: 'GRnZNdvT9lGhVKU18oRUFStJC6MFuQ9DVfhiIvJwXlzNHxedYo2DAgsY5nGrHWsu',
            axios: '',
            name: '',
            fiber_type: '',
            colorway: '',
            skeins: '',
            yardage: '',
            weight: '',
            image: '',
            notes: '',
            
        }
    },
    mounted() {
        this.getStash()
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
        // this.csrf_token = 'GRnZNdvT9lGhVKU18oRUFStJC6MFuQ9DVfhiIvJwXlzNHxedYo2DAgsY5nGrHWsu',
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
                // console.log(res.data)
                this.yarns = res.data
            }).catch(error => console.log(error.message))
        },
        addYarn () {
            axios({
                method: 'post',
                headers: { Accept: 'application/json', 'X-CSRFToken': this.csrf_token },
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
            })
        },
        deleteYarn (yarn) {
            // axios.delete({
            //     url: `http://127.0.0.1:8000/yarns/${index}`,
            //     headers: {'X-Requested-With': 'XMLHttpRequest',
            //     'X-CSRFToken': this.csrf_token},
            // }).catch(error => console.log(error))
            // }
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
        imageSelected(event) {
            this.selectedImage = event.target.files[0]
        },
        onUpload() {
            const fd = new FormData()
            fd.append('image', this.selectedImage, this.selectedImage.name)
            axios.post('http://127.0.0.1:8000/yarns/')
            .then(res =>
                console.log(res))
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')