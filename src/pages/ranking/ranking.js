import React , { useState, useEffect }  from 'react';
import { useDispatch , connect } from 'react-redux';
import Navbar from '../../components/navbar/navbar';
import ControlledCarousel from '../../components/carousel/carousel';
import Pagination from 'react-bootstrap/Pagination'
import Paging from '../../components/pagination/pagination';
import { fetch_all_lists } from '../../Actions/searchRanking';
import './ranking.css';


function Ranking({lists, currentPage, perPage}) {


    // async function fetchData() {
    //     const res = await fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=paperback-nonfiction&api-key=' + 'GyIlFXNxjTMzmu7XOU6SMskxGqydDXzw',
    //     { method: 'get',  })
    //     res
    //     .json()
    //     // .then(response => { return response; })  
    //     .then(json => { console.log(json); 
    //         json.results.forEach(function(book) {
    //             var isbn = book.isbns[0].isbn10;
    //             var bookInfo = book.book_details[0];
    //             var lastWeekRank = book.rank_last_week || 'n/a';
    //             var weeksOnList = book.weeks_on_list || 'New this week';
    //             console.log(weeksOnList)
    //             console.log(isbn);
    //             console.log(bookInfo)
    //         })
    //     });


    // }


    const range = (from, to, step=1) => {
        let i = 0;
        while(i <= 10){
            range.push(i);
            i += step;
        }
        return range;
    }

    useEffect(() => {
        dispatch(fetch_all_lists());
    }, [])

    const dispatch = useDispatch();

    return (

        <div>
            <Navbar/>
    
            <div class="main-container">
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Bestseller Books</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
            {lists?
                <div>                             
                              
                    {lists.json.slice((currentPage-1)*perPage, (currentPage)*perPage).map((list) => (
                        <ControlledCarousel booklist={list.list_name} encoded_list={list.list_name_encoded}/>
                    ))}
                    <Paging/>  
                </div>
                :
                null}

            </div>
            </div>
  
        </div>
    );
}

const mapStateToProps = state => ({
    lists : state.rank.list,
    currentPage : state.rank.currentPage,
    perPage : state.rank.perPage
})

export default connect(mapStateToProps)(Ranking);
