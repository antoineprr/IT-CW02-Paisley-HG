import { useLoaderData } from "react-router";
import { loader } from "./dashboard.server";
export { loader }

export default function Dashboard() {
  const regs = useLoaderData<typeof loader>();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of registrations and event management</p>
      </header>

      <section className="dashboard-content">
        <div className="section-header">
          <h2>Recent Registrations</h2>
        </div>
        
        {regs.length === 0 ? (
          <div className="empty-state">
            <p>No registrations yet</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="minimal-table">
              <thead>
                <tr>
                  <th>Participant</th>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {regs.map((r: any) => (
                  <tr key={r._id}>
                    <td>{r.firstName} {r.lastName}</td>
                    <td>{r.eventName}</td>
                    <td>{new Date(r.createdAt || Date.now()).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
