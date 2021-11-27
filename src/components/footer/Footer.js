import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // footer area style start
        <div className="footer-area">
            <div className="">
                <div className="row">
                    {/* footer contact area start  */}
                    <div className="col-md-3">
                        <h2><i class="fas fa-id-card"></i> Contact Us</h2>
                        <hr />
                        <h4>Head Office:</h4>
                        <p><b>BD-Cars-Hat</b> <br /> Momtaz Plaza (4th Floor)<br /> House#7,<br /> Road#4,<br /> Dhanmondi,<br /> Dhaka-1205</p>
                    </div>
                    {/* footer mail area start */}
                    <div className="query-area col-md-6">
                        <h1><i class="fas fa-envelope-open-text"></i> Mail Us For <br /> More Informaion</h1>
                        <div class="input-group mb-3 w-75 mx-auto">
                            <input type="text" class="form-control" placeholder="Write here for more information" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <button type="button" class="btn btn-info">Submit</button>
                        <h2 className="followus-area">Follow Us</h2>
                        <div className="follow-area">
                            <h3><a href=""><i class="fab fa-facebook-square"></i></a></h3>
                            <h3><a href=""><i class="fab fa-youtube"></i></a></h3>
                            <h3><a href=""><i class="fab fa-twitter-square"></i></a></h3>
                        </div>
                    </div>
                    {/* footer link area start */}
                    <div className="quicklink-area col-md-3">
                        <h2><i class="fas fa-external-link-square-alt"></i> Quick Links</h2>
                        <hr />
                        <h4><a href="">Gallery</a></h4><br />
                        <h4><a href="">Relax Life</a></h4><br />
                        <h4><a href="">Customer's Review</a></h4><br />
                        <h4><a href="">Join Us Now</a></h4><br />
                    </div>
                </div>
                {/* footer copyright area start */}
                <div class="copyright-area">
                <p>copyright © 2021 bd-cars-hat</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;