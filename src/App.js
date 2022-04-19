import imagen0 from './images/rey_leogivildo.png';
import imagen1 from './images/rey_recesvinto.png';
import './App.css';
import { useRef } from 'react';

function App() {
  const refCaja = useRef(null);
  const dolar = 3729;
  const incrementar = (e) => {
      e.target.innerHTML = Number(e.target.innerHTML) + 1;

      if(e.target.innerHTML > 9){
        e.target.innerHTML = 1;
      }

      if(e.target.innerHTML >7){
          e.target.style.backgroundColor = 'red';
      }else{
        e.target.style.backgroundColor = '';
      }
  }
  const convertir = ()=> {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * dolar;
  }
  const cambio =(i)=> {
    if(i.target.src.includes('rey_leogivildo')){
      i.target.src = imagen1;
    }else{
      i.target.src = imagen0;
    }
  }
  const lectura =(e)=> {
    refCaja.current.innerHTML = e.target.value;
  }
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir}>Accept</button>
      <div><img onClick={cambio} src={imagen0} alt=''/></div>
      <input onChange={lectura} className='campo'/>
    </>
  );
}

export default App;
