import { useNavigate } from "react-router-dom"
import type { ReactChildrenProp } from "../types"
import { removeToken } from "../features/authorize"

interface HeaderProps extends ReactChildrenProp {
    classess?: string
}

const Header = ({ children, classess }: HeaderProps) => {
    const navigate = useNavigate()
    return (
        <header className={"header "+classess}>
            <button className="header__button header__button--right" onClick={() => {
                removeToken();
                navigate('/signin');
            }}>Выход</button>
            {children}
        </header>
    )
}

export default Header