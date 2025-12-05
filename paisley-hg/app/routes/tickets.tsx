import { Form, useActionData } from "react-router";
import { action } from "./tickets.server";
export { action }

export default function Tickets() {
  const result = useActionData() as any;

  return (
    <div>
      <h1>Buy Tickets</h1>

      {result?.ok ? (
        <h2>Your ticket code: {result.code}</h2>
      ) : (
        <Form method="post">
          <input name="name" required placeholder="Your name" />
          <input name="email" required type="email" />
          <select name="type">
            <option value="single">Single</option>
            <option value="day">Day pass</option>
            <option value="full">Full pass</option>
          </select>
          <input name="quantity" type="number" defaultValue={1} />
          <button>Buy</button>
        </Form>
      )}
    </div>
  );
}
