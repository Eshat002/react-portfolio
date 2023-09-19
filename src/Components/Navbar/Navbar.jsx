import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { useTheme } from '../../Contexts/ThemeContext'

const Navbar = () => {
    const { purpleMode, togglePurpleMode } = useTheme()

    function scrollToSection(sectionId) {

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'instant' });
        }
    }

    return (
        <div className='custom-navbar'>
            <div></div>
            <div>  <ul>
                <li>
                    <Link style={{ color: purpleMode ? "#fff" : "" }} className='nav-item-1' activeClass="active" to="work-id" spy={true} smooth={true} offset={50} duration={1000}  >
                        Work
                    </Link>
                    {/* <a className='nav-item-1' href="#work-id" onClick={() => scrollToSection("work-id")} >Work</a> */}
                </li>
                <li>
                    <Link style={{ color: purpleMode ? "#fff" : "" }} className='nav-item-2' activeClass="active" to="about-id" spy={true} smooth={true} offset={50}
                        duration={1000}  >
                        About
                    </Link>
                    {/* <a className='nav-item-2' href="#about-id" onClick={() => scrollToSection('about-id')} >About</a> */}
                </li>
                <li>
                    <Link style={{ color: purpleMode ? "#fff" : "" }} className='nav-item-3' activeClass="active" to="blog-id" spy={true} smooth={true} offset={50}
                        duration={1000}  >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className='nav-item-4' activeClass="active" to="contact-id" spy={true} smooth={true} offset={50} duration={1000}  >
                        Contact
                    </Link>
                    {/* <a className='nav-item-4' href="#contact-id" onClick={() => scrollToSection("contact-id")} >Contact</a> */}
                </li>
            </ul></div>
            <div></div>
        </div>

    )
}

export default Navbar