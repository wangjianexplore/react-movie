const defaultState = {
    test: 1,
    cities: {},
    letter: []
}

export default (state = defaultState, action) => {
    if (action.type === 'cities_data') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cities = action.cities;
        newState.letter = action.letter;
        return newState;
    }
    return state;
}