import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = ({todos}) => {
    return (
        <div className='todoList'>
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            )}
        </div>
    );
};

export default TodoList;
