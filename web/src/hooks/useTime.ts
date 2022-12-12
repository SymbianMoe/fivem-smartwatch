import React, { useEffect, useState } from "react";
import { getDate } from "../utils/date";

export const useTime = () => {
    const [time, setTime] = useState(getDate());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getDate());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return time;
};
