import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CardData from './CardData'
import FullData from './FullData';
import Slider from './Slider';

function App() {
  return (
    <>
      {/* <Slider/> */}

      {/* <CardData /> */}
  
      {/* <FullData/> */}


      <Routes>
        <Route path='/' element={<CardData/>}></Route>
        <Route path='/Product/:id' element={<FullData/>}></Route>
      </Routes>

    </>
  );
}

export default App;
