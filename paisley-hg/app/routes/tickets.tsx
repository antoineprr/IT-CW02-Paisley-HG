import { Form, useActionData } from "react-router";
import { action } from "./tickets.server";
export { action }

export default function Tickets() {
  const result = useActionData() as any;

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Highland Games Tickets</h1>
        </div>
        <div className="card-body">
          <p>Purchase your tickets for the Paisley Highland Games and join us for a day of traditional Scottish competition.</p>
        </div>
      </div>

      {result?.ok ? (
        <div className="card">
          <div className="card-body text-center">
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Purchase Successful!</h2>
            <div className="card" style={{background: 'var(--cream-light)', border: '2px solid var(--festival-gold)'}}>
              <div className="card-body">
                <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Your Ticket Code:</h3>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--paisley-violet)'}}>{result.code}</div>
              </div>
            </div>
            <p style={{marginTop: '1rem', fontSize: '0.9rem'}}>Please keep this code safe - you'll need it for entry to the Highland Games</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Purchase Tickets</h2>
          </div>
          <div className="card-body">
            <Form method="post">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  name="name" 
                  required 
                  placeholder="Your full name" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  name="email" 
                  required 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Ticket Type</label>
                <select name="type" className="form-input">
                  <option value="General Admission">General Admission - £15</option>
                  <option value="VIP">VIP Experience - £35</option>
                  <option value="Family Pass">Family Pass (2 adults + 2 children) - £40</option>
                  <option value="Student">Student Discount - £10</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Quantity</label>
                <input 
                  name="quantity" 
                  type="number" 
                  defaultValue={1} 
                  min="1"
                  max="10"
                  className="form-input"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '1rem'}}>
                Purchase Tickets
              </button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}