import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterLabel htmlFor="">
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
