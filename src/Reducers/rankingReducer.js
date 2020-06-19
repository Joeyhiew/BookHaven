import Types from '../Actions/type';
import initialState from './initialState';


const rankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ALL_LISTS_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    list: action.payload
                }
            )
        
        case Types.FETCH_BOOKLIST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    booklist: action.payload
                }
            )
        
        case Types.RANK_PAGE_CHANGE:
            return Object.assign(
                {},
                state,
                {
                    currentPage: action.payload
                }
            )
        default:
            return state;
    }
}
export default rankingReducer;