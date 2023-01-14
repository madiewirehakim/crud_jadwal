import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditTodo = () => {
  const [kelas, setName] = useState("");
  const [jam, setjam] = useState("");
  const [id_mk, setid_mk] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getTodoById();
  }, []);
 
  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3006/kelas/${id}`, {
        kelas,
        jam,
        id_mk,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  const getTodoById = async () => {
    const response = await axios.get(`http://localhost:3006/kelas/${id}`);
    setName(response.data.name);
    setjam(response.data.jam);
    setid_mk(response.data.id_mk);
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateTodo}>
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
            <label className="label">ID_MK</label>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditTodo;