import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Searchbar = (props) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    if (searchValue) {
      let path = `/Search/${searchValue}/1`;
      history.push(path);
      resetInputField();
    }
  };

  return (
    <form className="search">
      <input
        value={searchValue} // class로 쳤을 때 this.state.searchValue
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="검색어를 입력하세요..."
        className="search_box"
      />
      <button
        onClick={callSearchFunction}
        type="submit"
        className="search_button"
      >
        <h3>검색</h3>
      </button>
    </form>
  );
};

export default Searchbar;
