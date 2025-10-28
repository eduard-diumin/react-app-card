import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/Button/Button";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/forbidden" element={<div>Forbidden Page</div>} />
          <Route path="/addquestion" element={<div>Add Question Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
