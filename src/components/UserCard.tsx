import type { UserProps } from "../types"
import HeartIcon from './HeartIcon';
interface CardProps {
    user: UserProps
}

const UserCard = ({ user }: CardProps) => {
    const fullName = `${user.first_name} ${user.second_name}`
    return <section>
        <img alt="user-avatar" src={user.avatar} />
        <h2>{fullName}</h2>
        <button>
            <HeartIcon />
        </button>
    </section>
}

export default UserCard;