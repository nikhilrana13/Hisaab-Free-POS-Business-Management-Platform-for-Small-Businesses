"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AuthMiddleware = ({children}) => {
    const router = useRouter()
    const pathname = usePathname()
    const user = useSelector((state)=>state.Auth.user)
    
     useEffect(()=>{
          // if user is not logged in 
          if(!user){
             router.replace("/auth/login")
             return;
          }
         // if user is logged in but onboarding is complete 
         if(!user?.isOnboarded && pathname !== "/onboarding"){
            router.replace("/onboarding")
            return;
         }   
        // User already onboarded, don't allow onboarding page
        if (user?.isOnboarded && pathname === "/onboarding") {
            router.replace("/dashboard");
        }
     },[user,pathname,router])
     
  return children
}

export default AuthMiddleware;
