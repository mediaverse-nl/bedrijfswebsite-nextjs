import React from "react";

const MapsMarker = ({ text }) => <div>
    <style jsx>{` 
        .fa-map-marker-alt:before {
            color: #393939;
            font-size: 28px; 
        }  
    `}</style>
    <i className="fas fa-map-marker-alt" style={{height: "3em !important"}}></i>
    <p style={{textAlign: "center", width: "50px;"}}>{text}</p>
</div>;

export default MapsMarker