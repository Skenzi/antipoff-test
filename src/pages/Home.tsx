import { useEffect, useState } from "react"
import { useAppDispatch } from '../hooks/storeHooks';
import { initUsers } from "../store/slices/usersSlice";
import Header from '../modules/Header';
import CardList from '../modules/CardList'
import { getUsers, signin } from '../utils/api'
import { getToken } from "../utils/authorize";

const Home = () => {
    const dispatch = useAppDispatch();
    const [isSuccess, setIsSuccess] = useState(false)
    const [webError, setWebError] = useState('')
    useEffect(() => {
        const usersResponse = getUsers(16)
        usersResponse.then(({data}) => {
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
            {isSuccess ? <CardList /> : <div className="message-box">{webError ? `Ошибка: ${webError}` : 'Пожалуйста подождите...'}</div>}
        </main>
    </>
}

export default Home;