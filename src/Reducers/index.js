import { combineReducers } from 'redux';
import rankingReducer from './rankingReducer';

const allReducers = combineReducers({
    rank: rankingReducer,
})
export default allReducers;