import { useEffect, useState } from "react";
import axios from "axios";
import dice from './assets/icon-dice.svg';
import kowt from './assets/pattern-divider-desktop.svg'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => setData(res.data.slip))
      .catch(err => console.log(err));
  };

  return (
    <div className='h-screen bg-neutral-darkBlue flex items-center justify-center font-sans'>
      <div className='h-fix w-11/12 sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-1/3 mx-auto rounded-2xl bg-neutral-darkGrayishBlue flex flex-col justify-between'>
        <div className="text-center">
          {data && (
            <div>
              <p className="text-primary-neonGreen font-medium text-sm pt-10 pb-5">ADVICE #{data.id}</p>
              <p className="px-10 text-2xl font-bold text-primary-lightCyan">&quot;{data.advice}&quot;</p>
            </div>
          )}
        </div>
        <div className="relative px-10 py-10">
          <img src={kowt} />
        </div>
        <div className="flex justify-center items-center bg-primary-neonGreen rounded-full w-16 h-16 mx-auto cursor-pointer -mb-8 hover:shadow-[rgba(0,_191,102,_.8)_0px_0px_50px]" onClick={fetchAdvice}>
          <button><img src={dice} alt="dice" /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
