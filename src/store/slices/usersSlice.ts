import { createSlice } from "@reduxjs/toolkit";
import type { UserProps } from "../../types";

interface UsersStateProps {
    users: UserProps[],
    selectedUser: UserProps | null,
}

const initialState: UsersStateProps = {
    users: [],
    selectedUser: {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    }
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        initUsers: (state, action) => {
            state.users = action.payload
        },
        setUserById: (state, action) => {
            const user = state.users.find((user) => user.id === action.payload)
            state.selectedUser = user
        }
    }
})

export const { initUsers, setUserById } = usersSlice.actions
export default usersSlice.reducer