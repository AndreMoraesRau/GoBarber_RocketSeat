import axios from "axios";

const api = axios.create({
    // ou por IP: 'http://10.0.2.2:3333'
    // ou por localhost: 'http://localhost:3333' - precisa rodar o código "adb reverse tcp:3333 tcp:3333"
    baseURL: 'http://10.0.2.2:3333'
})

export default api;