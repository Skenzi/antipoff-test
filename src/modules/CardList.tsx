
import { useAppDispatch, useAppSelectore } from "../hooks/storeHooks";
import UserCard from "../components/UserCard";
import ArrowIcon from '../ui-kit/ArrowIcon';
import { addViewedUsers } from "../store/slices/usersSlice";
import { useState } from "react";

const CardList = () => {
    const users = useAppSelectore((state) => state.usersState.users);
    const likedUsers = useAppSelectore((state) => state.userState.user.likedUsers)

    const initialUsers = users.slice(0, 8)

    const [visibleUsers, setVisibleUsers] = useState(initialUsers)
    const [usersCount, setUsersCount] = useState(8);

    const isAllUsers = users.length === visibleUsers.length;

    const showMoreUsers = () => {
        const nextUsersCount = usersCount + 4
        setUsersCount(nextUsersCount)
        setVisibleUsers(users.slice(0, nextUsersCount))
    }
    return <div className="card-list-wrapper">
        <div className="card-list">
            {visibleUsers.map((user) => {
                const isLiked = !!likedUsers.includes(user.id)
                return <UserCard key={user.id} user={user} isLiked={isLiked} />
            })}
        </div>
        {isAllUsers ? null : <button className="button card-list__button" onClick={showMoreUsers}>
            Показать еще
            <ArrowIcon />
        </button>}
    </div>
}

export default CardList