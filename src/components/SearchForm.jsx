import React, {useContext} from 'react';
import appContext from '../context';

function SearchForm() {
  const [setSearchTerm]= useContext(appContext)
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm