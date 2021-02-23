// must always have a default state passed
// can name state to users because this is the user reducer? to check ...
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_POSTS':
            return action.payload;
        case 'CREATE_POST':
            return [...posts, action.payload];
        default:
            return posts;
    }
}
