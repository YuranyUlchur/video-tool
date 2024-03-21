import React from "react";
import { data } from "../../data";
import { Navbar } from "../Navbar/Navbar";
import { SlFolder } from "react-icons/sl";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";
import { Search } from "../Search/Search";
import "./Home.css";

export const Home = () => {
    return (
        <div className="home d-flex justify-content-between">
            <div className="container col-md-auto ">
                <div className="box-navbar bg-white">
                    <Navbar />
                </div>
            </div>

            <div className="container bg-white box-body col-sm-9 p-3 ">
                <div className="home-container">
                    <div className="row box-header">
                        <div className="options col d-flex justify-content-between">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="/"> <VscLibrary size={20} className="color-icon" />Biblioteca</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/"> <FaRegTrashCan size={17} className="color-icon-trast" />Papelera</a>
                                </li>
                            </ul>
                            <div>
                                <button className="new-carpeta"> <SlFolder size={20} className="icon-new" />Nueva carpeta</button>
                                <button className="new-video"> <AiOutlinePlayCircle size={20} className="icon-new" />Nuevo video</button>
                            </div>
                        </div>
                    </div>

                    <div className="container-search">
                        <Search />
                    </div>

                    <div className="box-title row justify-content-end">
                        <div className="col data-col-name">
                            <h6><input className="select-name" type="checkbox" />Nombre</h6>
                        </div>
                        <div className="col-md-auto">
                            <h6>Videos</h6>
                        </div>
                        <div className="col col-lg-2">
                            <h6>Tamaño</h6>
                        </div>
                        <div className="col col-lg-2">
                            <h6 className="custom-h6 ml-n2">Última modificación</h6>
                        </div>
                    </div>

                    {data.map((data, index) => (
                        <div key={index} className="data-item row box-data">
                            <div className="col data-name">
                                <span className="name-data">
                                    <input className="select" type="checkbox" />
                                    <SlFolder className="color-icon" />{data.name}
                                </span>
                            </div>
                            <div className="col-md-auto">
                                <span className="data-item">{data.videos}</span>
                            </div>
                            <div className="col col-lg-2">
                                <span className="data-item">{data.size}</span>
                            </div>
                            <div className="col col-lg-2">
                                <span className="data-item">{data.lastModification}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
