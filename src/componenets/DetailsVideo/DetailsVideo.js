import React from "react";
import { dataDetails } from "../../dataDetails";
import { Navbar } from "../Navbar/Navbar";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import "./DetailsVideo.css";

export const DetailsVideo = () => {
    const { name } = useParams();
    return (
        <div className="details d-flex justify-content-between">
            <div className="container col-md-auto ">
                <div className="box-navbar bg-white">
                    <Navbar showHelpLink={true} />
                </div>
            </div>

            <div className="container bg-white box-details col-sm-9 p-3 ">
                <div className="details-container">
                    <div className="route-container">
                        <Link to="/" className="back-link">
                            <BsArrowLeftSquareFill className="icon-arrow" />
                            <span className="back-arrow"></span> Home
                        </Link>
                        <span className="divider">/</span>
                            <span className="back-arrow-name">  {name}</span>
                    </div>


                    <div className="box-title-details row justify-content-end">
                        <div className="col data-details-col-name">
                            <h6><input className="select-name" type="checkbox" />Nombre</h6>
                        </div>
                        <div className="col-md-auto">
                            <h6>Tamaño</h6>
                        </div>
                        <div className="col col-lg-2">
                            <h6>Duración</h6>
                        </div>
                        <div className="col col-lg-2">
                            <h6 className="custom-h6 ml-n2">Última modificación</h6>
                        </div>
                    </div>

                    {dataDetails.map((dataDetails, index) => (
                        <div key={index} className="data-details-item row box-data-details">
                            <div className="col data-details-name">
                                <span className="name-data-details">
                                    <input className="select" type="checkbox" />
                                    <AiOutlinePlayCircle className="color-icon" />{dataDetails.name}
                                </span>
                            </div>
                            <div className="col-md-auto">
                                <span className="data-details-item">{dataDetails.size}</span>
                            </div>
                            <div className="col col-lg-2">
                                <span className="data-details-item">{dataDetails.duration}</span>
                            </div>
                            <div className="col col-lg-2">
                                <span className="data-details-item">{dataDetails.lastModification}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
