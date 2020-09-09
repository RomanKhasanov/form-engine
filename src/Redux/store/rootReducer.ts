import { combineReducers } from 'redux';

import header from './header/reducer';
import goodItems from './goodItems/reducer';

export default combineReducers({
    header,
    goodItems,
})
