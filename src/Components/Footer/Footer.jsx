import React from 'react'
import './Footer.css'
import { useTheme } from '../../Contexts/ThemeContext'


const Footer = () => {
    const { purpleMode, togglePurpleMode } = useTheme()

    return (
        <div id="footer" className='footer mb-4'><p style={{ color: purpleMode ? "#fff" : "" }}>© 2023 Jhan GonzalesM </p></div>
    )
}

export default Footer