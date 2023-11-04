import React from 'react';
import '../style/style.css';
import '../assets/style/controls.css';


export default class Controls extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
   return (
      <div className ='controls'>

      <input className='pairs' type='number'
      max={8}
      min={1}
      value={this.props.paires}
      onChange={this.props.updatePairs}
      />
      </div>
    )


}
}
