
import './Profile.css';
import pic from '../asset/pic.jpg';
import ParentComponent from '../components/Parent';
function Profile() {
    let name="RAMESH KUMAR M ";
let gender="Male";
let age="23";
let qualify="Student";
let email="ramesh@gmail.com";
let phone="987654321";
    return(
        <div>
            <div className='container-fluid first row'>
                <div className='col-4 column fir'>
                    <div className='pic'><img src={pic}></img></div>
                    <div className='col-4 basic bg-dark text-white'>
                    <div className="p-3 pt-5 d-flex flex-column item">
                            <a className="text-decoration-none  active" id="name">{name}</a>
                            <a className="fw-bolder text-decoration-none ">Profession : {qualify}</a>
                            <a className="fw-bolder text-decoration-none ">Gender : {gender}</a>
                            <a className="fw-bolder text-decoration-none ">Age : {age}</a>
                            <a className="fw-bolder text-decoration-none ">{email}</a>
                            <a className="fw-bolder text-decoration-none ">{phone}</a>
                        </div>
                    </div>
                </div>
                <div className='col-6 objective'>
                <div className='bg-dark obj'><h2>Objective:</h2>
                <p>
                I am Satheesh, an individual consistently driven by curiosity, eager to embrace novel technologies and willing to take calculated risks in order to craft innovative solutions. My enthusiasm lies in the pursuit of becoming a software developer, focused on creating impactful solutions for various challenges.
                </p>
                </div>
                <div className='m-5 text-dark graphs w-100'>
                    <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Introduction to Computer science and programming</span>
                        <ParentComponent a={0}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">DSA</span>
                        <ParentComponent a={60}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Computer Organisation</span>
                        <ParentComponent a={40}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Operating System</span>
                        <ParentComponent a={20}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Database</span>
                        <ParentComponent a={60}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Software Engineering</span>
                        <ParentComponent a={40}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Web Development</span>
                        <ParentComponent a={60}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Artificial Intelligence</span>
                        <ParentComponent a={70}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Cybersecurity</span>
                        <ParentComponent a={20}/></div>
                        <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Human Computer Interaction</span>
                        <ParentComponent a={0}/></div>
                </div>
                </div>
                
                
            </div>

        </div>
    );
}
export default Profile;