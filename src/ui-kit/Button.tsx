import { ReactChildrenProp } from "../types"

const Button = ({ children }: ReactChildrenProp) => {
    return <button className="button">
        {children}
    </button>
}

export default Button