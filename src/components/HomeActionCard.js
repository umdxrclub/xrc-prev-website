import React from 'react'
import {Link} from 'react-router-dom';

function HomeActionCard(props) {

  /* Alternate card colors */
  const color = (props.id % 2 == 0) ? "red" : "purple";

  return (
    <div className={`card action ${color}-glass`}>
        <img className="card-icon" src={props.icon} alt=""/>
        <p className="card-header">{props.title}</p>
        <p className="text-align-center">{props.description}</p>
        <Link to={props.link} className={`button card-action-button white bg-${color}`}>{props.action}</Link>
    </div>
  );
}

export default HomeActionCard;