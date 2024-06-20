import { createSlice } from "@reduxjs/toolkit";
import type { AuthorizedUserProps } from "../../types";

interface UserStateProps {
    user?: AuthorizedUserProps
}

const initialState: UserStateProps = {
    user: {
        "id": 0,
        "email": "",
        "first_name": "",
        "last_name": "",
        "avatar": "",
        "likedUsers": []
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (state, action) => {
            state.user = action.payload
        },
        likeUserHandler: (state, action) => {
            const isLiked = state.user.likedUsers.includes(action.payload);
            if (isLiked) {
                state.user.likedUsers = state.user.likedUsers.filter((userId) => userId !== action.payload );
            } else {
                state.user.likedUsers.push(action.payload);
            }
            sessionStorage.setItem('likedUsers', JSON.stringify(state.user.likedUsers))
            // Отправка данных на сервер
        },
        avatarHandler: (state, action) => {
            state.user = {
                ...state.user,
                avatar: action.payload
            }
        }
    }
})

export const { initUser, likeUserHandler, avatarHandler } = userSlice.actions
export default userSlice.reducer