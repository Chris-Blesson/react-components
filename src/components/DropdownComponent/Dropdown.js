import React, { useRef, useEffect } from 'react';
import './Dropdown.styles.css';

import Options from './Options';


const Dropdown = React.forwardRef((props, toggleRef) => {

    const inputRef = useRef();
    const handleToggle = (reference) => {
        if ((reference.current.className).includes('invert')) {
            reference.current.className = 'toggleIcon';
        }
        else {
            reference.current.className = 'toggleIcon invert';
        }

    }
    const toggleDropdown = () => {
        if (props.currentDropdown) {
            if (props.currentDropdown.toggleProp) {
                props.currentDropdown['set'](!props.currentDropdown.toggleProp);
            }

            props.setCurrentDropdown({ dropdownRef: toggleRef, toggleProp: !(props.toggle), set: props.setToggle });
        }
        else {
            props.setCurrentDropdown({ dropdownRef: toggleRef, toggleProp: !(props.toggle), set: props.setToggle });
        }
        handleToggle(toggleRef);
        props.setToggle(!props.toggle);

    }

    useEffect(() => {
        inputRef.current.value = props.choices.value;
    }, [props.choices])

    
    return (
        <React.Fragment>
            <div className="DropdownComponent" onClick={toggleDropdown}>
                <input className="dropdown-area" ref={inputRef} />
                <div className="toggleIcon" ref={toggleRef}></div>
            </div>
            <div className="optionBox">
                <Options
                    toggle={props.toggle}
                    choices={props.choices}
                    setChoice={props.setChoice}
                    options={props.options.stateValue}
                    setToggle={props.setToggle}
                    ref={toggleRef}
                />
            </div>

        </React.Fragment>
    )
})

module.exports = Dropdown;