import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer ">
                <div className="container py-5">
                    <div className="row">
                        <div className="col text-center text-white font-weight-bold">
                            <p><i>"Work hard in silence,let your succes be your noise"</i></p>
                            <h5>Frank Ocean</h5>
                        </div>
                    </div>

                    <div className="row pb-5">
                        <div className="col text-center">

                            <div className="circle-footer ">

                                <i class='fab fa-facebook-square'></i>


                            </div>
                            <div className="circle-footer ">


                                <i class="fab fa-github"></i>

                            </div>
                            <div className="circle-footer ">


                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-white text-center">
                            <p>&copy; All Right Resrved to Md Sazzad Forazi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;