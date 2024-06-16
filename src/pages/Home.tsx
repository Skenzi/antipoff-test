import { useEffect } from "react"
import Header from '../modules/Header'

const Home = () => {
    useEffect(() => {
        fetch("https://reqres.in/api/users").then((res) => res.json()).then((data) => {
            console.log(data)
        })
    }, [])
    return (
        <div>
            <Header />
            Hello!
        </div>
    )
}

export default Home;