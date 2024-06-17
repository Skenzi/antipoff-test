import { createSlice } from "@reduxjs/toolkit";
import type { UserProps } from "../../types";

interface UsersStateProps {
    users: UserProps[]
}

const initialState: UsersStateProps = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        initUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { initUsers } = usersSlice.actions
export default usersSlice.reducer