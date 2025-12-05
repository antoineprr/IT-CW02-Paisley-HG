import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    {
      name: "description",
      content: "About Paisley Highland Games - Traditional Scottish Competition",
    },
  ];
};

export default function About() {
  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">About Paisley Highland Games</h1>
        <p className="hero-subtitle">
          Celebrating Scottish heritage through traditional athletic competition and cultural events.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Our History</h2>
          </div>
          <div className="card-body">
            <p>
              The Paisley Highland Games have been a cornerstone of Scottish cultural 
              celebration for generations. Our event brings together athletes, musicians, 
              and dancers to compete in traditional Highland sports.
            </p>
            <p className="mt-sm">
              From the ancient art of caber tossing to the melodic competitions of 
              pipe bands, we preserve and celebrate the rich traditions of Scotland.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Events & Competitions</h2>
          </div>
          <div className="card-body">
            <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Athletic Events:</h3>
            <ul style={{marginBottom: '1rem', lineHeight: '1.6'}}>
              <li>Caber Toss</li>
              <li>Hammer Throw</li>
              <li>Stone Put</li>
              <li>Weight for Distance</li>
              <li>Sheaf Toss</li>
            </ul>
            
            <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Cultural Events:</h3>
            <ul style={{lineHeight: '1.6'}}>
              <li>Pipe Band Competitions</li>
              <li>Highland Dancing</li>
              <li>Traditional Music</li>
              <li>Scottish Heritage Displays</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card mt-lg">
        <div className="card-header">
          <h2 className="card-title">Join Us</h2>
        </div>
        <div className="card-body">
          <p>
            Whether you're a competitor, spectator, or simply interested in Scottish culture, 
            the Paisley Highland Games welcomes everyone. Experience the strength, skill, 
            and spirit of Highland tradition in the heart of Paisley.
          </p>
          <div className="mt-md">
            <a href="/events" className="btn btn-primary" style={{marginRight: '1rem'}}>View Events</a>
            <a href="/tickets" className="btn btn-secondary">Get Tickets</a>
          </div>
        </div>
      </div>
    </div>
  );
}