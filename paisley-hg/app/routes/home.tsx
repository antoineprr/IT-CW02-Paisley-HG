import { type MetaFunction } from "react-router";
import { Link as RouterLink } from "react-router";

export const meta: MetaFunction = () => {
  return [
    {
      name: "description",
      content: "Paisley Highland Games",
    },
  ];
};

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">Welcome to Paisley Highland Games</h1>
        <p className="hero-subtitle">
          Experience the tradition and strength of Scottish Highland athletics. 
          Join us for a day of competition, culture, and community in Paisley.
        </p>
        <RouterLink to="/events" className="hero-cta">
          View Events
        </RouterLink>
      </div>

    </div>
  );
}