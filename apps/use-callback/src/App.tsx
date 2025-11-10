import { Button, Card, CardHeader, CardBody, CardFooter, Input } from "@monorepo/ui";
import { useEffect, useState, useCallback, type ChangeEvent } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [calculatedValue, setCalculatedValue] = useState(0);

  const expensiveFunction = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCalculatedValue(count * multiplier);
    console.log(
      `Multiplier changed, re-calculated result ${count} · ${multiplier} = ${count * multiplier}`
    );
  }, [multiplier]);

  useEffect(() => {
    expensiveFunction();
  }, [expensiveFunction]);

  return (
    <section className="max-w-md mx-auto min-h-[100dvh] py-10">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-bold">React 19 useCallback</h1>
        </CardHeader>
        <CardBody>
          <p className="text-gray-400">Check the console to see the effects.</p>
          <p className="text-gray-400">
            The expensive function is re-called only when multiplier changes, even though the
            function is a dependency of the useEffect
          </p>
          <div className="gap-4 flex flex-col mx-auto max-w-[200px]">
            <Button onPress={() => setCount((c) => c + 1)} color="primary">
              Increment Count
            </Button>
            <Input
              type="number"
              id="multiplier"
              label="Set a multiplier"
              defaultValue={`${multiplier}`}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMultiplier(Number(e.target.value))}
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <p className="font-bold text-yellow-400">Current count: {count}</p>
          <p className="font-bold text-orange-500">Calculated value: {calculatedValue}</p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default App;
