import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import { About } from './components/about';
import { Contact } from './components/contact';
import Header from './components/header';
import { Home } from './components/home';

function App() {
  return (
    <div>
    <Header/>
    
    <div className='container'>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
       </Routes>

     </div>
    </div>
  
  );
}

export default App;
