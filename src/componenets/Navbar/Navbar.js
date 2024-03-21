import React from 'react';
import { VscSettingsGear } from "react-icons/vsc";
import { SlFolder } from "react-icons/sl";
import { AiOutlinePlayCircle, AiTwotoneAppstore } from "react-icons/ai";
import { TfiBarChartAlt } from "react-icons/tfi";
import { Storage } from '../Storage/Storage';
import './Navbar.css';


export const Navbar = () => {
    return (
        <nav className="container menu">
            <div className='navbar-logo'>
                <img className='icon-player' src="icon-player.png" alt='icono player' />
            </div>

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
            </ul>

            <Storage />

        </nav>
    );
};
