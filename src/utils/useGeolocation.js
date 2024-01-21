import {useState, useEffect} from 'react';

const useGeolocation = ()=>{
    const [location, setLocation]=useState({
        latitude: null, 
        longitude: null,
        error: null
    });
    useEffect(()=>{
        const successHandler=(position)=>{
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
        };

        const errorHandler=(error)=>{
            setLocation({
                latitude: null,
                longitude: null, 
                error: error.message || 'Geolocation error'
            });
        };

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
        }else{
            setLocation({
                latitude: null,
                longitude: null,
                error: 'Geolocation is not supported'
            });
        }

        return ()=>{
            navigator.geolocation.clearWatch();
        };
    }, []);

    return location;
}

export default useGeolocation;