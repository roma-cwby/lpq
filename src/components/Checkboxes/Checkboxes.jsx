import './Checkboxes.css';
import { FaCheck } from 'react-icons/fa';

export const Checkboxes = ({ text, ulRef }) => {
  function click(e) {
    const child = Object.values(ulRef.current.children);
    child.forEach(item => item.classList.remove('check'));

    e.target.closest('li').classList.toggle('check');
  }

  return (
    <ul ref={ulRef} className="custom_checkbox">
      {text.map(item => (
        <li id={item} key={item}>
          <p>{item}</p>
          <div onClick={click} id="box">
            <FaCheck />
          </div>
        </li>
      ))}
    </ul>
  );
};
