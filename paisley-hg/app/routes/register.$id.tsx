import { Form, useLoaderData, useActionData } from "react-router";
import { loader, action } from "./register.$id.server";
export { loader }

export default function Register() {
  const event = useLoaderData<typeof loader>();
  const result = useActionData() as any;

  return (
    <div>
      <h1>Register for {event?.name}</h1>

      {result?.ok && <p>Registration successful!</p>}

      <Form method="post">
        <input name="firstName" required placeholder="First Name" />
        <input name="lastName" required placeholder="Last Name" />
        <input name="email" required type="email" placeholder="Email" />
        <input name="club" placeholder="Club (optional)" />
        <button>Submit</button>
      </Form>
    </div>
  );
}
