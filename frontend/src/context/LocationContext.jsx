"use client"
import { api } from "@/services/api";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";



export const LocationContext = createContext()
// get browser coordinates 
const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            return reject("Geolocation not supported")
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                resolve({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
            },
            (err) => reject(err)
        )
    })
}

export const LocationProvider = ({ children }) => {
    const [loading, setloading] = useState(false)
    const [weatherDetails, setWeatherDetails] = useState({})

    // execute weather details automation
    const FetchWeatherDetails = async () => {
        try {
            setloading(true)
            let lat = localStorage.getItem("latitude");
            let lng = localStorage.getItem("longitude");
            // Location not available in localStorage
            if (!lat || !lng) {
                const location = await getUserLocation();
                lat = location.lat;
                lng = location.lng;
                localStorage.setItem("latitude", lat);
                localStorage.setItem("longitude", lng);
            }
            // Trigger FlowPilot workflow
            const response = await axios.post("https://flowpilot-backend-7xir.onrender.com/api/webhooks/wf_GwqE94DqIw", {
                latitude: Number(lat),
                longitude: Number(lng),
            })
            if (response.data) {
                const weatherDetails = response?.data?.data?.result || {}
                setWeatherDetails(weatherDetails)
            }
        } catch (error) {
            console.error("Failed to fetch weather details:", error);
        } finally {
            setloading(false)
        }
    }
    console.log(weatherDetails)
    // runs on component mount 
    useEffect(()=>{
        FetchWeatherDetails()
    },[])
    return (
        <LocationContext.Provider value={{weatherDetails,loading}}>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocationProvider = () => useContext(LocationContext)