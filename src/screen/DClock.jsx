
import moment from "moment";
import React, { useState, useEffect } from "react"


const DClock = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0)

    useEffect(() => {
        const timeInterval = setInterval(() => { 
            setSeconds(moment.utc().add(5, 'hours').add(30, 'minutes').seconds())
            setMinutes(moment.utc().add(5, 'hours').add(30, 'minutes').minutes())
            setHours(moment.utc().add(5, 'hours').add(30, 'minutes').hours())
        }, 1000)

        return () => clearInterval(timeInterval)
    }, [])

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'honeydew',
                height: '100vh'
            }}
        >
            <div
                style={{
                    fontSize: '500%',
                    color: 'purple'
                }}
            >
                <strong>{hours.toString().length === 1 ? `0${hours}` : hours}{" : "}{minutes.toString().length === 1 ? `0${minutes}` : minutes}{" : "}{seconds.toString().length === 1 ? `0${seconds}` : seconds}</strong>
            </div>
        </div>
    )
}


export default DClock