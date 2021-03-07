import React, { useState, useEffect, useRef } from 'react';

import Dropdown from './Dropdown';





const App = (props) => {

  const [choices, setChoice] = useState(props.options.stateValue[0]);

  const toggleRef = useRef();
  useEffect(() => {
    window.addEventListener('click', (event) => {
      let currentClass = (event.target.className);
      if (!(currentClass.includes('dropdown-area')) && !(currentClass.includes('option-choice')) && !(currentClass.includes('textContent'))) {
        toggleRef.current.className = 'toggleIcon';
        props.setToggle(false);
      }
      else if (props.toggle) {
        toggleRef.current.className = 'toggleIcon';
        props.setToggle(false);
      }
    }, { capture: true });
  }, [])
  return (
    <Dropdown
      choices={choices}
      setChoice={setChoice}
      options={props.options}
      toggle={props.toggle}
      setToggle={props.setToggle}
      ref={toggleRef}
      currentDropdown={props.currentDropdown}
      setCurrentDropdown={props.setCurrentDropdown}
    />
  )
}



module.exports = App;
