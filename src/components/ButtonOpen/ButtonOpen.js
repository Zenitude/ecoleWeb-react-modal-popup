import {useState, useEffect, React} from 'react';
import './ButtonOpen.css';

export default function ButtonOpen({open}) {

  

  const openModal = () => {
    open();
  }

  return (
    <div className='containerButtonOpen'>
      <button onClick={openModal}><span>Open</span></button>
    </div>
  )
}
