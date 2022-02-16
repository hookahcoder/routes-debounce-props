import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import FindIds from './pages/FindIds';
import FindPasswords from './pages/FindPasswords';
import FindUsers from './pages/FindUsers';
import NotFound from './pages/NotFound';

function App() {

  let items = ['4', '2', '1', '2', '3', '1', '1'];
  
  return (
    <>
      <header>
        <Link to='/'>FindUsers</Link>
        <Link to='/pass'>passwords</Link>
        <Link to='/ids'>ids</Link>
      </header>

      <Routes>
        <Route path='/' element={<FindUsers props={items} />} />
        <Route path='/ids' element={<FindIds />} />
        <Route path='/pass' element={<FindPasswords />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;