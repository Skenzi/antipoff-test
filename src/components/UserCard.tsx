import { useAppDispatch } from "../hooks";
import type { UserProps } from "../types"
import LikeButton from '../ui-kit/LikeButton';
import { setUserById } from '../store/slices/usersSlice'
import { useNavigate } from "react-router-dom";
interface CardProps {
    user: UserProps
}

const UserCard = ({ user }: CardProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const fullName = `${user.first_name} ${user.last_name}`
    return <section className="user-card" onClick={() => {
        dispatch(setUserById(user.id));
        navigate('/profile')
    }}>
        <img alt="user-avatar" src={user.avatar} className="user-card__avatar" />
        <h2 className="user-card__name">{fullName}</h2>
        <LikeButton likeHandler={(ev) => {
            ev.stopPropagation()
        }} classess="user-card__button" />
    </section>
}

export default UserCard;