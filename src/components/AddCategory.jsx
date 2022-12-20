import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} aria-label="form">
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
