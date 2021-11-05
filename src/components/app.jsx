import React from 'react';
import './app.scss';
import Icon from '../Assets/Images/SMTPlogo.png';
import TableMaker from './table.jsx';
import PartMaker from './part.jsx';
import BuyersTMaker from './buyers-table.jsx';

const App = () => {
  return (
    <div className="container">
      
      <BuyersTMaker  />
      <PartMaker  />
      <TableMaker  />
    </div>
  )
}

export default App;
