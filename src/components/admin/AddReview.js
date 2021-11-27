import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://sleepy-peak-71196.herokuapp.com/review', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Service Add Successfully!');
                reset();
            console.log(res);
            }
        })
    };
    return (
        <div className="add-review">
            <h2 className="text-center text-primary p-3">Add A Review!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("key")} placeholder="Set A Unique Key" />
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Enter Your Name" />
                <input {...register("about")} placeholder="Enter Your Comment Here!" />
                <input {...register("img")} placeholder="Set Your Image URL" />   
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;