import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAdress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCZlQ7LijeHPmF-zyl5veREI_G0FQaQD10`;

    useEffect(async () => {
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location);
    }, []);
    return map;
};

export default useGoogleAdress;

