import React, { useEffect, useState } from 'react'
import './style.css'
import watch from '../../assets/default.png'
import { debugData } from '../../utils/debugData';
import { Outlet, useNavigate } from 'react-router-dom'
import { useGlobal } from '../../providers/WatchProvider';
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

type WatchState = {
  isLocked: boolean,
  isStarted : boolean,
}

const App:React.FC = () => {
  const {isLoaded,isLocked} = useGlobal();
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (isLoaded === false) {
      navigate("/loading");
      return;
    }
    if (isLocked) {
      navigate("/lockscreen");
      return;
    }
  },[isLoaded,isLocked]);

  return (
    <div className="nui-wrapper">
    <div className='watch'>
      <div className='watch-container'>
        <div className='watch-bg'>
          <Outlet />
        </div>
        <img className='watch-frame' src={watch}></img>
      </div>
    </div>
    </div>
  )
  
}

export default App