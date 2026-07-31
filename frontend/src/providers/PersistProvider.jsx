"use client"
import { Persistor } from '@/redux/Store';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxProvider from './ReduxProvider';

const PersistProvider = ({children}) => {
  return (
    <ReduxProvider>
    <PersistGate loading={null} persistor={Persistor}>
        {children}
    </PersistGate>
    </ReduxProvider>
   
  );
}

export default PersistProvider;
