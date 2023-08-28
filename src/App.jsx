import "./App.css";
import { CurrentlyReading } from "./components/CurrentlyReading";

export function App() {
  return (
    <div className="App">
      <h2>Currently reading</h2>
      <hr />
      <CurrentlyReading
        bookTitle="Dune"
        bookAuthor="Frank Herbert"
        bookProgression={56}
      />

      <CurrentlyReading
        bookTitle="Grapes of Wrath"
        bookAuthor="John Steinbeck"
        bookProgression={86}
      />

      <CurrentlyReading
        bookTitle="V of Vendetta"
        bookAuthor="Alan Moore"
        bookProgression={15}
      />
    </div>
  );
}
