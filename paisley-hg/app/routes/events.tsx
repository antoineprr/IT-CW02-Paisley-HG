import { useLoaderData, Link } from "react-router";
import { loader } from "./events.server";
export { loader }

export default function EventsList() {
  const events = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Events</h1>
      {events.map((e: any) => (
        <div key={e._id} style={{ border: "1px solid #ddd", padding: 12 }}>
          <h3>{e.name}</h3>
          <p>{e.category}</p>
          <p>{new Date(e.date).toLocaleString()}</p>
          <Link to={`/events/${e._id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
}
