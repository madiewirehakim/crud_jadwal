import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddMatkul = () => {
  const [matakuliah, setName] = useState("");
  
  const navigate = useNavigate();
 
  const saveTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3008/matakuliah", {
        matakuliah,
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
            <label className="label">Matakuliah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={matakuliah}
                onChange={(e) => setName(e.target.value)}
                placeholder="kelas"
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
 
export default AddMatkul;