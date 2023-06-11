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


  let getNiceDayDateString = function(date) {
		let str = date.toLocaleDateString('en-US', {weekday : 'long', month : 'long', day : 'numeric'});
		str += getDateSuffix(parseInt(str.match(/\d+$/g).sort((a,b) => b.length-a.length)[0])) + ', ' + (date.getYear() + 1900);
		return str;
	}

  let getDirections = function(location) {
    if (location == "AVW 3258") {
      return "https://xr.umd.edu/lab#vis-studio"
    } else if (location == "IRB 0110") {
      return "https://xr.umd.edu/lab#imd-lab"
    } else {
      return "https://xr.umd.edu/lab/"
    }
  }

  const action = (props.color == "red") ? "RSVP" : "VIEW EVENT"
  
  return (
    <div className={`card event-card action ${props.color}-glass`}>
        {
          props.image ? <img className="card-header-image" src={`images/events/${props.image}`} alt=""></img> : 
            ( props.youtube_id ? 
              <div className="card-header-video">
                  <iframe src={`https://www.youtube.com/embed/${props.youtube_id}`} title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen className="event-video"></iframe> 
              </div>
            : "")
        }
        <p className="card-header">{props.name.toUpperCase()}</p>
        <p className="event-location text-align-center">{props.location}</p>
        <p className="event-date text-align-center">{getNiceDayDateString(props.date)} @ {props.time}</p>
          <a href={props.url} className={`button card-action-button white bg-${props.color}`} 
            target="_blank" rel="noopener noreferrer">{action}</a>
        {
          ( props.color == "red" ? 
              <a href={getDirections(props.location)} className={`button card-action-button white bg-${props.color}`} 
                target="_blank" rel="noopener noreferrer">DIRECTIONS</a>
            :
            <span></span>
          )
        }
    </div>
  );
}

export default EventCard;