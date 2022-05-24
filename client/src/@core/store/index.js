import { configureStore } from '@reduxjs/toolkit'
import groupUserHomeReducer from '../../pages/private/modules/user-group-home/group-user-home.reducer';

const index = configureStore({
    reducer: {
        groupUserHome: groupUserHomeReducer,
    },
})

export default index;
