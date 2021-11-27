import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://sleepy-peak-71196.herokuapp.com/car', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Service Add Successfully!');
                reset();}
            console.log(res);
            
        })
    };
    return (
        <div className="add-car">
            <h2 className="text-center text-primary p-3">Add A New Car!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("key")} placeholder="Set A Unique Key" />
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Enter Car Name" />
                <input {...register("about")} placeholder="Details About Car" />
                <input {...register("rating")} placeholder="Rate Car Out Of 5" />
                <input {...register("seats")} placeholder="Number Of Seats" />
                <input {...register("price")} placeholder="Car Price" />
                <input {...register("img")} placeholder="Enter A Image URL" />   
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddCar;