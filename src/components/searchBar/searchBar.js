import React from 'react';
import './searchBar.css';

function SearchBar() {
  return (
    <div className="search-bar-div">
        <div class="input-group col-md-8">
            <input class="form-control py-2 border-right-0 border" type="search" value="Search" id="example-search-input"/>
            <span class="input-group-append">
              <button class="btn btn-outline-secondary border-left-0 border" type="button">
                    <i class="fa fa-search"></i>
              </button>
            </span>
        </div>

    </div>
  );
}

export default SearchBar;
