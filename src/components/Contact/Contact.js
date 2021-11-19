import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="form-container" id="contact">
                <div className="container">

                    <div className="row pb-4">
                        <div className="col">
                            <p className="text-white contact">If there is known any kind of information?
                            </p>
                        </div>
                    </div>
                    <form action="backend.php">
                        <div className="form-row pb-4">
                            <form className="col-md-6">
                                <label>
                                    <input className="form-control me-5" placeholder="Your Name" type="text" />
                                </label>

                            </form>
                            <div className="col-md-6">

                                <label>
                                    <input className="form-control me-5" placeholder="Your Email" type="text" />
                                </label>


                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-6">
                                <textarea name="" className="form-control inner-form" id="" cols="20" rows="7"
                                    placeholder="your Messege"></textarea>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col">
                                <button className='btn btn-primary' variant="btn bg-redtype  outline-success py-5">Send Messege</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;