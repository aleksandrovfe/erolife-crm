import React from "react"
import './Spinner.css'

export const Spinner = () => (
    <div className="spinner-wrapper">
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)