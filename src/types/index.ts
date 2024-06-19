export interface UserProps {
    first_name: string,
    last_name: string,
    id: number,
    avatar: string,
    email: string,
}

export interface AuthorizedUserProps extends UserProps {
    likedUsers: Array<number>
}

export interface ReactChildrenProp {
    children: string | JSX.Element | JSX.Element[],
}

export interface IconProps {
    size?: {
        width: string,
        height: string
    },
    color?: string
}