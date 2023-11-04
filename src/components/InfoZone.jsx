import React from 'react';
import '../style/style.css';
import '../assets/style/infoZone.css';


export default class InfoZone extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
   return (
      <div className ='infoZone'>
       <div className='remaining'>paires left :{this.props.paires - this.props.score} </div>
       <div className='last'>description :{this.props.Description}</div>
        <div className='flips'>tentatives={this.props.tentatives}</div> 
        <div className='score'>score={this.props.score} </div>
    </div>
  );
}
}
