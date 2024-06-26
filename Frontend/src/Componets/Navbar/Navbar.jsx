import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase';
import { selectUser } from '../../Feature/Userslice';
import logo from '../../Assets/logo.png';
import Sidebar from './Sidebar';
import './navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [isDivVisibleForIntern, setDivVisibleForIntern] = useState(false);
    const [isDivVisibleForJob, setDivVisibleForJob] = useState(false);
    const [isDivVisibleForLogin, setDivVisibleForLogin] = useState(false);
    const [isDivVisibleForProfile, setDivVisibleForProfile] = useState(false);
    const [isStudent, setStudent] = useState(true);

    const loginFunction = () => {
        signInWithPopup(auth, provider).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        setDivVisibleForLogin(false);
    }

    const logoutFunction = () => {
        signOut(auth);
        navigate("/");
    }

    const showLogin = () => {
        setDivVisibleForLogin(true);
    }

    const closeLogin = () => {
        setDivVisibleForLogin(false);
    }

    const showInternships = () => {
        setDivVisibleForIntern(true);
    }

    const hideInternships = () => {
        setDivVisibleForIntern(false);
    }

    const showJobs = () => {
        setDivVisibleForJob(true);
    }

    const hideJobs = () => {
        setDivVisibleForJob(false);
    }

    const showProfile = () => {
        setDivVisibleForProfile(true);
    }

    const hideProfile = () => {
        setDivVisibleForProfile(false);
    }

    const setTrueForStudent = () => {
        setStudent(false);
    }

    const setFalseForStudent = () => {
        setStudent(true);
    }

    return (
        <div>
            <nav className="nav1">
                <ul>
                    <div className="img">
                        <Link to={"/"}><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="elem">
                        <Link to={"/Internship"}>
                            <p id='int' className='' onMouseEnter={showInternships} onMouseLeave={hideInternships}>
                                Internships <i id='ico' className="bi bi-caret-down-fill"></i>
                            </p>
                        </Link>
                        <Link to={"/Jobs"}>
                            <p onMouseEnter={showJobs} onMouseLeave={hideJobs}>
                                Jobs <i className="bi bi-caret-down-fill" id='ico2'></i>
                            </p>
                        </Link>
                    </div>
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Search" />
                    </div>
                    {user ? (
                        <>
                            <div className='Profile'>
                                <Link to={"/profile"}>
                                    <img src={user?.photo} alt="profile" onMouseEnter={showProfile} onMouseLeave={hideProfile} className='rounded-full w-12' id='picpro' />
                                    <i className='bi bi-caret-up-fill' id='ico3'></i>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="auth">
                                <button className='btn1' onClick={showLogin}>Login</button>
                                <button className='btn2'><Link to="/register">Register</Link></button>
                            </div>
                        </>
                    )}
                    {user ? (
                        <>
                            <button className='bt-log' id='bt' onClick={logoutFunction}>Logout <i className="bi bi-box-arrow-right"></i></button>
                        </>
                    ) : (
                        <>
                            <div className="flex mt-7 hire">Hire Talent</div>
                            <div className="admin">
                                <Link to={"/adminLogin"}>
                                    <button>Admin</button>
                                </Link>
                            </div>
                        </>
                    )}
                </ul>
            </nav>
            {isDivVisibleForIntern && (
                <div className="profile-dropdown-2" onMouseEnter={showInternships} onMouseLeave={hideInternships}>
                    <div className="left-section">
                        <p>Top Locations</p>
                        <p>Profile</p>
                        <p>Top Category</p>
                        <p>Explore More Internships</p>
                    </div>
                    <div className="line flex bg-slate-400"></div>
                    <div className="right-section">
                        <p>Work From Home</p>
                        <p>Intern at Bengaluru</p>
                        <p>Intern at Delhi</p>
                        <p>Intern at Mumbai</p>
                        <p>View all Internships</p>
                    </div>
                </div>
            )}
            {isDivVisibleForJob && (
                <div className="profile-dropdown-1" onMouseEnter={showJobs} onMouseLeave={hideJobs}>
                    <div className="left-section">
                        <p>Top Locations</p>
                        <p>Profile</p>
                        <p>Top Category</p>
                        <p>Explore More Jobs</p>
                    </div>
                    <div className="line flex bg-slate-400"></div>
                    <div className="right-section">
                        <p>Work from Home</p>
                        <p>Jobs at Delhi</p>
                        <p>Jobs at Bengaluru</p>
                        <p>Jobs at Pune</p>
                        <p>View all Jobs</p>
                    </div>
                </div>
            )}
            {isDivVisibleForLogin && (
                <div className="login">
                    <button id='cross' onClick={closeLogin}><i className="bi bi-x"></i></button>
                    <h5 id='state' className='mb-4 justify-center text-center'>
                        <span id='Sign-in' style={{ cursor: "pointer" }} className={`auth-tab ${isStudent ? 'active' : ''}`} onClick={setFalseForStudent}>
                            Student
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span id='join-in' style={{ cursor: "pointer" }} className={`auth-tab ${!isStudent ? 'active' : ''}`} onClick={setTrueForStudent}>
                            Employee and T&P
                        </span>
                    </h5>
                    {isStudent ? (
                        <div className="py-6">
                            <div className="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                                <div className="w-full p-8 lg:w-1/2">
                                    <p onClick={loginFunction} className='flex items-center h-9 justify-center mt-4 text-white bg-slate-100 rounded-lg hover:bg-gray-100'>
                                        <div className="px-4 py-3">
                                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                                <path d="M20 36.6667C24.305 36.6667 28.2242 35.0175 31.1792 32.3417L26.0483 27.9267C24.3125 29.3583 22.195 30.1667 20 30.1667C15.6683 30.1667 11.9875 27.395 10.6025 23.5375L5.16663 27.7433C7.91579 32.9517 13.505 36.6667 20 36.6667Z" fill="#4CAF50" />
                                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7725 25.1367 27.6333 26.7083 26.0475 27.9267L26.0483 27.9263L31.1792 32.3413C30.8158 32.6733 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                            </svg>
                                        </div>
                                        <h1 id='sign' className="border border-gray-600 w-full text-center">Sign in with Google</h1>
                                    </p>
                                    <p id='acc'>
                                        Don't have an account? <a href='/register' id='reg' className="text-blue-500 font-bold">Register</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="py-6">
                            <div className="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                                <div className="w-full p-8 lg:w-1/2">
                                    <p onClick={loginFunction} className='flex items-center h-9 justify-center mt-4 text-white bg-slate-100 rounded-lg hover:bg-gray-100'>
                                        <div className="px-4 py-3">
                                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                                <path d="M20 36.6667C24.305 36.6667 28.2242 35.0175 31.1792 32.3417L26.0483 27.9267C24.3125 29.3583 22.195 30.1667 20 30.1667C15.6683 30.1667 11.9875 27.395 10.6025 23.5375L5.16663 27.7433C7.91579 32.9517 13.505 36.6667 20 36.6667Z" fill="#4CAF50" />
                                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7725 25.1367 27.6333 26.7083 26.0475 27.9267L26.0483 27.9263L31.1792 32.3413C30.8158 32.6733 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                            </svg>
                                        </div>
                                        <h1 id='sign' className="border border-gray-600 w-full text-center">Sign in with Google</h1>
                                    </p>
                                    <p id='acc'>
                                        Don't have an account? <a href='/register' id='reg' className="text-blue-500 font-bold">Register</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {isDivVisibleForProfile && (
                <div className="profile-dropdown-3" onMouseEnter={showProfile} onMouseLeave={hideProfile}>
                    <div className="left-section">
                        <p>Profile</p>
                        <p>Profile</p>
                        <p>Profile</p>
                        <p>Profile</p>
                    </div>
                    <div className="line flex bg-slate-400"></div>
                    <div className="right-section">
                        <p>Profile</p>
                        <p>Profile</p>
                        <p>Profile</p>
                        <p>Profile</p>
                        <p>Profile</p>
                    </div>
                </div>
            )}
            <div className="bar">
                <Sidebar />
            </div>
        </div>
    );
}

export default Navbar;


