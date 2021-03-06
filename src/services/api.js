
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
            Authorization: `Bearer ${localStorage.token}`,
        }
    })
    .then(res => res.json())
}

const getPost = () => {
    return fetch(`${URL}/posts`).then(res => res.json())
        
}

const addPost = (newPost) => {
    return fetch (`${URL}/posts`, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(res => res.json())
}

const getBusiness = () => {
    return fetch(`${URL}/businesses`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        }
    })
    .then(res => res.json())
}

const addBusiness = (newBusiness) => {
    return fetch (`${URL}/businesses`, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.token}`,

        },
        body: JSON.stringify(newBusiness)
    })
    .then(res => res.json())
}

const getSchedule = () => {
    return fetch(`${URL}/schedules`).then(res => res.json())
}

const addSchedule = (newShift) => {
    return fetch (`${URL}/schedules`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newShift)
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
    },
    posts: {
        addPost, 
        getPost,
    },
    business: {
        addBusiness,
        getBusiness,
    },
    schedule: {
        addSchedule, 
        getSchedule,
    }
}