import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { Counter } from "./components/Counter";
import { List } from "./components/List";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title="hello" />
      <Section title="Different title">This is my section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["Books 📖", "Code 💻", "Movies 📺"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
