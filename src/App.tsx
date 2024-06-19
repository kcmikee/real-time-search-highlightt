import React, { useState } from "react";
import "./App.css";

interface Item {
  text: string;
}

const items: Item[] = [
  { text: "JavaScript programming" },
  { text: "HTML and CSS basics" },
  { text: "Frontend development" },
  { text: "Web design principles" },
  { text: "Dynamic content handling" },
];

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filterItems = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    return items.filter((item) =>
      item.text.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const filteredItems = filterItems(query);

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
          <li key={index}>{highlightText(item.text, query)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
