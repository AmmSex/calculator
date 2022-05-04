import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import Calculator from './components/Calculator';
import Header from './components/Header';
import ThemeProvider from './components/ThemeProvider'

function App() {

  const [calc, setCalc] = useState({
    num: '',
    sign: '',
    res : '',
    history: []
})

  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Calculator calc={calc} setCalc={setCalc}/>}/>
            <Route path='/settings' element={<Settings calc={calc} setCalc={setCalc}/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
