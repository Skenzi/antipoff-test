import { useNavigate } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';

interface BackButtonProps {
    classess: string
}

const BackButton = ({ classess }: BackButtonProps) => {
    const navigate = useNavigate()
    const deviceWidth = window.innerWidth
    return (
        <button className={'button '+classess} onClick={() => navigate('/')}>
            {deviceWidth > 400 ? 'Назад' : <ArrowIcon size={{ width: '18px', height: '18px' }} color='#FFFFFF' />}
        </button>
    )
}

export default BackButton