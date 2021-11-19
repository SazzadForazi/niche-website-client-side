import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">

                    <div className="col-md-6">
                        <h4 className="title">
                            Shifting the power from insurance companies to drivers.
                        </h4>
                        <h2 className="text-white text-center mt-3">
                            CALL US TODAY! <br />
                            +123558445
                        </h2>

                        <button className="mt-3 about-btn">Make Sure</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;