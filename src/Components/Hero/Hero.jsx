import React from 'react'
import HeroImage from '../../img/graphic.png'
import './Hero.css'
import { useTheme } from '../../Contexts/ThemeContext'
import Toggle from '../Toggle/Toggle'



const Hero = () => {
    const { purpleMode, togglePurpleMode } = useTheme()

    return (
        <div className='hero'>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-lg-2">
                        <Toggle />
                    </div>
                    <div className="col-lg-8">
                        <div > <img style={{ width: "40%", objectFit: "cover" }} src={HeroImage} alt="hero-img" /></div>
                        <h2 data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out">Hi, I'm Jhan Gonzales</h2>
                        <p style={{ color: purpleMode ? "#fff" : "" }} data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out">I'm a passionate Product Designer
                            focused on crafting remarkable digital experiences.
                            My aim is to blend functionality and aesthetics to create impactful solutions</p>
                    </div>
                    <div className="col-lg-2"></div>

                </div></div>



        </div >
    )
}

export default Hero