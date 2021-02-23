// must always have a default state passed
// can name state to users if we want - the combineReducer function will namesapce the states and
// only pass the relevant key/object to each consituent reducer
export default (users = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_USERS':
            return users;
        case 'CREATE_USER':
            return users;
        default:
            return users;
    }
}
