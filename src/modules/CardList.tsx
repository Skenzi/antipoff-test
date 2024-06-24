
import { useAppDispatch, useAppSelectore } from "../hooks/storeHooks";
import UserCard from "../components/UserCard";
import ArrowIcon from '../ui-kit/ArrowIcon';
import { addViewedUsers } from "../store/slices/usersSlice";

const CardList = () => {
    const users = useAppSelectore((state) => state.usersState.visibleUsers);
    const allUsers = useAppSelectore((state) => state.usersState.users)
    const isAllUsers = users.length === allUsers.length;
    const dispatch = useAppDispatch()
    const showMoreUsers = () => {
        dispatch(addViewedUsers(4))
    }
    return <div className="card-list-wrapper">
        <div className="card-list">
            {users.map((user) => {
                return <UserCard key={user.id} user={user} />
            })}
        </div>
        {isAllUsers ? null : <button className="button card-list__button" onClick={showMoreUsers}>
            Показать еще
            <ArrowIcon />
        </button>}
    </div>
}

export default CardList