
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

export const postBusiness = data => {
    return {
        type: 'POST_BUSINESS',
        payload: data
    }
}

export const fetchBusiness = data => {
    return {
        type: 'FETCH_BUSINESS',
        payload: data
    }
}

export const postSchedule = data => {
    return {
        type: 'POST_SCHEDULE',
        payload: data
    }
}

export const fetchSchedule = data => {
    return {
        type: 'FETCH_SCHEDULE',
        payload: data
    }
}