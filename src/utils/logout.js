import { persistor, store } from '../store';
import { resetAppState } from '../store/rootReducer'; // action to reset root state

export const logout = async () => {
  try {
    await persistor.purge(); // clear redux-persist storage
    store.dispatch(resetAppState()); // dispatch a central reset action
    return { success: true, message: 'Logout successful' };
  } catch (error) {
    console.error('Logout failed:', error);
    return { success: false, message: 'Logout failed' };
  }
};
