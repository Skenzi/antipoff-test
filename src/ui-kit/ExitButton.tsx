
import { useNavigate } from 'react-router-dom';
import ExitIcon from './ExitIcon';
import { removeToken } from '../features/authorize'

interface ExitButtonProps {
    classess: string
}

const ExitButton = ({ classess }: ExitButtonProps) => {
    const navigate = useNavigate()
    const deviceWidth = window.innerWidth
    return (
        <button className={'button '+classess} onClick={() => {
            removeToken();
            navigate('/signin');
        }}>
            {deviceWidth > 400 ? 'Выход' : <ExitIcon size={{
                width: '20px',
                height: '20px'
            }} color='#FFFFFF' />}
        </button>
    )
}

export default ExitButton