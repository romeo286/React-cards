import React from 'react'
// import img1 from '../assets/img1.jpg'
import './Cards.css';

const Card = props => {
    return(

  <div className="card text-center">
  
  <div className="overflow">
  
  <img src={props.imgsrc} alt=" Iamge 1" className= 'card-img-top' height="200px" srcset=""/>
  
  
  </div>
  <div className="card-body text-dark">
  
  <h4 className ="card-title">
  {props.title}</h4>
  <p className="card-text text-secondary">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae porro ullam facilis rem ipsa nam placeat ex dignissimos! Natus, error.</p>
   <a href="#" className="btn btn-outline-primary">Go Anywhere</a>
  </div>
  
  
  </div>
    );
}

export default Card