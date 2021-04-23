import React from 'react';
import { GoogleMap, LoadScript, Market } from '@react-google-maps/api';

const Map = ({ data }) => {

    const mapStyles = {
        height: "50vh",
        with: "100%"
    }

    const defaultCenter = {
        lat: data.lat, lng: data.lng
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyCZlQ7LijeHPmF-zyl5veREI_G0FQaQD10'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}
            >
                <Market position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;