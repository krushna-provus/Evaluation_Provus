import type { ApiTypes } from "../interfaces/interfaces";

function getCurrentLocationViaGeoLocation(selectedApi : ApiTypes):Promise<string>{
    return new Promise((resolve,reject)=>{
        if(!navigator.geolocation){
            reject(new Error("Your browser doesn't support navigator !"));
        }
        navigator.geolocation.getCurrentPosition((pos)=>{
            const {latitude,longitude} = pos.coords;
            const latLong : string = selectedApi === "openWeather" 
                ? `lat=${latitude}&lon=${longitude}`
                : `q=${latitude},${longitude}`;
            resolve(latLong);
        },(err)=>{
            reject(new Error(err.message));
        })

    })
}
export default getCurrentLocationViaGeoLocation;