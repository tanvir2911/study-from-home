import React from 'react';
import './Courses.css'
import { useCourses } from '../../useCourses';
import Course from '../Course/Course';

// Item.propTypes = {
//     sx: PropTypes.object,
// };

const Courses = () => {
    const [courses] = useCourses()
    console.log(courses)
    return (
        <div>
            <h2>This is Courses</h2>


            <div className="courses">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div >
    );
};

export default Courses;