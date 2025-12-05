import { useLoaderData, Link } from "react-router";
import { loader } from "./events.$id.server";
export { loader }

export default function EventDetail() {
  const event = useLoaderData<typeof loader>();

  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <Link to={`/register/${event._id}`}>Register</Link>
    </div>
  );
}
