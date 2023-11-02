import { useEffect, useState } from "react";

const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(true);

    console.log(isOnline);

    useEffect(()=>{
        function setOnline(){
            setIsOnline(true);
        }
        function setOffline(){
            setIsOnline(false);
        }
    
        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);

        return () => {
            window.removeEventListener("online", setOnline);
            window.removeEventListener("offline", setOffline);
        }
    
    }, [])

    return isOnline;
}

export default useOnline;