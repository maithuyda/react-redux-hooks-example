//Reducer for character information

//Initialize State
const initState = {
    name: "Sunny",
    job: "ninja",
    age: 16
}

//Define Actions
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        //Change character name
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'CHANGE_JOB':
            return {
                ...state,
                job: action.payload
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }
}

export default counterReducer;