import React from 'react';

const ShowOrder = ({ order }) => {
    const { name, image, email } = order;
    return (
        <div>
            <div className="">
                <div className="row container services">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="service p-3 border border m-2">
                            <div className="service-img">
                                <img className="w-100" src={image} alt="" />
                            </div>
                            <h1>{name}</h1>
                            <p>{email}</p>
                            {" "}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowOrder;