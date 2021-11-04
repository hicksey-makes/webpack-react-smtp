import React from 'react';
import './app.scss';
import Icon from '../Assets/Images/SMTPlogo.png';
import TableMaker from './table.jsx';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to my React application</h1>
      </div>
      <TableMaker  />
    </div>
  )
}

export default App;
