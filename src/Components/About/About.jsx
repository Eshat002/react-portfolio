import React from 'react'
import './About.css'
import AboutImg from '../../img/ImageD.png'
import Hi from '../../img/hi.png'
import { useTheme } from '../../Contexts/ThemeContext'


const About = () => {
    const { purpleMode, togglePurpleMode } = useTheme()

    return (
        <div id="about-id" className="about">
            <div className="container">
                <div className="row">
                    <h2 className='headline'>About Me</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-none img-container-1 text-start">
                        <img style={{ width: "40%", marginTop: "-40px" }} src={AboutImg} alt="image" /><br />
                        <img className='hi-img' style={{ width: "90px", marginTop: "-25px" }} src={Hi} alt="image" />


                    </div>
                    <div className="col-lg-8 text-start">
                        <p style={{ color: purpleMode ? "#fff" : "" }} data-aos="fade-right" data-aos-duration="600"
                            data-aos-easing="ease-in-out" className='des'>With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that each design not only looks great but also delivers an exceptional experience</p>
                    </div>
                    <div className="col-lg-4 img-container-2">
                        <img style={{ width: "60%", marginTop: "-40px" }} src={AboutImg} alt="image" />
                        <br />
                        <img style={{ width: "90px", marginTop: "-25px" }} src={Hi} alt="image" />


                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="600"
                    data-aos-easing="ease-in-out" className="row text-start skills-row">
                    <h2 className='my-skills-headline'>My skills</h2>
                    <div className="col-lg-3">
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }} className='skill'>User Interface (UI) Design</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }}
                                    className='skill'>User Experience (UX) Design</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }} className='skill'>Interactive Prototyping</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }} className='skill'>User Research</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }} className='skill'>Interaction Design</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }} className='skill'>Responsive Design</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }} className='skill'>Adobe XD, Sketch, Figma</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-2'> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.52637" r="4" fill="#9B5CFF" />
                            </svg>
                            </div>
                            <div style={{ marginTop: "1px" }}>
                                <p style={{ color: purpleMode ? "#fff" : "" }} className='skill'> Team Collaboration</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>

                </div>
            </div>

        </div>
    )
}

export default About