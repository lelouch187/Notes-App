import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { About } from "./components/About";
import { Main } from "./components/Main";
import { AlertState } from "./context/alert/AlertState";
import { NotesState } from "./context/notes/NotesState";

function App() {
  return (
    <NotesState>
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <hr></hr>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AlertState>
    </NotesState>
  );
}

export default App;
