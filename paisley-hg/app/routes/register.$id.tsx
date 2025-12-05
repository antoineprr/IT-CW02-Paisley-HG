import { Form, useLoaderData, useActionData, Link } from "react-router";
import { loader, action } from "./register.$id.server";
export { loader, action }

export default function Register() {
  const event = useLoaderData<typeof loader>();
  const result = useActionData() as any;

  if (!event) {
    return (
      <div className="content-wrapper">
        <div className="empty-state">
          <h1>Event not found</h1>
          <p>The event you're trying to register for doesn't exist.</p>
          <Link to="/events" className="btn btn-primary">Browse Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <div className="register-container">
        <header className="register-header">
          <h1>Register for Event</h1>
          <div className="event-summary">
            <h2>{event.name}</h2>
            {event.date && (
              <p className="event-date">
                {new Date(event.date).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
            {event.location && <p className="event-location">{event.location}</p>}
          </div>
        </header>

        {result?.ok && (
          <div className="success-message">
            <p>Registration successful! You will receive a confirmation email shortly.</p>
          </div>
        )}

        <div className="register-form">
          <Form method="post" className="form">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input 
                id="firstName"
                name="firstName" 
                type="text"
                required 
                className="form-input"
                placeholder="Enter your first name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input 
                id="lastName"
                name="lastName" 
                type="text"
                required 
                className="form-input"
                placeholder="Enter your last name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                id="email"
                name="email" 
                type="email"
                required 
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="club" className="form-label">Club/Organization (Optional)</label>
              <input 
                id="club"
                name="club" 
                type="text"
                className="form-input"
                placeholder="Your club or organization name"
              />
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Complete Registration
              </button>
              <Link to={`/events/${event._id}`} className="btn">
                Back to Event
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
