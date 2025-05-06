import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export const resetAppState = () => ({ type: 'RESET_STATE' });

export default rootReducer;
