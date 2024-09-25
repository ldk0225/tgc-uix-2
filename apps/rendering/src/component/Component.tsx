'use client';

import { useEffect, useState } from 'react';
import { axios } from '../apis/axios';
import { promiseWrapper } from '../utils/promiseWrapper';

interface IBanner {
    id: number;
    url: string;
}

const Component = () => {
    const [banners, setBanners] = useState<IBanner[] | null>(null);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('/api/banners');
            console.log(data);

            return data;
        };

        setBanners(promiseWrapper(getData()));
    }, []);

    return (
        <div>
            <div>API Boiler Plate</div>
            {/* {
                banners?.map((banner: IBanner) => (
                    <div key={banner.id}>
                        <img src={banner.url} alt={`${banner.id} image`} />
                    </div>
                ))
            } */}
        </div>
    );
};

export default Component;
