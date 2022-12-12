import React, { useEffect, useState } from 'react'
import './style.css';
import logo from '../../assets/apple.png'
import { useGlobal } from '../../providers/WatchProvider';
function Loading() {
    const [loadingProgress,setLoadingProg] = useState(0);
    const [active,setActive] = useState(true);
    const {setLoaded} = useGlobal();
    useEffect(() => {
        let interval = 0;
        if (active) {
          interval = setInterval(() => {
            setLoadingProg(prev => prev + 1);
            console.log("running");
          }, 100);
        } else if (!active && loadingProgress !== 0) {
          clearInterval(interval);
        }
        if (loadingProgress >= 100) {
            setActive(false);
            clearInterval(interval);
            setLoaded(true);
        }
        return () => clearInterval(interval);
      }, [active, loadingProgress]);

    return (
        <div className='loading-screen'>
        <div> <img className='apple-logo' src={logo} alt="" /></div>
        <div className='loading-bar'>
            <div className='loading-progress' style={{
                width: `${loadingProgress}%`
            }}></div>
        </div>
        </div>
    )
}

export default Loading