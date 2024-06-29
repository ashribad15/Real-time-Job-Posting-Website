import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./job.css";

const Job = () => {
    const [selectedCategory, setSelectedCategory] = useState("Big Brands");
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://internshipbackend-vwja.onrender.com/api/job');
                setJobData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleSlideJob = (direction) => {
        const container = document.getElementById("jobContainer");
        sideScrollJob(container, direction, 25, 100, 10);
    };

    const filteredJobs = jobData.filter((item) => item.category === selectedCategory);

    return (
        <div>
            <div className="info-job mt-12">
                <div className="categories flex flex-wrap mt-14">
                    <p>POPULAR CATEGORIES :</p>
                    {["Big Brands", "Work From Home", "Part-time", "MBA", "Engineering", "Media", "Design", "Data Science"].map(category => (
                        <span
                            key={category}
                            className={`category mr-4 ml-6 ${selectedCategory === category ? 'bg-blue-500 text-white' : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
            <div className="jobs" id='jobContainer'>
                <div className="job-info flex">
                    {filteredJobs.map((data, index) => (
                        <div className="job-card mt-6" key={index}>
                            <p className='mb-4 mt-3' id='boxer'><i className='bi bi-arrow-up-right text-blue-500'></i> Actively Hiring</p>
                            <p>{data.title}</p>
                            <small className='text-slate-400 text-sm'>{data.company}</small>
                            <hr className='mt-5' />
                            <p className='mt-3'><i className="bi bi-geo-alt-fill"></i> {data.location}</p>
                            <p className='mt-1'><i className="bi bi-cash-stack"></i> {data.CTC}</p>
                            <p className='mt-1'><i className="bi bi-calendar-fill"></i> {data.Experience}</p>
                            <div className='more flex justify-between mt-6'>
                                <span className='bg-slate-200 text-slate-400 w-20 rounded-sm text-center'>Job</span>
                                <Link to={`detailjob?q=${data._id}`}>
                                    <span className='text-blue-500 mr-2'>
                                        View details <i className="bi bi-chevron-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex BUttons mt-9">
                <button className='back' onClick={() => handleSlideJob('left')} aria-label="Scroll Left">{"<"}</button>
                <button className='next' onClick={() => handleSlideJob('right')} aria-label="Scroll Right">{">"}</button>
            </div>

            <div className="flex justify-center items-center mt-5">
                <Link to="/jobs">
                    <button className="flex justify-center items-center py-2 px-4 bg-blue-500 text-white rounded-full">
                        View All Jobs
                    </button>
                </Link>
            </div>
        </div>
    );
};

const sideScrollJob = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        if (direction === 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
};

export default Job;

