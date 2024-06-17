

interface HeaderProps {
    children: string | JSX.Element | JSX.Element[],
}

const Header = ({ children }: HeaderProps) => {
    return (
        <header className="header">
            <button>Выход</button>
            {children}
        </header>
    )
}

export default Header