import React, { Component } from "react";

import TodoItem from "./TodoItem";

const TodoList=(props)=> {
    const { items, clearList, handleDelete, handleEdit } = props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-center justify-center text-capitalize">
            Todo Lists
          </h3>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                item={item.item}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="button"
            className="btn btn-block btn-danger text-uppercase mt-5"
            onClick={clearList}
          >
            clear list
          </button>
        </ul>
      </div>
    );
}
export default  TodoList;
