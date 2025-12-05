import { useLoaderData, Link } from "react-router";
import { loader } from "./events.server";
export { loader }

export default function EventsList() {
  const events = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="event-grid">
        {events.map((e: any) => (
          <div key={e._id} className="event-card">
            <div className="event-header">
              <h3 className="event-title">{e.name}</h3>
              <p className="event-date">{new Date(e.date).toLocaleDateString()}</p>
            </div>
            <div className="event-body">
              <p className="event-location">{e.location}</p>
              {e.description && <p>{e.description}</p>}
              <div style={{marginTop: '1rem'}}>
                <Link to={`/events/${e._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}