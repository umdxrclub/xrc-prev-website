import React from 'react'

function EventCard(props) {

  // Function for getting the suffix of a date's day
	var getDateSuffix = function(num) {
		if (num > 3 && num < 21) {
			return 'th';
		} else if (num % 10 === 1) {
			return 'st';
		} else if (num % 10 === 2) {
			return 'nd';
		} else if (num % 10 === 3) {
			return 'rd';
		} else {
			return 'th';
		}
	}


  var getNiceDayDateString = function(date) {
		var str = date.toLocaleDateString('en-US', {weekday : 'long', month : 'long', day : 'numeric'});
		str += getDateSuffix(parseInt(str.match(/\d+$/g).sort((a,b) => b.length-a.length)[0])) + ', ' + (date.getYear() + 1900);
		return str;
	}

  const action = (props.color == "red") ? "RSVP" : "VIEW EVENT"

  return (
    <div className={`card event-card action ${props.color}-glass`}>
        {
          props.image ? <img className="card-header-image" src={`images/events/${props.image}`}></img> : null
        }
        <p className="card-header">{props.name.toUpperCase()}</p>
        <p className="event-location text-align-center">{props.location}</p>
        <p className="event-date text-align-center">{getNiceDayDateString(props.date)} @ {props.time}</p>
        <div className="card-button-container">
          <a href={props.url} className={`button card-action-button white bg-${props.color}`} 
            target="_blank" rel="noopener noreferrer">{action}</a>
        </div>
    </div>
  );
}

export default EventCard;