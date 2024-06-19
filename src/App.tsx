import React, { useState, ChangeEvent } from "react";
import "./App.css";

const items = [
  "JavaScript programming",
  "HTML and CSS basics",
  "Frontend development",
  "Web design principles",
  "Dynamic content handling",
];

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Real-Time Search with Highlighting</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{highlightText(item, query)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
