import { useAppSelectore } from "../hooks";
import UserCard from "../components/UserCard";
import ArrowIcon from '../components/ArrowIcon';

const CardList = () => {
    const users = useAppSelectore((state) => state.usersState.users);
    return <div className="card-list-wrapper">
        <div className="card-list">
            {users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
        <div>
            <button>
                Показать еще
                <div>
                    <ArrowIcon />
                </div>
            </button>
        </div>
    </div>
}

export default CardList