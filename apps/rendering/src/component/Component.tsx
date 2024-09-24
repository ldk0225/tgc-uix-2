'use client';

import {useEffect } from 'react';
import {axios} from "../apis/axios";

const Component = () => {

    useEffect(() => {
    const getData = async () => {
        const { data } = await axios.get('/api/banners');

        console.log(data)
    }

    getData()
    }, []);

    return <div>API Boiler Plate</div>
}

export default Component;