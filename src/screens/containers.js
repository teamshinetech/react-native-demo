/**
 * Created by zhuhuiping on 2017/7/11.
 */
import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo,completeTodo,setVisibilityFilter} from '../actions/todoActions';
import { VisibilityFilters } from '../actionsTypes';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class Containers extends Component{
    render(){
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <AddTodo onAddClick = {text => dispatch(addTodo(text)) } />
                <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))} />
                <Footer filter = {visibilityFilter} onFilterChange = {nextFilter => dispatch(setVisibilityFilter(nextFilter))} />
            </div>
        )
    }
}
Containers.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}
export default connect(select)(Containers)