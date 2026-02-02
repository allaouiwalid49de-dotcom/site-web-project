import React, { useState } from 'react';
import '../styles/Header.css';
import Home from './Home';
import Avocat from './Avocat';
import { FaHome, FaBalanceScale, FaUserTie, FaGavel, FaBuilding, } from "react-icons/fa";
import Client from './Client';
// import Societes from './Societes';

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
              <a href="#" className='ho' onClick={(e) => { e.preventDefault(); setPage('home'); }}>
                <FaHome /> HOME
              </a>
            </li>
            <li className='l'>
              <a href="#" className='av' onClick={(e) => { e.preventDefault(); setPage('avocats'); }}>
                <FaBalanceScale /> Avocats
              </a>
            </li>
            <li className='l'>
              <a href="#" className='cl' onClick={(e) => { e.preventDefault(); setPage('clients'); }}>
                <FaUserTie /> Clients
              </a> </li>
            {/*
            <li className='l'>
              <a href="#" className='so' onClick={(e) => { e.preventDefault(); setPage('societes'); }}>
                <FaBuilding /> Sociétés
              </a>
            </li>
            <li className='l'>
              <a href="#" className='do' onClick={(e) => { e.preventDefault(); setPage('dossiers'); }}>
                <FaGavel /> Dossiers
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
      

      
     {page === 'home' && <Home />}
    {page === 'avocats' && <Avocat />}
      {page === 'clients' && <Client/>}
      {/* {page === 'societes' && <Societes />}
      {page === 'dossiers' && <div>Page Dossiers</div>} */}
    </div>
  );
}
