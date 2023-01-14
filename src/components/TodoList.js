import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const TodoList = () => {
  const [kelas, setTodo] = useState([]);
 
  useEffect(() => {
    getTodo();
  }, []);
 
  const getTodo = async () => {
    const response = await axios.get("http://localhost:3006/kelas");
    setTodo(response.data);
  };
 
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/kelas/${id}`);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Ruangan</th>
             
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {kelas.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.kelas}</td>
                
                <td>
                  <Link
                    to={`edit/${todo.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default TodoList;