import React from 'react';
import Navbar from '../../components/navbar/navbar';
import SearchBar from '../../components/searchBar/searchBar';
import BG from '../../components/images/book4.jpg';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <Navbar/>
      <img src={BG} alt="Books" class="front-bg" />
      <SearchBar/>

      <div>
          
      </div>

    </div>
  );
}

export default Landing;
