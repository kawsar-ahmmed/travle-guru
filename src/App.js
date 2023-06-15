import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import HeaderSecond from './Pages/Header/HeaderSecond';
import Destination from './Pages/Destination/Destination';
import CreateProperty from './Pages/CreateProperty/CreateProperty';
import Properties from './Pages/Properties/Properties';

function App() {
  const location = useLocation();
  const showHeaderSecond = location.pathname === '/properties';
  const showHeader = !showHeaderSecond;

  return (
    <div className="App">
      {showHeader && <Header />}
      {showHeaderSecond && <HeaderSecond />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/create-property' element={<CreateProperty />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/properties/:id' element={<Properties />} />
      </Routes>
    </div>
  );
}

export default App;
