export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case '[TODO] add todo':

            return [...state, action.payload]

        case '[TODO] delete todo':

            const newState = state.filter(todo => todo.id !== action.payload);

            return newState

        case '[TODO] toggle todo':

            const newToggle = state.map(todo => {

                if (todo.id === action.payload) {

                    return {
                        ...todo,
                        done: !todo.done
                    }

                } else {

                    return todo

                }
            })
          
            return newToggle
           
        default:

            return state

    }
}