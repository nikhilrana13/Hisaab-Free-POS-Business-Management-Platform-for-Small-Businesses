"use client"
import { useGetWeatherQuery } from "@/redux/api/WeatherApi";
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
    const [location,setLocation] = useState(null)
    const {data,isLoading} = useGetWeatherQuery(location,{
        skip:!location
    })
    const weatherDetails = data?.data?.result || {}

    // runs on component mount 
    useEffect(() => {
        const latitude = localStorage.getItem("latitude");
        const longitude = localStorage.getItem("longitude");

        if (latitude && longitude) {
            setLocation({
                latitude: Number(latitude),
                longitude: Number(longitude),
            });
        } else {
            getUserLocation().then((location) => {
                localStorage.setItem("latitude", location.lat);
                localStorage.setItem("longitude", location.lng);

                setLocation({
                    latitude: location.lat,
                    longitude: location.lng,
                });
            });
        }
    }, []);

    return (
        <LocationContext.Provider value={{ weatherDetails,isLoading}}>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocationProvider = () => useContext(LocationContext)