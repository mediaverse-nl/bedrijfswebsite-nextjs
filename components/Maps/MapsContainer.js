import React from "react";
import GoogleMapReact from "google-map-react";
import MapsMarker from "../Maps/Marker"

const MapsContainer = ({ text }) => <div style={{height: '300px', width: '100%'}}>
    <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCkb7vvU9U7_uvJxXdADV4P1BMZv_6Zfas" }}
        defaultCenter={{lat: 51.44337414597, lng: 5.5276597416428}}
        defaultZoom={11}
        hoverDistance={2}
    >
        <MapsMarker
            lat={51.44337414597}
            lng={5.5276597416428}
            text="Bedrijf"
        />
        {/*{markers(locations)}*/}
    </GoogleMapReact>
</div>;

export default MapsContainer