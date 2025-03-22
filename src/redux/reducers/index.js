import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import { usersApi } from '../usersApi';
const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    [usersApi.reducerPath]: usersApi.reducer
});

export default reducers;