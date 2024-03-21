import React from "react";
import { ProgressBar } from "react-bootstrap";
import './Storage.css'

export const Storage = (data) => {
    // We calculate the progress of storage
    const usedPercentage = (data.videos / data.size) * 100;

    return (
        <div className="card card-storage">
            <div className="card-body">
                <h6 className="card-title">Mi Plan - Plus{data.Storage}</h6>
                <p>El uso de almacenamiento es de</p>
                <h6 className="card-subtitle mb-2 text-muted">Almacenamiento {data.total}</h6>
                <ProgressBar now={usedPercentage} label={`${usedPercentage.toFixed(2)}%`} className="custom-progress-bar" />
                <h6 className="card-subtitle mb-2 text-muted">Banda Mensual {data.total}</h6>
                <ProgressBar now={usedPercentage} label={`${usedPercentage.toFixed(2)}%`} className="custom-progress-bar" />
                <button className="admi-button">Administar plan</button>
            </div>
        </div>
    );
};

