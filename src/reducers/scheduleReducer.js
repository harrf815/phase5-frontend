
export default ( state = [], action) => {
    switch (action.type){
        case 'POST_SCHEDULE':
            return [...state, action.payload]
        case 'FETCH_SCHEDULE':
            return action.payload 
        default:
            return state 
    }
}