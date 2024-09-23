import React from 'react'
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Logout() {

    const { setUser, unsetUser } = useContext(UserContext);

    useEffect(() => {
    
        unsetUser(); 
        setUser({
          id: null,
          isAdmin: null
        });
    
    }, [unsetUser, setUser]); 

    return (
        <Navigate to='/login' />
    )
}
