

export default ( state= [], action ) => {
    switch ( action.type ) {
        case 'CONTENT':
            return [ action.payload, ...state]
        case 'FETCH_CONTENT':
            return action.payload
        default:
            return state 
    }
}