import { Card, CardHeader, CardBody, Input } from "@monorepo/ui";
import { useId } from "react";
import "./index.css";

function App() {
  return (
    <section className="max-w-md mx-auto min-h-[100dvh] py-10">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-bold">React 19 useId</h1>
        </CardHeader>
        <CardBody>
          <p className="text-gray-400 mb-4">
            Since each input has its own id generated with useId, there is no warning about two
            elements with same id
          </p>
          <h2 className="text-lg font-bold">Choose password</h2>
          <PasswordField />
          <h2 className="text-lg font-bold">Confirm password</h2>
          <PasswordField />
        </CardBody>
      </Card>
    </section>
  );
}

function PasswordField() {
  const passwordHintId = useId();

  console.log(passwordHintId);
  return (
    <div className="mb-4">
      Password:
      <Input
        type="password"
        label="Password"
        id={passwordHintId}
        aria-describedby={passwordHintId}
      />
      <p>The password should contain at least 18 characters</p>
    </div>
  );
}

export default App;
