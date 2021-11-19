import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hook/useFirebase';
import './MyBookings.css'
import ShowOrder from './ShowOrder';
const MyBookings = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

    return (
        <div>
            <h1>Bookings: {orders.length}</h1>
            {orders.map(order => <ShowOrder order={order} key={order._id} />)}
        </div>
    );
};

export default MyBookings;