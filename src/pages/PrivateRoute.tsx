import { useEffect } from 'react';
import { getToken, removeToken } from '../utils/authorize';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { signin } from '../utils/api';
import { useDispatch } from 'react-redux';
import { initUser } from '../store/slices/userSlice';

interface PrivateRouteProps {
    redirectPath: string
}

const PrivateRoot = ({ redirectPath }: PrivateRouteProps) => {
    const token = getToken();
    if(!token) return <Navigate to={redirectPath} replace={true} />
    
    return <Outlet />
}

export default PrivateRoot