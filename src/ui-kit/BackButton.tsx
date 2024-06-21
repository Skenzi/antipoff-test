import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ArrowIcon from './ArrowIcon';

interface BackButtonProps {
    classess: string
}

const BackButton = ({ classess }: BackButtonProps) => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setDeviceWidth(window.innerWidth))
    const navigate = useNavigate()
    return (
        <button className={'button '+classess} onClick={() => navigate(-1)}>
            {deviceWidth > 426 ? 'Назад' : <ArrowIcon size={{ width: '18px', height: '18px' }} color='#FFFFFF' />}
        </button>
    )
}

export default BackButton