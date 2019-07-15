import React , {Component} from 'react'
import Card from './Cardsui'

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

class Cards extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={};
    // }
    render(){
  return(

<div className="container-fluid d-flex justify-content-center">

<div className="row">

<div className="col-md-4">
<Card imgsrc ={img1} title = 'Maria'/>

</div>
<div className="col-md-4">
<Card imgsrc ={img2} title = 'Amilie'/>
</div>
<div className="col-md-4">
<Card imgsrc ={img3} title = 'Jackson'/>
</div>


</div>



</div>




  );

    }
}

export default Cards;