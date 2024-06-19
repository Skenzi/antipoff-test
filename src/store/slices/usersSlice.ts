import { createSlice } from "@reduxjs/toolkit";
import type { UserProps } from "../../types";

interface UsersStateProps {
    users: UserProps[],
    selectedUser: UserProps | null,
    visibleUsers: UserProps[],
}

const initialState: UsersStateProps = {
    users: [],
    selectedUser: {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
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
        setUserById: (state, action) => {
            const user = state.users.find((user) => user.id === action.payload)
            state.selectedUser = user
        },
        addViewedUsers: (state, action) => {
            const begin = 0;
            const end = state.visibleUsers.length + action.payload;
            state.visibleUsers = state.users.slice(begin, end);
        }
    },
})

export const { initUsers, setUserById, addViewedUsers } = usersSlice.actions
export default usersSlice.reducer