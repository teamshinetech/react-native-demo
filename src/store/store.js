
/**
 * Created by zhuhuiping on 2017/7/10.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/reducers';
import todoReducer from '../reducers/todoReducers';

const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        todoReducer,
        preloadedState,
        compose(
            applyMiddleware(createLogger)
        )
    );
}
const store = configureStore();
export default store;