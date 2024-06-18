import { useEffect } from "react"
import { useAppDispatch } from '../hooks/index';
import { initUsers } from "../store/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import Header from '../modules/Header';
import CardList from '../modules/CardList'
import { getToken } from '../features/authorize';

const Home = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        if(!getToken()) navigate('/signin')
        fetch("https://reqres.in/api/users").then((res) => res.json()).then(({data}) => {
            dispatch(initUsers(data))
        })
    }, [])
    return <div>
        <Header>
            <div>
                <h1>Наша команда</h1>
                <h2>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</h2>
            </div>
        </Header>
        <CardList />
    </div>
}

export default Home;