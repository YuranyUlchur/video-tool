import React from 'react';
import { VscSettingsGear } from "react-icons/vsc";
import { SlFolder } from "react-icons/sl";
import { AiOutlinePlayCircle, AiTwotoneAppstore } from "react-icons/ai";
import { TfiBarChartAlt } from "react-icons/tfi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { Storage } from '../Storage/Storage';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import './Navbar.css';


export const Navbar = ({ showHelpLink }) => {
    return (
        <nav className="container menu">

             {/* return home in component DetailsVideo*/}
            {showHelpLink && (
                <div className="back-minor">
                    <Link to="/" className="nav-home">
                        <IoIosArrowBack size={25} className='icons-nav' /> 
                    </Link>
                </div>
            )}

             {/* icon proyect*/}
            <div className='navbar-logo'>
                <img className='icon-player' src={`${process.env.PUBLIC_URL}/icon-player.png`} alt='icono player' />
            </div>

             {/* list navbar*/}
            <ul className="navbar-nav flex-column">

                <li className="nav-item">

                    <a className="nav-link active" href="/"><AiTwotoneAppstore size={25} className="icons-nav" /> Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"> <SlFolder size={25} className="icons-nav" />Videos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"> <AiOutlinePlayCircle size={25} className="icons-nav" /> Player</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><TfiBarChartAlt size={25} className="icons-nav" />Analytics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"> <VscSettingsGear size={25} className="icons-nav" />Configuraciones</a>
                </li>

                 {/* return option help in component DetailsVideo*/}
                {showHelpLink && (
                    <li className="nav-item">
                        <Link to="/" className="nav-link"> <IoHelpCircleOutline size={25} className='icons-nav' />Ayuda</Link>
                    </li>
                )}
            </ul>

             {/* return storage*/}
            <Storage />

        </nav>
    );
};