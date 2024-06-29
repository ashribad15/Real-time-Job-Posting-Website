import React, { useEffect, useState } from 'react';
import first from "../../Assets/Firstslide.png";
import second from "../../Assets/secondslide.webp";
import third from "../../Assets/thirdsilde.webp";
import fourth from "../../Assets/fourthslide.webp";
import "./home.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Big Brands");
    const [internshipData, setInternshipData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://internshipbackend-vwja.onrender.com/api/internship`);
                setInternshipData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
        }, 7000); // Adjusted the interval to 7 seconds for a slower transition
        return () => clearInterval(interval);
    }, []);

    const filterInternships = internshipData.filter((item) =>
        !selectedCategory || item.category === selectedCategory
    );

    const handleSlideIntern = (direction) => {
        const container = document.getElementById('internshipContainer');
        sideScroll(container, direction, 25, 100, 10);
    };

    return (
        <>
            <h1 className='text-center text-3xl font-bold'>Make your dream career a reality</h1>
            <p className='text-center text-lg font-bold'>Trending on JobJump 🔥</p>

            <div className="carousel">
                <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <img src={first} alt="First slide" />
                    <img src={second} alt="Second slide" />
                    <img src={third} alt="Third slide" />
                    <img src={fourth} alt="Fourth slide" />
                </div>
            </div>

            <div className="infoys">
                <div className="info-intern">
                    <h1 className='text-center font-bold mt-16'>Latest Internships on JobJump</h1>
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
                <div className="internships" id='internshipContainer'>
                    <div className="internship-info flex">
                        {filterInternships.map((data, index) => (
                            <div className="int-1 ml-6 mt-8 p-6" key={index}>
                                <p className='mt-1'><i className="bi bi-pencil-square"></i> <Link to={`/internships/${data._id}`}>{data.title}</Link></p>
                                <p className='mt-1'><i className="bi bi-geo-alt"></i> {data.location}</p>
                                <p className='mt-1'><i className="bi bi-people"></i> {data.applicants}</p>
                                <p className='mt-1'><i className="bi bi-wallet"></i> {data.stipend}</p>
                                <p className='mt-1'><i className="bi bi-hourglass-split"></i> {data.duration}</p>
                                <p className='mt-1 mb-3'><i className="bi bi-clock-fill"></i> {data.posted}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex BUttons mt-9">
                <button className='back' onClick={() => handleSlideIntern('left')} aria-label="Scroll Left">{"<"}</button>
                <button className='next' onClick={() => handleSlideIntern('right')} aria-label="Scroll Right">{">"}</button>
            </div>

            <div className="flex justify-center items-center mt-5">
                <Link to="/internships">
                    <button className="flex justify-center items-center py-2 px-4 bg-blue-500 text-white rounded-full">
                        View All Internships
                    </button>
                </Link>
            </div>
        </>
    );
};

const sideScroll = (element, direction, speed, distance, step) => {
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

export default Home;
