
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllNotes from './Components/AllNotes';
import NotesForm from './Components/NotesForm';
import EditNotes from './Components/EditNotes';
// import Note from './Components/EditNotes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotesForm />} />
          <Route path='/allNotes' element={<AllNotes />} />
          <Route path='/editNotes' element={<EditNotes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
