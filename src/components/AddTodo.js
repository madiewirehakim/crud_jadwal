import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddTodo = () => {
  const [kelas, setName] = useState("");
  const [jam, setjam] = useState("");
  const [id_mk, setid_mk] = useState("");
  const navigate = useNavigate();
 
  const saveTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3006/kelas", {
        kelas,
        jam,
        id_mk,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveTodo}>
          <div className="field">
            <label className="label">Kelas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kelas}
                onChange={(e) => setName(e.target.value)}
                placeholder="kelas"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Jam</label>
            <div className="control">
              <input
                type="time"
                className="input"
                value={jam}
                onChange={(e) => setjam(e.target.value)}
                placeholder="jam"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">MK_ID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={id_mk}
                onChange={(e) => setid_mk(e.target.value)}
                placeholder="id_mk"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddTodo;