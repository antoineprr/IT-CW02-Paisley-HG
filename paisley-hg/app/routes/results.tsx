import { useLoaderData } from "react-router";
import { loader } from "./results.server";
export { loader }

export default function Results() {
  const results = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Highland Games Results</h1>
        </div>
        <div className="card-body">
          <p>Competition results from previous Highland Games editions in Paisley.</p>
        </div>
      </div>

      {results && results.length > 0 ? (
        <div className="grid grid-2">
          {results.map((result: any) => (
            <div key={result._id} className="card">
              <div className="card-header">
                <h3 className="card-title">{result.eventName} - {result.year}</h3>
              </div>
              <div className="card-body">
                <h4 style={{fontWeight: 'bold', marginBottom: '1rem'}}>Results:</h4>
                {result.rankings && result.rankings.length > 0 ? (
                  <ol style={{paddingLeft: '1.5rem'}}>
                    {result.rankings.map((ranking: any, index: number) => (
                      <li key={index} style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
                        <strong>{ranking.name}</strong>
                        {ranking.distance && (
                          <span style={{marginLeft: '0.5rem', color: 'var(--gray-medium)'}}>
                            - {ranking.distance}
                          </span>
                        )}
                        {ranking.score && (
                          <span style={{marginLeft: '0.5rem', color: 'var(--gray-medium)'}}>
                            - {ranking.score}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p style={{color: 'var(--gray-medium)'}}>No rankings available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <div className="card-body text-center">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📊</div>
            <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>No Results Available</h3>
            <p style={{color: 'var(--gray-medium)'}}>
              Competition results will be posted here after events are completed.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}