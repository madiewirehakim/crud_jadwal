import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const Matkul = () => {
  const [matakuliah, setTodo] = useState([]);
 
  useEffect(() => {
    getTodo();
  }, []);
 
  const getTodo = async () => {
    const response = await axios.get("http://localhost:3008/matakuliah");
    setTodo(response.data);
  };
 
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3008/matakuliah/${id}`);
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
              <th>Matakuliah</th>
             
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {matakuliah.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.matakuliah}</td>
                
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
 
export default Matkul;