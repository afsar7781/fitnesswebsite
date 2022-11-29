import React from 'react';
import "./custom.css";
const Custom = () => {
  return (
    <>
<div className='custom container'>
    <div className="row">
        <div className="col-sm-4">
            <div className="box">
                <img src="./img/yoga.jpg" className='img-fluid' alt="" />
            </div>
        </div>
        <div className="col-sm-4">
            <img src="./img/zumba.jpg" alt="" />
        </div>
        <div className="col-sm-4">
            <img src="./img/trainer.jpg" alt="" />
        </div>
    </div>
</div>
    </>
  )
}

export default Custom