import { Button, Card, CardHeader, CardBody, CardFooter } from "@monorepo/ui";
import { useEffect, useEffectEvent, useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  // logCount always has the latest value of count
  const logCount = useEffectEvent(() => {
    console.log(`Current count is ${count}`);
  });

  useEffect(() => {
    // The useEffect does not have 'count' as a dependency
    console.log("Component mounted");
    const intervalId = setInterval(() => {
      logCount();
    }, 2000); // Cada 2 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="max-w-md mx-auto min-h-[100dvh] py-10">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-bold">React 19 useEffectEvent</h1>
        </CardHeader>
        <CardBody>
          <p className="text-gray-400">Check the console to see the effects.</p>
          <p className="text-gray-400 pb-4">
            Every 2 seconds, the current value of the counter is logged out thanks to{" "}
            <strong>useEffectEvent</strong>
          </p>
          <div className="gap-4 flex flex-col mx-auto max-w-[200px]">
            <Button onPress={() => setCount((c) => c + 1)} color="primary">
              Increment Count
            </Button>
          </div>
        </CardBody>
        <CardFooter>
          <p className="font-bold text-yellow-400">Current count: {count}</p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default App;
