import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Destination from './Pages/Destination/Destination';
import CreateProperty from './Pages/CreateProperty/CreateProperty';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/destination' element={<Destination></Destination>}></Route>
        <Route path='/create-property' element={<CreateProperty></CreateProperty>}></Route>
      </Routes>
    </div>
  );
}

export default App;
