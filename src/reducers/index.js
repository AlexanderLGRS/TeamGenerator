const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload),
            }
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, action.payload],
            }
        case 'DELETE_PLAYER':
            return {
                ...state,
                players: state.players.filter(items => items.id !== action.payload)
            }
        case 'ASSIGN_PLAYER':
            return {
                ...state,
                playersList: [...state.myList[1].playersList, action.payload],
            }
        default:
            return state
    }
}

export default reducer