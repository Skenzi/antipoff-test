import { useNavigate } from "react-router-dom"
import type { ReactChildrenProp } from "../types"
import { removeToken } from "../features/authorize"
const Header = ({ children }: ReactChildrenProp) => {
    const navigate = useNavigate()
    return (
        <header className="header text-center">
            <button className="header__button" onClick={() => {
                removeToken();
                navigate('/signin');
            }}>Выход</button>
            {children}
        </header>
    )
}

export default Header