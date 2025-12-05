import { useLoaderData } from "react-router";
import { loader } from "./results.server";
export { loader }

export default function Results() {
  const results = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Results</h1>
      {results.map((r: any) => (
        <div key={r._id}>
          <h3>{r.eventId} — {r.year}</h3>
          <ol>
            {r.rankings.map((rk: any, i: number) => (
              <li key={i}>{rk.place}. {rk.name}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
