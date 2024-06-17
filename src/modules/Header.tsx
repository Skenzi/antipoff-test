import type { ReactChildrenProp } from "../types"
const Header = ({ children }: ReactChildrenProp) => {
    return (
        <header className="header text-center">
            <button className="header__button">Выход</button>
            {children}
        </header>
    )
}

export default Header