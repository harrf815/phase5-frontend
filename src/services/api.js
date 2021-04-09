
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1'

const token = () => localStorage.getItem('token')

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

const signup = data => {
    return fetch(`${URL}/signup`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({
            user: data
        })
    })
    .then(res => res.json())
}

const login = data => {
    return fetch (`${URL}/login`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

const getCurrentUser = () => {
    return fetch(`${URL}/getuser`,{
        method: 'GET',
        headers: {
            "Content-Type": "appliaction/json",
            Authorization: `Bearer ${localStorage.token}`,
        }
    })
    .then(res => res.json())
}

export default axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})

export const api = {
    auth: {
        signup,
        login,
        getCurrentUser,
    }
}