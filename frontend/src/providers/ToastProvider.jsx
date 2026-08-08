"use client"
import React from 'react'
import { Toaster } from 'react-hot-toast'



const ToastProvider = () => {
  return (
     <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: "14px",
        },
      }}
      style={{ zIndex: 999999 }}
    />
  )
}

export default ToastProvider