import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import AddMatkul from "./components/AddMatkul";
import Matkul from "./components/data_matkul";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="add" element={<AddTodo/>}/>
        <Route path="edit/:id" element={<EditTodo/>}/>
      </Routes>
    </BrowserRouter>


  );
 return (
    <BrowserRouter>
<Routes>
  <Route path="matakuliah" element={<Matkul/>}/>
  <Route path="add" element={<AddMatkul/>}/>
  <Route path="edit/:id" element={<EditTodo/>}/>
</Routes>
</BrowserRouter>
  );
}
 
export default App;