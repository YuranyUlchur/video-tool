import React from "react";
import { ProgressBar } from "react-bootstrap";
import './Storage.css'

export const Storage = (data) => {
    // We calculate the progress of storage
    const usedPercentage = (5000 / 10000) * 100;

    return (
        <div className="card card-storage">
            <div className="card-body">
                 {/* title storage*/}
                <h6 className="card-title">Mi Plan - Plus{data.Storage}</h6>
                <p>El uso se renueva el: 3-may-23</p>

                 {/* storage*/}
                <div className="progress-data">
                    <h6 className="subtitle card-subtitle mb-2 text-muted align-middle">Almacenamiento
                        <p className="data-value">23.5 GB / 1 TB</p>
                    </h6>
                </div>

                 {/* percentage*/}
                <ProgressBar now={usedPercentage} className="custom-progress-bar" />

                 {/*monthly band */}
                <div className="progress-data">
                    <h6 className="card-subtitle mb-2 text-muted align-middle">Banda Mensual
                        <p className="data-value">3.4 TB / 5 TB</p>
                    </h6>
                </div>

                <ProgressBar now={usedPercentage} className="custom-progress-bar" />
                
                <button className="admi-button">Administar plan</button>
            </div>
        </div>
    );
};

