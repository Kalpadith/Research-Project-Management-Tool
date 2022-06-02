import {createSlice} from '@reduxjs/toolkit'


const adminUserHomeReducer = createSlice({
    name: 'adminUserHome',
    initialState: {
        users: []
    },
    reducers: {
        add: (state, action) => {
            state.users = action.payload
        }
    }
})


export const {add} = adminUserHomeReducer.actions
export default adminUserHomeReducer.reducer;

export const selectUsers = (state) => state.adminUserHome.users
