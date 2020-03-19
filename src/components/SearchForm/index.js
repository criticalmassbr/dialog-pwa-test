import React from 'react';
import PropTypes from 'prop-types';
import { Form, Title, Input } from './style';

const SearchForm = ({ onSubmit, search, onSearchUpdate }) => (
  <Form onSubmit={onSubmit}>
    <Title>Album Finder</Title>
    <Input value={search} onChange={e => onSearchUpdate(e.target.value)} placeholder="Search..." />
  </Form>
);

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSearchUpdate: PropTypes.func.isRequired,
};

export default SearchForm;
