import React from 'react'
import './Toggle.css'
import { useTheme } from '../../Contexts/ThemeContext'
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";



const Toggle = () => {
    const { purpleMode, togglePurpleMode } = useTheme()
    return (
        <div className='toggle'>
            <button style={{ background: "transparent", border: "none " }} onClick={togglePurpleMode}>
                {purpleMode ? < BsFillMoonStarsFill color='white' fontSize={20} /> : <BsFillSunFill color='white' fontSize={25} />}
            </button>


        </div>
    )
}

export default Toggle