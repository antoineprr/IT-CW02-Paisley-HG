import { useLoaderData, Link } from "react-router";
import { loader } from "./events.$id.server";
export { loader }

export default function EventDetail() {
  const event = useLoaderData<typeof loader>();

  if (!event) {
    return (
      <div className="content-wrapper">
        <div className="empty-state">
          <h1>Event not found</h1>
          <p>The event you're looking for doesn't exist.</p>
          <Link to="/events" className="btn btn-primary">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <div className="event-detail">
        <header className="event-detail-header">
          <h1 className="event-title">{event.name}</h1>
          {event.category && (
            <span className="event-category">{event.category}</span>
          )}
        </header>
        
        <div className="event-content">
          <div className="event-meta">
            {event.date && (
              <div className="meta-item">
                <strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
            {event.location && (
              <div className="meta-item">
                <strong>Location:</strong> {event.location}
              </div>
            )}
          </div>
          
          {event.description && (
            <div className="event-description">
              <h2>About this event</h2>
              <p>{event.description}</p>
            </div>
          )}
        </div>
        
        <div className="event-actions">
          <Link to={`/register/${event._id}`} className="btn btn-primary">
            Register for this event
          </Link>
          <Link to="/events" className="btn">
            Back to all events
          </Link>
        </div>
      </div>
    </div>
  );
}
