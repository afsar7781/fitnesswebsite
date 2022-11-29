import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <>
        <section>
            <div className="header">
                <div>
                    <div className="img">
                        <img src="./img/slider3.jpg" alt="" />
                    </div>
                    <div className="Overlay"></div>
                </div>
                <div className="content">
                    <h6>Build Your Fitness World <br />By Building Your Body</h6>
                    <button className='btn'>Join now</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header