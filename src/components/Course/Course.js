// import { Portal } from '@mui/core';
// import { Box } from '@mui/system';
import React, { useState } from 'react';
import './Course.css'

const Course = (props) => {
    const { title, img, link, institution, instructor, duration, description, prerequisites, learningGoal } = props.course;

    const [show, setShow] = useState(false);


    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className="course">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p style={{ fontWeight: "700", color: "brown" }}><small>{institution}</small></p>

            <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <div className="button-field">
                    <button onClick={handleClick}>{show ? 'Instructors' : 'Duration'}</button>
                    {
                        show ?
                            <span style={{ color: "darkolivegreen", fontWeight: "700" }} className="button-value">{instructor}</span>
                            :
                            <span style={{ color: "indianred", fontWeight: "700" }} className="button-value">{duration}</span>

                    }
                </div>
                <div className="read-more">
                    <a href={link} target="_blank" rel="noopener noreferrer">Read More<span>....</span></a>
                </div>
            </div>
            {/* <button type="button" onClick={handleClick}>
                {show ? 'Instructors' : 'Duration'}
            </button>
            <Box sx={{ p: 1, my: 1, }}>

                {show ? (
                    <Portal container={container.current}>
                        <span>{instructor}</span>
                    </Portal>
                ) : null}
            </Box>
            <Box sx={{ p: 1, my: 1, }} ref={container} /> */}
        </div>
    );
};

export default Course;