import React, { createContext } from 'react';
import useCar from '../hooks/useCar';
import useCart from '../hooks/useCart';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    
    //hooks
    const AllContexts = useFirebase();
    const {cars} = useCar();
    const {addToCart, selectedCar, remove, setSelectedCar} = useCart();

    const data = {
        AllContexts, cars, addToCart, selectedCar, remove, setSelectedCar
    };
    return (
        <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
    );

};

export default AuthProvider;