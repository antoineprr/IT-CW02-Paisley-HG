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
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Welcome to Paisley Highland Games</h1>
        <p className="hero-subtitle">
          Experience the tradition and strength of Scottish Highland athletics. 
          Join us for a day of competition, culture, and community in beautiful Paisley.
        </p>
        <RouterLink to="/events" className="hero-cta">
          View Events
        </RouterLink>
      </div>

      {/* Features Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Traditional Events</div>
          <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>Caber toss, hammer throw, stone put, and more</p>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">Pipe Band Competitions</div>
          <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>Highland bagpipe and drumming contests</p>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">Highland Dancing</div>
          <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>Traditional Scottish dance performances</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Quick Actions</h2>
        </div>
        <div className="card-body">
          <div className="grid grid-2">
            <RouterLink to="/events" className="btn btn-primary">
              Browse Events
            </RouterLink>
            <RouterLink to="/dashboard" className="btn btn-secondary">
              View Dashboard
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-2 mt-lg">
        <div className="card">
          <div className="card-body">
            <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>Highland Events</h3>
            <ul style={{fontSize: '0.9rem', lineHeight: '1.8'}}>
              <li>Caber Toss - The ultimate test of strength</li>
              <li>Hammer Throw - Traditional Scottish athletics</li>
              <li>Stone Put - Ancient Highland competition</li>
              <li>Weight for Distance - Power and technique</li>
              <li>Sheaf Toss - Farmer's strength event</li>
            </ul>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>Festival Features</h3>
            <p style={{fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6'}}>
              The Paisley Highland Games celebrates Scottish heritage with traditional 
              athletic competitions, music, dancing, and cultural exhibitions.
            </p>
            <RouterLink to="/about" className="btn btn-outline">
              Learn More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
}