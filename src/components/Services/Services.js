import React, { useContext } from 'react';

import { useServices } from '../../useCourses';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services] = useServices([]);




    return (
        <div className="services">

            {
                services.map(service => <Service
                    key={service.id}
                    service={service}

                ></Service>)
            }
        </div>
    );
};

export default Services;