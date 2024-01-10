import { useState } from 'react';
import { getText } from './lang';
import enFlag from './img/uk.jpg';
import uaFlag from './img/ua.jpg';

function App() {
  const [isUa, setIsUa] = useState(false);

  function changeLang(e) {
    setIsUa(!isUa);
  }

  return (
    <>
      <header>
        <a
          href="https://leyliant-ph.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="header__logo"
        >
          Leyliant_ph
        </a>
        {isUa ? (
          <img onClick={changeLang} className="header__lang" src={enFlag} alt="flag" />
        ) : (
          <img onClick={changeLang} className="header__lang" src={uaFlag} alt="flag" />
        )}
      </header>
      <section>
        <form></form>
      </section>
    </>
  );
}

export default App;
