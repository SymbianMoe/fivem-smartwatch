import React, { useEffect } from "react";
import { useTime } from "../../hooks/useTime";
import { getDate } from "../../utils/date";

function DefaultWatchFace() {
    const { hour, minute, second } = useTime();
    return (
        <>
            <div>DefaultWatchFace</div>
            <div className="clock">
                <div>{hour}</div>
                <div>{minute}</div>
                <div>{second}</div>
            </div>
        </>
    );
}

export default DefaultWatchFace;
