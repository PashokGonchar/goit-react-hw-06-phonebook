import { FilterDiv, FilterLabel, FilterInput } from './ContactFilters.styled';
import PropTypes from 'prop-types';


const Filter = ({ filter, handleFilterChange }) => {
  return (
    <FilterDiv>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name to search please..."
      />
    </FilterDiv>
  );
};

export default Filter;

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};