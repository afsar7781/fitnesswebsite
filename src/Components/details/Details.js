import React from 'react'
import "./details.css"
const Details = () => {
  return (
    <>
    <div className="container details">
        <div className="row">
            <div className="col-sm-5">
                <h1>There is no tomorrow</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt necessitatibus possimus sint assumenda vel voluptate enim in, ducimus, optio ex neque fuga cumque accusamus consequatur nemo, impedit architecto 
                    <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt velit, illo sint ipsam nam atque quos officiis fugit nemo iusto dolores sequi. Facere aspernatur velit repudiandae quas, eaque cupiditate.
                </p>
                <button className="btn">View more</button>
            </div>
            <div className="offset-sm-2 col-sm-5">
                <img src="./img/gymfit.jpg" alt="" />
            </div>
        </div>
    </div> 
    </>
  )
}

export default Details