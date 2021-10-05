import React from 'react';
import { useHistory } from 'react-router';
import { useServices } from '../../useCourses';
import ServiceInsideHome from '../ServiceInsideHome/ServiceInsideHome';
import './home.css'

const Home = () => {
    const [services] = useServices([])
    const history = useHistory()

    // const servicesFirstFour = services.filter(service => service.id < 5)

    const handleCourses = () => {
        history.push('/courses')
    }

    return (
        <div >
            <div className="home">
                <h1 style={{ margin: '0', paddingTop: "50px", fontWeight: "900", color: "lightyellow", fontSize: "100px" }}>Study From Home</h1>
                <h1 style={{ margin: '0', paddingTop: "50px", fontWeight: "700", color: "linen", fontSize: "50px" }}>Learn New Things With Us</h1>
                <h3 style={{ margin: '0', fontWeight: "600", padding: '10px', color: "lightgrey", fontSize: "30px" }}>Enroll in our courses and get ahead of others</h3>
                <button style={{ padding: "10px", backgroundColor: "mediumaquamarine", border: 'none', borderRadius: "5px", fontWeight: "bolder", cursor: "pointer" }} onClick={handleCourses}>Courses</button>
            </div>

            <div>
                <h2>Services</h2>
                <div className="servicesInsideHome">
                    {
                        services.map(service => <ServiceInsideHome
                            key={service.id}
                            service={service}
                        ></ServiceInsideHome>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;