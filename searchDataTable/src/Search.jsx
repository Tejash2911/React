import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleInputChange} />
    </div>
  );
};

export default Search;
