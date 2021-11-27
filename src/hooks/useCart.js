import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";


const useCart = () => {

    const { user } = useFirebase();
    const { uid, displayName, email } = user;
    const [selectedCar, setSelectedCar] = useState([]);

     useEffect(()=>{
        fetch(`https://sleepy-peak-71196.herokuapp.com/cart/${uid}`)
        .then(res => res.json())
        .then(data => {
            if(data.length){
                setSelectedCar(data);
            }
        })
     },[uid]);



    function addToCart(car) {
        const isHave = selectedCar.find(selected=>selected._id === car._id);
        delete car._id;
        car.uid = uid;
        car.name = displayName;
        car.email = email;
        car.status = 'pending';

        if(isHave){
            alert('This Car Already Selected!')
        }else{
            fetch('https://sleepy-peak-71196.herokuapp.com/car/add', {
                method: 'post',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(car)
            })
            .then(res=>res.json())
            .then(data => {
                if(data.insertedId){
                    const newSelection = [...selectedCar, car];
                    setSelectedCar(newSelection);
                }
            })
        }
    }
    function remove(id){
        fetch(`https://sleepy-peak-71196.herokuapp.com/delete/${id}`, {
            method: "delete",
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
                const selectRemove = selectedCar.filter((car) => car._id !== id);
                setSelectedCar(selectRemove);
            }else{
                alert('Somethig Worng!')
            }
        });
    }

    return {
        setSelectedCar, addToCart, selectedCar, remove
    }
};

export default useCart;