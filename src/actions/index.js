
export const Auth = user => {
    return {
        type: 'AUTH',
        payload: user 
    }
}

export const Content = data => {
    return {
        type: 'CONTENT',
        payload: data
    }
}

export const fetchContent = data => {
    return {
        type: 'FETCH_CONTENT',
        payload: data
    }
}

