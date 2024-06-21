import { createSlice } from "@reduxjs/toolkit";
import type { UserProps } from "../../types";

interface UsersStateProps {
    users: UserProps[],
    visibleUsers: UserProps[],
}

const initialState: UsersStateProps = {
    users: [],
    visibleUsers: [],
    
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        initUsers: (state, action) => {
            state.users = action.payload
            state.visibleUsers = state.users.slice(0, 8);
        },
        addViewedUsers: (state, action) => {
            const begin = 0;
            const end = state.visibleUsers.length + action.payload;
            state.visibleUsers = state.users.slice(begin, end);
        }
    },
})

export const { initUsers, addViewedUsers } = usersSlice.actions
export default usersSlice.reducer