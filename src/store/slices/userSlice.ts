import { createSlice } from "@reduxjs/toolkit";
import type { UserProps } from "../../types";

interface UserStateProps {
    user?: UserProps
}

const initialState: UserStateProps = {}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {} = usersSlice
export default usersSlice.reducer