import React, { useState } from "react";
import Table from "./Table";
import Search from "./Search";

const App = () => {
  const data = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 35 },
    { id: 5, name: "Eva", age: 29 },
    { id: 6, name: "Frank", age: 24 },
    { id: 7, name: "Grace", age: 27 },
    { id: 8, name: "Hannah", age: 31 },
    { id: 9, name: "Ian", age: 26 },
    { id: 10, name: "Jessica", age: 30 },
    { id: 11, name: "Kevin", age: 29 },
    { id: 12, name: "Linda", age: 33 },
    { id: 13, name: "Megan", age: 25 },
    { id: 14, name: "Nathan", age: 28 },
    { id: 15, name: "Olivia", age: 23 },
    { id: 16, name: "Patrick", age: 34 },
    { id: 17, name: "Quincy", age: 27 },
    { id: 18, name: "Rachel", age: 32 },
    { id: 19, name: "Samuel", age: 31 },
    { id: 20, name: "Tracy", age: 26 },
    { id: 21, name: "Ursula", age: 29 },
    { id: 22, name: "Victor", age: 33 },
    { id: 23, name: "Wendy", age: 28 },
    { id: 24, name: "Xander", age: 30 },
    { id: 25, name: "Yvonne", age: 25 },
    { id: 26, name: "Zachary", age: 27 },
    { id: 27, name: "Aaron", age: 28 },
    { id: 28, name: "Bella", age: 31 },
    { id: 29, name: "Caleb", age: 26 },
    { id: 30, name: "Diana", age: 29 },
    { id: 31, name: "Ethan", age: 24 },
    { id: 32, name: "Fiona", age: 33 },
    { id: 33, name: "George", age: 27 },
    { id: 34, name: "Holly", age: 30 },
    { id: 35, name: "Isaac", age: 25 },
    { id: 36, name: "Jasmine", age: 28 },
    { id: 37, name: "Kyle", age: 32 },
    { id: 38, name: "Lily", age: 22 },
    { id: 39, name: "Michael", age: 29 },
    { id: 40, name: "Nora", age: 31 },
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
