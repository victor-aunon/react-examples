import { Button, Card, CardHeader, CardBody, CardFooter } from "@monorepo/ui";
import { useState } from "react";
import "./index.css";

function App() {
  const [key, setKey] = useState(crypto.randomUUID());

  function resetComponent() {
    const newKey = crypto.randomUUID();
    console.log("Resetting component with new key:", newKey);
    setKey(newKey);
  }

  return (
    <section className="max-w-md mx-auto min-h-[100dvh] py-10">
      <CounterCard key={key}>
        <Button onPress={resetComponent} color="secondary">
          Reset
        </Button>
      </CounterCard>
    </section>
  );
}

function CounterCard({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">React 19 useState</h1>
      </CardHeader>
      <CardBody>
        <p className="text-gray-400 pb-4">
          Resetting state by changing the key of the child component
        </p>
        <div className="gap-4 flex flex-col mx-auto max-w-[200px]">
          <Button onPress={() => setCount((count) => count + 1)} color="primary">
            Increment Count
          </Button>
          {children}
        </div>
      </CardBody>
      <CardFooter>
        <p className="font-bold text-yellow-400">Current count: {count}</p>
      </CardFooter>
    </Card>
  );
}

export default App;
