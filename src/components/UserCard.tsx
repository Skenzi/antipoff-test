import { useAppDispatch, useAppSelectore } from "../hooks";
import type { UserProps } from "../types"
import LikeButton from '../ui-kit/LikeButton';
import { likeUserHandler } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
interface CardProps {
    user: UserProps,
}

const UserCard = ({ user }: CardProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const fullName = `${user.first_name} ${user.last_name}`
    const { likedUsers } = useAppSelectore((state) => state.userState.user)
    const isLiked = likedUsers.includes(user.id)
    return <section className="user-card" onClick={() => {
        navigate(`/profile/${user.id}`)
    }}>
        <img alt="user-avatar" src={user.avatar} className="avatar user-card__avatar" />
        <h2 className="user-card__name">{fullName}</h2>
        <LikeButton likeHandler={(ev) => {
            ev.stopPropagation()
            dispatch(likeUserHandler(user.id))
        }} classess={`user-card__button${!isLiked ? '' : ' user-card__button--liked'}`} />
    </section>
}

export default UserCard;