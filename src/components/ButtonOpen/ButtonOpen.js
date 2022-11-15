import {useState, useEffect, React} from 'react';
import './ButtonOpen.css';

export default function ButtonOpen({open}) {

  return (
    <div className='containerButtonOpen'>
      <button onClick={() => open()}><span>Open</span></button>
    </div>
  )
}
