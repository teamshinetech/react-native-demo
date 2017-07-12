/**
 * Created by zhuhuiping on 2017/7/11.
 */
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER} from '../actionsTypes';

export function addTodo(text) {
    return { type: ADD_TODO,text }
}
export function completeTodo(index) {
    return { type: COMPLETE_TODO,index }
}
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER,filter }
}