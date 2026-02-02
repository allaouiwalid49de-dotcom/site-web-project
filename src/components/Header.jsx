import React, { useState } from 'react';
import '../styles/Header.css';
import Home from './Home';
import Avocat from './Avocat';
import { FaHome, FaBalanceScale, FaUserTie, FaGavel } from "react-icons/fa";
import Client from './Client';

export default function Header() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <div className='he2'>
      </div>
      <div className='HH'>
        <h1 className='hh1'><FaGavel/>Lex<span>One</span></h1>
      </div>
      <div className='d2'>
        <nav className='n'>
          <ul className='u'>
            <li className='l'>
  <button className='ho' onClick={() => setPage('home')}>
    <FaHome /> HOME
  </button>
</li>
<li className='l'>
  <button className='ho' onClick={() => setPage('avocats')}>
    <FaBalanceScale /> Avocats
  </button>
</li>
<li className='l'>
  <button className='ho' onClick={() => setPage('clients')}>
    <FaUserTie /> Clients
  </button>
</li>

          </ul>
        </nav>
      </div>
      

      
     {page === 'home' && <Home />}
    {page === 'avocats' && <Avocat />}
      {page === 'clients' && <Client/>}

    </div>
  );
}
