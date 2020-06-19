import React , { useState, useEffect }  from 'react';
import { useDispatch , connect } from 'react-redux';
import { fetch_booklist } from '../../Actions/searchRanking';
import Carousel from 'react-bootstrap/Carousel';
import Card from '../card/card';
import './carousel.css';

function ControlledCarousel({booklist, encoded_list }) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
        console.log("JDWADW")
        console.log(encoded_list)
        dispatch(fetch_booklist(encoded_list))
    }, [])

    const dispatch = useDispatch();
  
    return (
        <div>
        <h1 class="list-title">
            {booklist}
        </h1>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <div class="one-div">
                <Card book_title="TESTING"/>
                <Card book_title="TESTING"/>
                <Card book_title="TESTING"/>
                <Card book_title="TESTING"/>
                <Card book_title="TESTING"/>
            </div>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

  const mapStateToProps = state => ({

  })
  
export default connect(mapStateToProps)(ControlledCarousel);