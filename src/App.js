import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Context, {themes} from './components/context'
import ThemeProvider from './components/ThemeProvider'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Calculator/>}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
