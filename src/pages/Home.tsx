import { useEffect, useState } from "react"
import { useAppDispatch } from '../hooks/index';
import { initUsers } from "../store/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import Header from '../modules/Header';
import CardList from '../modules/CardList'
import { getToken } from '../features/authorize';
import { initUser } from "../store/slices/userSlice";
import { getUsers } from '../features/api'

const Home = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [isSuccess, setIsSuccess] = useState(false)
    const [webError, setWebError] = useState('')
    useEffect(() => {
        const token = getToken();
        if(!token) navigate('/signin')
        // отправка токена на сервер
        const user = {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "likedUsers": [1,3,4]
        }
        dispatch(initUser(user))
        const response = getUsers(16)
        response.then(({data}) => {
            dispatch(initUsers(data))
            setIsSuccess(true)
        }).catch((error) => {
            setIsSuccess(false)
            setWebError(error)
        })
    }, [])
    return <>
        <Header classess={'justify-center'}>
            <h1 className="text-center">Наша команда</h1>
            <h2 className="text-center">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</h2>
        </Header>
        <main>
            {isSuccess ? <CardList /> : <div className="massage-box">{webError ? `Ошибка: ${webError}` : 'Пожалуйста подождите...'}</div>}
        </main>
    </>
}

export default Home;