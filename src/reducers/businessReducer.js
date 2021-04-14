

export default (state= {}, action) => {
    switch ( action.type ) {
        case 'POST_BUSINESS':
            return action.payload
        case 'FETCH_BUSINESS':
            return action.payload
        default:
            return state
    }
}