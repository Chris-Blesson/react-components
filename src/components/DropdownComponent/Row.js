import React, { useRef, useState, useContext } from 'react';

import App from './App';
import './Row.styles.css';
import { StoreContext } from '../../utils/store';
const Row = (props) => {
    let rowRef = useRef()
    const deleteHandler = () => {
        rowRef.current.remove()
    }
    const [leftToggle, setLeftToggle] = useState(false);
    const [rightToggle, setRightToggle] = useState(false);

    const optionStore = useContext(StoreContext);
    return (
        <React.Fragment>
            <div className="wrapper" ref={rowRef}>
                <div className="leftSection">
                    <App toggle={leftToggle} setToggle={setLeftToggle} currentDropdown={props.currentDropdown} options={optionStore.leftChoices} setCurrentDropdown={props.setCurrentDropdown} />
                </div>
                <div className="rightSection">
                    <App toggle={rightToggle} setToggle={setRightToggle} currentDropdown={props.currentDropdown} options={optionStore.rightChoices} setCurrentDropdown={props.setCurrentDropdown} />
                </div>
                <i
                    className="fa fa-times-circle-o removeFieldOption"
                    onClick={deleteHandler}
                ></i>
            </div>
        </React.Fragment>
    )
}

module.exports = Row;