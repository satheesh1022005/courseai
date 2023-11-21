
import Navbar from '../../components/Navbar';
import './dash.css';

function Dash() {
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="w-75">
                        <div className="w-100 menus">
                            <div className='menu'>
                                <span style={{ fontSize: '1.5em' }}>Home</span>
                            </div>
                            <div className='menu'>
                                <span style={{ fontSize: '1.5em' }}>Profile</span>
                            </div>
                            <div className='menu'>
                                <span style={{ fontSize: '1.5em' }}>Analytics</span>
                            </div>
                            <div className='menu'>
                                <span style={{ fontSize: '1.5em' }}>Top courses</span>
                            </div>
                            <div className='menu'>
                                <span style={{ fontSize: '1.5em' }}>Path Finder</span>
                            </div>
                            <div className='menu'>
                                <span style={{ fontSize: '1.5em' }}>Help</span>
                            </div>
                            <div className='menu'>
                                <span style={{ fontSize: '1.5em' }}>About us</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-25 w-75 text-white p-2">
                    <div className="bg-dark search p-2 w-100">Search</div>
                    <div className="w-100 text-white row grid search" style={{ marginLeft: '300px' }}>
                        <div className="course-box a1" style={{ width:'480px' }}>
                            <h3>Artificial Intelligence</h3>
                            <p>Description for Course 1</p>
                        </div>
                        <div className="course-box a2"  style={{ width:'480px' }}>
                            <h3>Frontend Development</h3>
                            <p>Description for Course 2</p>
                        </div>
                        <div className="course-box a3"  style={{ width:'480px' }}>
                            <h3>Database</h3>
                            <p>Description for Course 3</p>
                        </div>
                        <div className="course-box a4" style={{ width:'480px' }}>
                            <h3>Backend Development</h3>
                            <p>Description for Course 1</p>
                        </div>
                        <div className="course-box a5"  style={{ width:'480px' }}>
                            <h3>Software developer</h3>
                            <p>Description for Course 2</p>
                        </div>
                        <div className="course-box a6"  style={{ width:'480px' }}>
                            <h3>Cloud computing</h3>
                            <p>Description for Course 3</p>
                        </div>
                        <div className="course-box a7" style={{width:'480px'}}>
                            <h3>Block chain</h3>
                            <p>Description for Course 1</p>
                        </div>
                        <div className="course-box a8"  style={{ width:'480px'}}>
                            <h3>Mysql</h3>
                            <p>Description for Course 2</p>
                        </div>
                        <div className="course-box a9"  style={{width:'480px'}}>
                            <h3>Amazon web service</h3>
                            <p>Description for Course 3</p>
                        </div>
                        <div className="course-box a10"  style={{width:'480px'}}>
                            <h3>Microsoft azure</h3>
                            <p>Description for Course 3</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Dash;







