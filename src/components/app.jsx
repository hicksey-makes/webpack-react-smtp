import React from 'react';
import './app.scss';
// import Icon from '../Assets/Images/SMTPlogo.png';
import TableMaker from './table.jsx';
import PartMaker from './part.jsx';
import BuyersTMaker from './buyers-table.jsx';
// import FillForm from './formfill.jsx';
import ImgMaker from './partimg.jsx';

const App = () => {
  return (
    <div className="container">
      <ImgMaker  />
      <BuyersTMaker  />
      <PartMaker  />
      <TableMaker  />
    </div>
  )
}

export default App;
