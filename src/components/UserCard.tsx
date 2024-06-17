import type { UserProps } from "../types"
import LikeButton from '../ui-kit/LikeButton';
interface CardProps {
    user: UserProps
}

const UserCard = ({ user }: CardProps) => {
    const fullName = `${user.first_name} ${user.last_name}`
    return <section className="user-card">
        <img alt="user-avatar" src={user.avatar} className="user-card__avatar" />
        <h2 className="user-card__name">{fullName}</h2>
        <LikeButton likeHandler={() => {}} classess="user-card__button" />
    </section>
}

export default UserCard;