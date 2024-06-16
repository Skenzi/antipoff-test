import { createSlice } from "@reduxjs/toolkit";
import type { UserProps } from "../../types";

interface UsersStateProps {
    users: Array<UserProps>
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

export const {} = usersSlice
export default usersSlice.reducer