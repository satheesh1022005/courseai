import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Profile from  "../../src/asset/profile.png";
import "./Navbar.css";
import {useState} from 'react';
import {Link} from 'react-router-dom';
let name="RAMESH KUMAR M ";
let gender="Male";
let age="23";
let qualify="Student";
let email="ramesh@gmail.com";
let phone="987654321";

const Navbar = () => {
    return (
        <>
            <div className="navbar text-center p-0">
                <div className="container-fluid d-flex flex-column  h-100">
                    <div className="d-flex align-items-baseline  p-4 name">
                        <span className=" pb-2 underline">COURSE <ss>AI</ss></span>
                    </div>
                    <div className="d-flex align-items-center  flex-column">
                        <div className="profile">
                            <img src={Profile}></img>
                        </div>
                        <div className="p-3 pt-5 d-flex flex-column item">
                            <a className="text-decoration-none  active">{name}</a>
                            <a className="fw-bolder text-decoration-none ">Profession : {qualify}</a>
                            <a className="fw-bolder text-decoration-none ">Gender : {gender}</a>
                            <a className="fw-bolder text-decoration-none ">Age : {age}</a>
                            <a className="fw-bolder text-decoration-none ">{email}</a>
                            <a className="fw-bolder text-decoration-none ">{phone}</a>
                        </div>
                    </div>
                    <div className="p-3 pb-5 sign">
                        <Link to='/profile'>
                        <button>
                            PROFILE
                        </button>
                        </Link>
                        <Link to='/dashboard'>
                        <button>
                            DASH_BOARD
                        </button>
                        </Link>
                    </div>
                
                </div>
            </div>
        </>
    );
}
export default Navbar;