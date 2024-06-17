import { createSlice } from "@reduxjs/toolkit";
import type { UserProps } from "../../types";

interface UserStateProps {
    user?: UserProps
}

const initialState: UserStateProps = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { initUser } = userSlice.actions
export default userSlice.reducer