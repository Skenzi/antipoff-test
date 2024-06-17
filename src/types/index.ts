export interface UserProps {
    first_name?: string,
    last_name?: string,
    id?: number,
    avatar?: string,
    email?: string
}

export interface ReactChildrenProp {
    children: string | JSX.Element | JSX.Element[],
}