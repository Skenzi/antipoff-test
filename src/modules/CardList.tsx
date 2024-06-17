import { useAppSelectore } from "../hooks";
import UserCard from "../components/UserCard";
import ArrowIcon from '../ui-kit/ArrowIcon';

const CardList = () => {
    const users = useAppSelectore((state) => state.usersState.users);
    return <div className="card-list-wrapper">
        <div className="card-list">
            {users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
            <button className="card-list__button">
                Показать еще
                <ArrowIcon />
            </button>
    </div>
}

export default CardList