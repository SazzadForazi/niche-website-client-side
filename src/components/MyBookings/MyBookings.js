import React, { useEffect } from 'react';
import useFirebase from '../../Hook/useFirebase';
import './MyBookings.css'
const MyBookings = () => {
    const { user } = useFirebase();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [user?.email]);

    return (
        <div>
            <h1>Booking</h1>
        </div>
    );
};

export default MyBookings;