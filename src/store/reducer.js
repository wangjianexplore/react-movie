const defaultState = {
    test: 1,
    cities: {},
    letter: [],
    initialPage: 0,
    sellPrice: 39
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
    return state;
}