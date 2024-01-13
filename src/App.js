import { useState, useRef } from 'react';
import { getText } from './lang';
import { FaCheck } from 'react-icons/fa';
import enFlag from './img/uk.jpg';
import uaFlag from './img/ua.jpg';
import { Checkboxes } from './components/Checkboxes/Checkboxes';

const url = `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_ID}&text=`;

function App() {
  const ulRef3 = useRef();
  const ulRef4 = useRef();
  const ulRef8 = useRef();
  const ulRef10 = useRef();
  const ulRef11 = useRef();
  const ulRef12 = useRef();
  const ulRef14 = useRef();

  const [isUa, setIsUa] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isError, setIsError] = useState(false);

  function changeLang(e) {
    setIsUa(!isUa);
  }

  function getCheckboxesValues(r) {
    const kids = Object.values(r.current.children);

    let res;

    kids.map(item => {
      if (item.classList.contains('check')) res = item.id;
      return 0;
    });

    return res;
  }

  async function submit(e) {
    e.preventDefault();
    if (isOk) return;
    const box = e.target.children;

    const msg = `${box.q1.children[0].textContent} %0A ${box.q1.children[1].value} %0A %0A ${
      box.q2.children[0].textContent
    } %0A ${box.q2.children[1].value}
     %0A %0A ${box.q3.children[0].textContent} %0A ${getCheckboxesValues(ulRef3)} %0A %0A ${
      box.q4.children[0].textContent
    } %0A ${getCheckboxesValues(ulRef4)}
     %0A %0A ${box.q5.children[0].textContent} %0A ${box.q5.children[1].value} %0A %0A ${
      box.q6.children[0].textContent
    } %0A ${box.q6.children[1].value}
     %0A %0A ${box.q7.children[0].textContent} %0A ${box.q7.children[1].value} 
     %0A %0A ${box.q8.children[0].textContent} %0A ${getCheckboxesValues(ulRef8)} 
     %0A %0A ${box.q9.children[0].textContent} %0A ${box.q9.children[1].value} 
     %0A %0A ${box.q10.children[0].textContent} %0A ${getCheckboxesValues(ulRef10)} %0A %0A ${
      box.q11.children[0].textContent
    } %0A ${getCheckboxesValues(ulRef11)} %0A %0A ${
      box.q12.children[0].textContent
    } %0A ${getCheckboxesValues(ulRef12)} %0A %0A ${box.q13.children[0].textContent} %0A ${
      box.q13.children[1].value
    } %0A %0A ${box.q14.children[0].textContent} %0A ${getCheckboxesValues(ulRef14)}`;

    try {
      setIsFetch(true);
      await fetch(url + msg);
    } catch {
      setIsFetch(false);
      setIsError(true);
    } finally {
      setIsFetch(false);
      setIsOk(true);
    }
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
        <form onSubmit={submit}>
          <div id="q1" className="input__wrap">
            <label>{getText('q1', isUa)}</label>
            <input className="input__text" type="text" required />
          </div>

          <div id="q2" className="input__wrap">
            <label>{getText('q2', isUa)}</label>
            <input className="input__date" type="datetime-local" />
          </div>

          <div id="q3" className="input__wrap">
            <label>{getText('q3', isUa)}</label>
            <Checkboxes
              text={[
                getText('q3a', isUa),
                getText('q3b', isUa),
                getText('q3c', isUa),
                getText('q3d', isUa),
              ]}
              ulRef={ulRef3}
            />
          </div>

          <div id="q4" className="input__wrap">
            <label>{getText('q4', isUa)}</label>
            <Checkboxes
              text={[
                getText('q4a', isUa),
                getText('q4b', isUa),
                getText('q4c', isUa),
                getText('q4d', isUa),
              ]}
              ulRef={ulRef4}
            />
          </div>

          <div id="q5" className="input__wrap">
            <label>{getText('q5', isUa)}</label>
            <input className="input__number" type="number" required min="1" />
          </div>

          <div id="q6" className="input__wrap">
            <label>{getText('q6', isUa)}</label>
            <input className="input__number" type="number" required min="1" />
          </div>

          <div id="q7" className="input__wrap">
            <label>{getText('q7', isUa)}</label>
            <textarea className="input__textarea" required></textarea>
          </div>

          <div id="q8" className="input__wrap">
            <label>{getText('q8', isUa)}</label>
            <Checkboxes text={[getText('yes', isUa), getText('no', isUa)]} ulRef={ulRef8} />
          </div>

          <div id="q9" className="input__wrap">
            <label>{getText('q9', isUa)}</label>
            <input className="input__number" type="number" required min="1" />
          </div>

          <div id="q10" className="input__wrap">
            <label>{getText('q10', isUa)}</label>
            <Checkboxes text={[getText('q10a', isUa), getText('q10b', isUa)]} ulRef={ulRef10} />
          </div>

          <div id="q11" className="input__wrap">
            <label>{getText('q11', isUa)}</label>
            <Checkboxes text={[getText('yes', isUa), getText('no', isUa)]} ulRef={ulRef11} />
          </div>

          <div id="q12" className="input__wrap">
            <label>{getText('q12', isUa)}</label>
            <Checkboxes text={[getText('yes', isUa), getText('no', isUa)]} ulRef={ulRef12} />
          </div>

          <div id="q13" className="input__wrap">
            <label>{getText('q13', isUa)}</label>
            <input className="input__text" type="text" />
          </div>

          <div id="q14" className="input__wrap">
            <label>{getText('q14', isUa)}</label>
            <Checkboxes text={[getText('yes', isUa), getText('no', isUa)]} ulRef={ulRef14} />
          </div>

          {isOk && <p className="fetch_ok">{getText('thank', isUa)}</p>}
          {isError && <p className="fetch_error">{getText('error', isUa)}</p>}

          {!isOk ? (
            <button className="submit_btn" type="submit">
              {isFetch ? '...' : getText('sub', isUa)}
            </button>
          ) : (
            <FaCheck className="completed" />
          )}
        </form>
      </section>
    </>
  );
}

export default App;
