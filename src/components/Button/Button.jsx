import { useState } from 'react';
import './Button.css'

export const Button = ({title, fetchUrl}) => {
    const [openPortal, setOpenPortal] = useState(false)
    return (
        <div className="wrapper" onClick={() => {setOpenPortal(!openPortal)}}>
            <div className="wrapper-card">
                <h2>{title}</h2>
            </div>
        </div>
    )
}
