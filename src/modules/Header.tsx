import type { ReactChildrenProp } from "../types"
import ExitButton from '../ui-kit/ExitButton';

interface HeaderProps extends ReactChildrenProp {
    classess?: string
}

const Header = ({ children, classess }: HeaderProps) => {
    return (
        <header className={"header "+classess}>
            <ExitButton classess="header__button header__button--right" />
            {children}
        </header>
    )
}

export default Header