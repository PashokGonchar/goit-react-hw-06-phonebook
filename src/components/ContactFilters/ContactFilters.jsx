import { FilterDiv, FilterLabel, FilterInput } from './ContactFilters.styled';
import { useState } from 'react';

const Filter = () => {
const [filter, setFilter] = useState('');

const handleFilterChange = e => {
  setFilter(e.target.value);
};

  return (
    <FilterDiv>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name to search please..."
      />
    </FilterDiv>
  );
};

export default Filter;
