import React from 'react'
import './WorkCard.css'
import { useTheme } from '../../Contexts/ThemeContext'

const WorkCard = ({ title, subTitle, img, text, btnText }) => {
    const { purpleMode, togglePurpleMode } = useTheme()

    return (
        <div style={{ backgroundColor: purpleMode ? "#fff" : "" }} className="work-card">

            <div className="row gx-5">
                <div className="col-lg-5 text-start">
                    <h2 style={{ color: purpleMode ? "#000000" : "" }}>{title}</h2>
                    <p style={{ color: purpleMode ? "#000000" : "" }} className='sub-title'>{subTitle}</p>
                    <p style={{ color: purpleMode ? "#000000" : "" }} data-aos="fade-right" data-aos-duration="600"
                        data-aos-easing="ease-in-out" className='text'>{text}</p>
                    <button style={{ color: purpleMode ? "#000000" : "" }}>{btnText}</button>
                </div>
                <div className="col-lg-7">
                    <img style={{ width: "100%" }} src={img} alt="card-image" />
                </div>

            </div>


        </div>


    )
}

export default WorkCard