import React from 'react';
import Slide from 'react-reveal/Slide';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-area">
            <Slide left cascade>
                    {/* contact area start */}
                    <div className="contact-container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2><i class="fas fa-laptop-house"></i> Head Office:</h2>
                                <p>Bd Cars Hat<br /> Momtaz Plaza (4th Floor) House#7,<br /> Road#4, Dhanmondi, Dhaka-1205</p>
                            </div>
                            <div className="col-md-4">
                                <h2><i class="fas fa-phone-square"></i> Phone:</h2>
                                <p>+88014785236</p><br />
                                <p>+88097546121</p><br />
                                <p>+88085424248</p>
                            </div>
                            <div className="col-md-4">
                                <h2><i class="fas fa-envelope-square"></i> Mail:</h2>
                                <p>bdcarshat@gmail.com</p><br />
                                <p>carshatbd@yahoo.com</p>
                            </div>
                        </div>
                    </div>
                    {/* contact area end */}
                </Slide>
        </div>
    );
};

export default Contact;