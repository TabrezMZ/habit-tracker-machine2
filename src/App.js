import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage';
import { ArchivePage } from './pages/ArchivePage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <nav>
        <Navbar />
      </nav>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/archives' element={<ArchivePage/>} />
     </Routes>
    </div>
  );
}

export default App;
