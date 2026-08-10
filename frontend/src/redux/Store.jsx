"use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import sessionStorage from "redux-persist/es/storage/session";
import { AuthSlice } from "./AuthSlice";
import { OnBoardingApi } from "./api/onBoardingApi";
import { DashboardApi } from "./api/DashboardApi";
import { ProductApi } from "./api/ProductApi";
import { OrderApi } from "./api/OrderApi";
import { AnalyticsApi } from "./api/AnalyticsApi";



const userpersistconfig={
    key:"Auth",
    storage:sessionStorage
}

const persistconfiguser = persistReducer(userpersistconfig,AuthSlice.reducer)
const rootReducer = combineReducers({
    Auth:persistconfiguser,
    [OnBoardingApi.reducerPath]:OnBoardingApi.reducer,
    [DashboardApi.reducerPath]:DashboardApi.reducer,
    [ProductApi.reducerPath]:ProductApi.reducer,
    [OrderApi.reducerPath]:OrderApi.reducer,
    [AnalyticsApi.reducerPath]:AnalyticsApi.reducer
})
export const Store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}).concat(OnBoardingApi.middleware).concat(DashboardApi.middleware).concat(ProductApi.middleware).concat(OrderApi.middleware).concat(AnalyticsApi.middleware)
})
export const Persistor = persistStore(Store)