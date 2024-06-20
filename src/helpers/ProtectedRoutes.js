import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from './userContext';
import { useContext, useEffect } from 'react';

export default function ProtectedRoutes(){

    const { userID } = useContext(UserContext)

    useEffect(() => {
        if(!!userID) localStorage.setItem('user', userID)
    }, [userID]);
    
    return userID ? <Outlet/> : <Navigate to='/login'/>
}
