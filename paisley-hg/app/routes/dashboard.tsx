import { useLoaderData } from "react-router";
import { loader } from "./dashboard.server";
export { loader }

export default function Dashboard() {
  const regs = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Highland Games Dashboard</h1>
        </div>
        <div className="card-body">
          <p>Overview of registrations and event management for Paisley Highland Games.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recent Registrations</h2>
        </div>
        <div className="card-body">
          {regs.length === 0 ? (
            <p>No registrations yet.</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Participant</th>
                  <th>Event</th>
                  <th>Registration Date</th>
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
          )}
        </div>
      </div>
    </div>
  );
}
