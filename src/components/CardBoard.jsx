import React from 'react';
import Card from './Card.jsx';
import '../style/style.css';
import '../assets/style/cardBoard.css';



/*
 define root component
*/
export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    const list=this.props.allCards.map(elm=><Card description = {elm.description} src={elm.src} key={elm.id} showCard={this.props.showCard}  />)
    return (
      <div className='card'>{list}</div>
    );
  }
}
