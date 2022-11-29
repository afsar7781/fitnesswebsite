import React from 'react'
import "./pricing.css";
const Pricing = () => {
  return (
    <>
<div className="pricing container">
    <div className="row">
        <div className="col-sm-4">
            <div className="box">
                <h6>
                    Basic
                </h6>
                <h5>$101</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur veniam porro, incidunt delectus blanditiis dolor voluptates perspiciatis ipsa dolorem esse? Perspiciatis quae nulla nemo quis debitis vel eos doloribus?</p>
                <button className="btn">Buy Now</button>
            </div>
        </div>
        <div className="col-sm-4 mid">
            <div className="box active">
                <h6>
                    Advance
                </h6>
                <h5>$201</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur veniam porro, incidunt delectus blanditiis dolor voluptates perspiciatis ipsa dolorem esse? Perspiciatis quae nulla nemo quis debitis vel eos doloribus?</p>
                <button className="btn">Buy Now</button>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="box">
                <h6>
                    Premium
                </h6>
                <h5>$301</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur veniam porro, incidunt delectus blanditiis dolor voluptates perspiciatis ipsa dolorem esse? Perspiciatis quae nulla nemo quis debitis vel eos doloribus?</p>
                <button className="btn">Buy Now</button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Pricing