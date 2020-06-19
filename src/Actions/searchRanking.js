import Types from './type';

export function fetch_booklist (encoded_list) {
    return dispatch => {
        return fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name='+ encoded_list +'&api-key=' + 'GyIlFXNxjTMzmu7XOU6SMskxGqydDXzw',
        {method: 'get', })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    };
};

export function fetch_all_lists () {
    return dispatch => {
        return fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + 'GyIlFXNxjTMzmu7XOU6SMskxGqydDXzw',
        { method: 'get',  })
        .then(res => res.json())
        .then(json => { 
            dispatch(fetch_all_lists_success(json.results));
        });
    };
};

export const rankPageChange =(num)=> ({
    type: Types.RANK_PAGE_CHANGE,
    payload: num
})

export const fetch_booklist_success = json => ({
    type: Types.FETCH_BOOKLIST_SUCCESS,
    payload: {json}
})

export const fetch_all_lists_success = json => ({
    type: Types.FETCH_ALL_LISTS_SUCCESS,
    payload: {json}
})