import {useState, useEffect, React} from 'react';
import './App.css';
import ButtonOpen from '../components/ButtonOpen/ButtonOpen';
import Modal from '../components/Modal/Modal';

export default function App() {

  const [toggle, setToggle] = useState(false);

  const modal = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    window.addEventListener('click', closeOutside);

    function closeOutside(e) {

      if(e.path[0].className === 'containerModal')
      {
        modal();
      }
    }

    return () => {
      window.removeEventListener('click', closeOutside);
    }
  }, []);
  
  return (
    <div className="App">
      <ButtonOpen open={modal} />
      {toggle && <Modal close={modal}/>}
    </div>
  );
}
