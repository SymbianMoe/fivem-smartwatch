import React, { useState } from "react";

type WatchContextType = {
    isLocked : boolean,
    isLoaded : boolean,
    userPassword: string,
    setLoaded : (state:boolean) => void;
    setLocked : (state:boolean) => void;
}
export const WatchContext = React.createContext({} as WatchContextType);
type Props = {
    children : JSX.Element | JSX.Element[] | string
}
export const WatchProvider:React.FC<Props> = ({children})=> {
    const [isLocked, setLocked] = useState(true);
    const [isLoaded, setLoaded] = useState(false); 
    const [userPassword,setUserPassword] = useState("");
    return(
        <WatchContext.Provider value={{
            isLoaded,
            isLocked,
            userPassword,
            setLoaded,
            setLocked,
        }}>
            {children}
        </WatchContext.Provider>
    )
}
export const useGlobal = () => React.useContext(WatchContext);