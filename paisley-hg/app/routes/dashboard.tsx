import { useLoaderData } from "react-router";
import { loader } from "./dashboard.server";
export { loader }

export default function Dashboard() {
  const regs = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Dashboard</h1>
      {regs.map((r: any) => (
        <p key={r._id}>
          {r.firstName} {r.lastName} — {r.eventId}
        </p>
      ))}
    </div>
  );
}
