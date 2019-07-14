const defaultState = {
    test: 1,
    cities: {},
    letter: [],
    initialPage: 0,
    sellPrice: 39,
    orderMovieInfo: {},
    orderMovieList: []
}

export default (state = defaultState, action) => {
    if (action.type === 'cities_data') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cities = action.cities;
        newState.letter = action.letter;
        return newState;
    }
    if (action.type === 'initialPage') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.initialPage = action.initialPage;
        return newState;
    }
    if (action.type === 'orderMovieInfo') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.orderMovieInfo = action.orderMovieInfo;
        return newState;
    }
    if (action.type === 'orderMovieList') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.orderMovieList.push(action.orderMovieInfo);
        return newState;
    }
    if (action.type === 'deleteMovieOrder') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.orderMovieList.splice(action.index, 1);
        return newState;
    }
    return state;
}