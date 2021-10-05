import React from 'react';

import './ServiceInsideHome.css'

const ServiceInsideHome = (props) => {
    const { title, description, img } = props.service;
    // const serviceHomeStyle = {
    //     padding: '10px'
    // }

    return (
        <div className="card" style={{ width: '300px' }} >
            <img style={{ width: "100%" }} src={img} alt="" />
            <div class="container">

                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Charge: $0 </h4>
                <p>Free on Enrollment of any course</p>
            </div>



        </div>


    );
};
// {{ width: "300px", height: "300px", borderRadius: '10px' }}
export default ServiceInsideHome;