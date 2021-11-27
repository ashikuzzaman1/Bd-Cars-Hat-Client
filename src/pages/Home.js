import React from 'react';
import { Container, TabContainer } from 'react-bootstrap';
import slide from './../assets/images/slide.jpg';
import Bounce from 'react-reveal/Bounce';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Car from '../components/car/Car';
import Note from '../components/note/Note';
import Reviews from '../components/reviews/Reviews';

const Home = () => {
    const {cars} = useAuth();
    return (
        <div style={{backgroundColor: "rgb(106, 175, 255)"}}>
            <div 
                style={{ background: `url(${slide})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}
            >
                <Container>
                    <div
                        style={{height: "90vh"}}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center my-5 py-5">
                            <Bounce left cascade>
                                <h1 className="text-white p-2" style={{backgroundColor: "rgba(73, 156, 251, 0.938)", borderRadius: "20px"}}>Start your car and take a ride of it.</h1>
                            </Bounce>
                            <Bounce right cascade>
                                <p  className="text-white p-2 my-4 fs-5" style={{backgroundColor: "rgba(73, 156, 251, 0.938)", borderRadius: "20px"}}>Everything in this world is continuously upgrading… Let’s upgrade our Car.</p>
                            </Bounce>
                            <Bounce>
                                    <NavLink to='/cars' className="btn btn-primary rounded-pill text-white fs-5 py-2 px-4"
                                        variant="primary">
                                            View All Cars
                                    </NavLink>
                            </Bounce>
                        </div>
                    </div>
                </Container>
            </div>
            <div style={{backgroundColor: "rgb(106, 175, 255)"}}>
                <Container>
                    <div className="text-center text-white">
                        <Bounce left cascade>
                            <h1 className="pt-3">Best Cars Ever!</h1>
                        </Bounce>
                        <Bounce right cascade>
                            <p className="mb-0 p-3 fs-5">A Car is not going to change your life, but it will definitely change your attitude.</p>
                        </Bounce>
                    </div>
                    <div style={{backgroundColor: "rgb(106, 175, 255)"}}>
                        <Container>
                            <div className="d-flex flex-wrap justify-content-between">
                                {
                                    cars.slice(0,6)?.map((car) => ( <Car
                                        key={car.key}
                                        car={car}/> ))
                                }
                            </div>
                        </Container>
                    </div>
                </Container>
            </div>
            <Container>
                <h1 className="text-center text-white p-3">Client Reviews</h1>
                <Reviews/>
            </Container>
            <Note/>
        </div>
    );
};

export default Home;