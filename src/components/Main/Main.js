import React from 'react';
import Cards from '../Cards/Cards';
import './Main.css'

const Main = () => {
    return (
        <div>
        <div className='logo'>
        <h3>Logo</h3>
      </div>
      <div className='cards'>
      <Cards name='Maria' title='CEO' age='29'></Cards>
      <Cards name='Kati' title='Developer' age='29'></Cards>
      <Cards name='Karin' title='Designer' age='29'></Cards>
      </div>
        </div>
    );
};

export default Main;