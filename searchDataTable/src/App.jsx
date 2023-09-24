import React, { useState } from "react";
import Table from "./Table";
import Search from "./Search";

const App = () => {
  const data = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charlie", age: 22 },
    // Add more data here...
  ];

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (term) => {
    // Perform the filtering logic here based on the search term
    const filtered = data.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Table with Search</h1>
      <Search onSearch={handleSearch} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;
