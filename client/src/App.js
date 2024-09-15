import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import StockContext from './Context/StockContext';
function App() {
  const[stockSymbol,setStockSymbol] = useState("FB");
  const[validation,setValidation] = useState(false);
  return (
    // <Login />
    ((validation)? <div>
    <StockContext.Provider value={{stockSymbol,setStockSymbol}}>
    <Dashboard />
    </StockContext.Provider>
    </div>:<Login ValidationChecking={setValidation}/>)
  );
}

export default App;
