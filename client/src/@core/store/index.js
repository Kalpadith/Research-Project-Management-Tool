import { configureStore } from '@reduxjs/toolkit'
import groupUserHomeReducer from '../../pages/private/modules/user-group-home/group-user-home.reducer';
import adminUserHomeReducer from '../../pages/private/modules/admin-users-home/admin-user-home.reducer';

const index = configureStore({
    reducer: {
        groupUserHome: groupUserHomeReducer,
        adminUserHome: adminUserHomeReducer
    },
})

export default index;
