
import { useNavigate } from 'react-router-dom';
import ExitIcon from './ExitIcon';
import { removeToken } from '../utils/authorize'
import { useState } from 'react';

interface ExitButtonProps {
    classess: string
}

const ExitButton = ({ classess }: ExitButtonProps) => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setDeviceWidth(window.innerWidth))
    const navigate = useNavigate()
    return (
        <button className={'button '+classess} onClick={() => {
            removeToken();
            navigate('/signin');
        }}>
            {deviceWidth > 426 ? 'Выход' : <ExitIcon size={{
                width: '20px',
                height: '20px'
            }} color='#FFFFFF' />}
        </button>
    )
}

export default ExitButton