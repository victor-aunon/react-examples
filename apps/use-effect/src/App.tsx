import { Button, Card, CardHeader, CardBody, CardFooter } from "@monorepo/ui";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("text-yellow-400");

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
    if (count % 5 === 0) {
      console.log("Count is multiple of 5");
      setColor("text-orange-800");
    } else setColor("text-yellow-400");
  }, [count]);

  return (
    <section className="max-w-md mx-auto min-h-[100dvh] py-10">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-bold">React 19 useEffect</h1>
        </CardHeader>
        <CardBody>
          <p className="text-gray-400 pb-4">Check the console to see the effects.</p>
          <div className="gap-4 flex flex-col mx-auto max-w-[200px]">
            <Button onPress={() => setCount((count) => count + 1)} color="primary">
              Increment Count
            </Button>
          </div>
        </CardBody>
        <CardFooter>
          <p className={`font-bold ${color}`}>Current count: {count}</p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default App;
