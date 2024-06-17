import HeartIcon from './HeartIcon';

interface LikeButtonProps {
    likeHandler: React.MouseEventHandler<HTMLButtonElement>,
    classess: string
}

const LikeButton = ({ likeHandler, classess }: LikeButtonProps) => {
    return <button className={`like-button ${classess}`} onClick={likeHandler}>
        <HeartIcon />
    </button>
}

export default LikeButton