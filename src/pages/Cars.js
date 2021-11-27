import React from 'react';
import useAuth from '../hooks/useAuth';
import Bounce from 'react-reveal/Bounce';
import { Container } from 'react-bootstrap';
import Car from '../components/car/Car';

const Cars = () => {
    const {cars} = useAuth();
    return (
        <div style={{backgroundColor: "rgb(106, 175, 255)"}}>
            <div className="text-center">
                <Bounce left cascade>
                    <h1 className="text-white pt-4">All Brand New Cars</h1>
                </Bounce>
                <Bounce right cascade>
                    <p className="mb-0 p-3 text-white fs-5">A Car is not going to change your life, but it will definitely change your attitude.</p>
                </Bounce>
            </div>
            <Container>
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        cars.map((car) => ( <Car
                            key={car.key}
                            car={car}/> ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Cars;