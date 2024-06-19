import { createSlice } from "@reduxjs/toolkit";
import type { AuthorizedUserProps } from "../../types";

interface UserStateProps {
    user?: AuthorizedUserProps
}

const initialState: UserStateProps = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (state, action) => {
            state.user = action.payload
            state.user.likedUsers = [1,4,5,6]
        },
        likeUserHandler: (state, action) => {
            const isLiked = state.user.likedUsers.includes(action.payload);
            if (isLiked) {
                state.user.likedUsers = state.user.likedUsers.filter((userId) => userId !== action.payload );
            } else {
                state.user.likedUsers.push(action.payload);
            }
            // Отправка данных на сервер
        }
    }
})

export const { initUser, likeUserHandler } = userSlice.actions
export default userSlice.reducer