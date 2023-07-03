// import React from 'react';
// import './SearchBar.css';

// const SearchBar = () => {
//   return (
//     <div className="search-bar">
//       <input type="text" placeholder="Search by services, location, or budget" className="search-input" />
//       <div className="filter-options">
//         <select className="filter-select">
//           <option value="">Services</option>
//           <option value="hard-landscaping">Hard Landscaping</option>
//           <option value="soft-landscaping">Soft Landscaping</option>
//           <option value="maintenance">Maintenance</option>
//         </select>
//         <select className="filter-select">
//           <option value="">Location</option>
//           <option value="auckland">Auckland</option>
//           <option value="christchurch">Christchurch</option>
//           <option value="wellington">Wellington</option>
//         </select>
//         <select className="filter-select">
//           <option value="">Budget</option>
//           <option value="$">$</option>
//           <option value="$$">$$</option>
//           <option value="$$$">$$$</option>
//           <option value="$$$$">$$$$</option>
//           <option value="$$$$$">$$$$$</option>
//         </select>
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from 'react';
import './SearchBar.css';

const FilteredResult = ({ landscaper }) => {
  return (
    <div className="filtered-result">
      <div>Name: {landscaper.name}</div>
      <div>Services: {landscaper.services}</div>
      <div>Location: {landscaper.location}</div>
      <div>Budget: {landscaper.budget}</div>
    </div>
  );
};

const SearchBar = ({ landscapers }) => {
  const [filteredLandscapers, setFilteredLandscapers] = useState(landscapers);
  const [servicesFilter, setServicesFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');

  const handleSearch = () => {
    const filtered = landscapers.filter(landscaper => {
      const servicesMatch = servicesFilter ? landscaper.services === servicesFilter : true;
      const locationMatch = locationFilter ? landscaper.location === locationFilter : true;
      const budgetMatch = budgetFilter ? landscaper.budget === budgetFilter : true;
      return servicesMatch && locationMatch && budgetMatch;
    });
    setFilteredLandscapers(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by services, location, or budget"
        className="search-input"
        onChange={e => setServicesFilter(e.target.value)}
      />
      <div className="filter-options">
        <select className="filter-select" onChange={e => setServicesFilter(e.target.value)}>
          <option value="">Services</option>
          <option value="hard-landscaping">Hard Landscaping</option>
          <option value="soft-landscaping">Soft Landscaping</option>
          <option value="maintenance">Maintenance</option>
        </select>
        <select className="filter-select" onChange={e => setLocationFilter(e.target.value)}>
          <option value="">Location</option>
          <option value="auckland">Auckland</option>
          <option value="christchurch">Christchurch</option>
          <option value="wellington">Wellington</option>
        </select>
        <select className="filter-select" onChange={e => setBudgetFilter(e.target.value)}>
          <option value="">Budget</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
          <option value="$$$$$">$$$$$</option>
        </select>
      </div>
      <button className="search-button" onClick={handleSearch}>Search</button>
      {/* Render filtered results */}
      {filteredLandscapers.length > 0 ? (
        <div className="filtered-results-container">
          {filteredLandscapers.map(landscaper => (
            <FilteredResult key={landscaper.id} landscaper={landscaper} />
          ))}
        </div>
      ) : (
        <div className="no-results">No results found</div>
      )}
    </div>
  );
};

export default SearchBar;

