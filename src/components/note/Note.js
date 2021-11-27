import React from 'react';
import './Note.css';

const Note = () => {
    return (
        <div>
            <div className="form-bg">
            <section className="container form-area">
            <h1 className="text-center title-text text-area">Write Your <span class="text-color"> Questions Or Qureys!</span></h1>
            <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email Address" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Comment Here</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Write Your Comment Here" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </section>
            </div>
        </div>
    );
};

export default Note;