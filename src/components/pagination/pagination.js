import React , { useState, useEffect }  from 'react';
import { useDispatch , connect } from 'react-redux';
import {rankPageChange} from '../../Actions/searchRanking'
import './pagination.css';

const Paging= ({lists, currentPage, perPage}) => {

    const [active, setActive] = useState(1);
    const [pageList, setPageList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNeighbours, setPageNeighbours] = useState(1);
    const LEFT_PAGE = 'LEFT';
    const RIGHT_PAGE = 'RIGHT';

    const get_pagination =(totalNum) => {
        pageList.length = 0
        var limit = Math.ceil(totalNum/perPage)
        let i = 1;
        while(i <= limit){
            pageList.push(i);
            i += 1;
        }
        setTotalPages(pageList.length)
    }

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];
      
        while (i <= to) {
          range.push(i);
          i += step;
        }
      
        return range;
      }

    const fetchPageNumbers =()=> {
        const totalNumbers = (pageNeighbours*2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks){
            const Start = Math.max(2, currentPage - pageNeighbours);
            const End = Math.min((totalPages - 1), currentPage + 1);
            let pages = range(Start, End);

            const hasLeftSpill = Start >2;
            const hasRightSpill = (totalPages - 1) > End;
            const offset = totalNumbers - 1 - pages.length

            switch (true) {
                case(!hasLeftSpill && hasRightSpill):{
                    const extraPages = range(End+1, End+offset)
                    pages = [1, ...pages, ...extraPages, RIGHT_PAGE]
                    break;
                }
                case(hasLeftSpill && !hasRightSpill):{
                    const extraPages = range(Start-offset, Start-1)
                    pages = [LEFT_PAGE, ...extraPages, ...pages, totalPages]
                    break;
                }
                case(hasRightSpill && hasLeftSpill):
                default:{
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
                    break;
                }
            }
            return pages;
        }
        return range(1, totalPages);
    }

    const handlePageChange =(num)=> {
        dispatch(rankPageChange(num))
    }

    const handleMoveLeft =()=>{
        dispatch(rankPageChange(currentPage - pageNeighbours*2 - 1));
    }

    const handleMoveRight =()=> {
        dispatch(rankPageChange(currentPage + pageNeighbours*2 + 1));
    }

    useEffect(()=> {
        get_pagination(lists.json.length)

    })

    const pages = fetchPageNumbers()


    const dispatch = useDispatch();
    return (
        <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {pageList.length===0?
                    null
                    :
                    pages.map((page, index) => {
                        if (page === LEFT_PAGE){
                            return (
                            <>
                            <li className="page-item" key={1} onClick={()=> handlePageChange(1)}>
                                <a href="#" className="page-link">{1}</a>
                            </li>
                            <li class="page-item" onClick={()=>handleMoveLeft()}>
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            </>
                            )
                        }
                        if (page === RIGHT_PAGE){
                            return (
                            <>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next" onClick={()=>handleMoveRight()}>
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                            <li className="page-item" key={totalPages} onClick={()=> handlePageChange(totalPages)}>
                                <a href="#" className="page-link">{totalPages}</a>
                            </li>
                            </>
                            )
                        }

                        return(
                            <li className={`page-item${ currentPage === page ? ' active' : ''}`} key={page} onClick={()=> handlePageChange(page)}>
                                <a href="#" className="page-link">{page}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
      </div>
    );
  }

  const mapStateToProps = state => ({
    lists : state.rank.list,
    currentPage : state.rank.currentPage,
    perPage : state.rank.perPage
})
  
export default connect(mapStateToProps)(Paging);