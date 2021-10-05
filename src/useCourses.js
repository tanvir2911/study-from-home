import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses, setCourses]
}

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
}

export { useCourses, useServices }
