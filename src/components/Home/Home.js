import React from 'react';
import Review from '../Review/Review';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Service from '../Service/Service';
const Home = () => {
    return (
        <div>
            <h1>WonderCar</h1>
            <Banner></Banner>
            <Service></Service>
            <Products></Products>
            <Contact></Contact>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;