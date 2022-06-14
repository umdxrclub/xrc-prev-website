/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import EventCard from '../components/EventCard';
import { FOOTER, EVENT_PAGE } from '../XR_CONSTANTS';

function Events() {

    const upcoming = [];
    const past = [];
    const now = new Date();

    // Determine if event is upcoming or past
    EVENT_PAGE.EVENTS_INFORMATION.forEach(ev => {

        let eventDate = ev.date;
        let eventTime = ev.time;

        try {
            // Add hours and minutes to event date
            let timeSplit = eventTime.split(" ");
            let clockTime = eventTime.split(":");
            let hours = parseInt(clockTime[0]), minutes = parseInt(clockTime[1]);
            if (timeSplit[1] == "PM") {
                hours += 12;
            }
            eventDate.setHours(hours, minutes);
        } catch(err) { 
            // Time was formatted incorrectly, do nothing
        }

        if (now - eventDate > 0) {
            past.push(ev);
        } else {
            upcoming.push(ev);
        }

    });

    return (
        
        <div id="Events">
    
            <HalfBanner pageName="Events" headerImage="events" subheading={EVENT_PAGE.DESCRIPTION}/>

            <div className="section padding-small">

                <h2 className="text-align-right padding-small">UPCOMING EVENTS</h2>
                <div className="event-container">
                    {
                        (upcoming.length == 0) ? 
                            <div>
                                <p className="event-caption">No upcoming events this semester.</p> 
                                <p className="event-caption">Join our <a href={FOOTER.TERPLINK_STR} target="_blank"
                                    rel="noopener noreferrer">TerpLink</a> for notifications for future events.</p>
                            </div> 
                            : upcoming.map(ev => {
                                return <EventCard color="red"{...ev} />
                        })
                    }
                </div>

                {/* 
                <a className="button big white text-outline bg-black" 
                    href={FOOTER.TERPLINK_STR} target="_blank" rel="noopener noreferrer">
                    JOIN US ON TERPLINK
                </a>
                */}

                <div className="spacer"></div>
                <h2 className="padding-small">PAST EVENTS</h2>
                <div className="event-container">
                    {
                        (past.length == 0) ? <p className="event-caption">No events recorded this semester.</p> : past.map(ev => {
                            return <EventCard color="purple"{...ev} />
                        })
                    }
                </div>
                <p className="event-caption">View a full archive of our past events on <a 
                    href={FOOTER.TERPLINK_STR} target="_blank" rel="noopener noreferrer">TerpLink</a>.</p>
            </div>

        </div>

    );
}

export default Events;