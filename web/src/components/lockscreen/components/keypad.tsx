import React, { useEffect, useState } from 'react'
import './style.css';
import { motion, useAnimation } from "framer-motion";
import {RiDeleteBack2Fill} from 'react-icons/ri'
function Keypad() {
    const controls = useAnimation();
    const passcode = "1234";
    const variants = {
        start : ()=>({

            x: [10,-10,10,-10,0],
        })
    }
    const [input, setInput]= useState(""); 
    const handleBtnClick = (key:string)=> {
        if (key == "del" && input.length > 0) {
            const temp = input.slice(0, -1);
            setInput(temp);
            return;
        }
        if (input.length == 4) return;
        setInput(prev => prev + key)
    }
    useEffect(()=>{
        if (input.length ==4){
            if (input != passcode){
                controls.start("start");
                setInput("");
            }
        }
    },[input])
    return (
        <div className='keypad'>
            <motion.div className='input-container' animate={controls} variants={variants}>
            {
                    [0,1,2,3].map((num)=>{
                        return(<div key={num} style={
                            {
                                backgroundColor : input.length > num ? "white":"gray"
                            }
                        }></div>)
                    })
                }
            </motion.div>
            <div className='keybad-container'>
               {
                [1,2,3,4,5,6,7,8,9].map((num)=>{
                    return(
                        <div key={num} onClick={()=>handleBtnClick(num.toString())}>{num}</div>
                    )
                })
               }
            </div>
            <div className='footer'>
                <div className='zero-btn' onClick={()=>{
                handleBtnClick("0")
            }}>0</div>
            </div>
            {
                input.length > 0 && (
                    <div className='delete-btn' onClick={()=>{handleBtnClick('del')}}> 
                        <div className='btn'>
                            <RiDeleteBack2Fill />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Keypad