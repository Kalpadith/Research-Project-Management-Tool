import {createSlice} from '@reduxjs/toolkit'


const groupUserHomeReducer = createSlice({
    name: 'groupUserHome',
    initialState: {
        users: []
    },
    reducers: {
        add: (state, action) => {
            state.users = action.payload
        }
    }
})


export const {add} = groupUserHomeReducer.actions
export default groupUserHomeReducer.reducer;

export const selectUsers = (state) => state.groupUserHome.users
