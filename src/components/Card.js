import React from 'react'
import {Link} from 'react-router-dom';

function Card() {
  if (props.type == "overview") {
    return (
      <div class="card card-tall pink-glass">
          <img className="card-icon" src="{props.icon}"/>
          <p className="card-header">{props.title}</p>
          <p className="card-subheader">{props.subtitle}</p>
          <p className="text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="card-action-button">EXPLORE</div>
      </div>
    );
  } else if(props.type == "event") {

  }
}

export default Card;