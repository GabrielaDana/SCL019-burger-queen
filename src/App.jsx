import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { TakeOrder } from './components/TakeOrder.jsx'
import { Home } from './components/Home.jsx'
import { Kitchen } from './components/Kitchen.jsx';


function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/takeOrder" element={<TakeOrder />}/>
            <Route path="/kitchen" element={<Kitchen />}/>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Navigate to='/' />}/>
          </Routes>
      </Router>
    </div>
  );
} 

export default App;
