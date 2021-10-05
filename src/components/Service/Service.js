import './Service.css'
import React, { useContext } from 'react';
import { ImageContext } from '../../App';


const Service = (props) => {
    const { id, title, description, img } = props.service;

    return (
        <div className="service">
            <div>
                <img style={{ width: "100%", height: "300px" }} src={img} alt="" />
            </div>
            <div>

                <h3>{title}</h3>
                <p><small>{description}</small></p>
                <h4>Charge: $0 </h4>
                <p>Free on Enrollment of any course</p>
            </div>
        </div>

    );
};

export default Service;