import React from 'react';
import { useState, useEffect } from "react";


function Ranking() {

    const [hasError, setErrors] = useState(false);

    const [planets, setPlanets] = useState({});

    async function fetchData() {
        const res = await fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + 'GyIlFXNxjTMzmu7XOU6SMskxGqydDXzw',
        { method: 'get',  })
        res
        .json()
        .then(response => { setPlanets(response); })  
        .catch(err => { setErrors(err) });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div>

        <span>{JSON.stringify(planets)}</span>
  
        <hr />
  
        <span>Has error: {JSON.stringify(hasError)}</span>
        <p>lal</p>
  
      </div>
    );
}

export default Ranking;
