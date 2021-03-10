import React, { useRef, useState } from 'react';

import App from './App';
import './Row.styles.css';

const Row = (props) => {
    const [leftToggle, setLeftToggle] = useState(false);
    const [rightToggle, setRightToggle] = useState(false);
    const [rowLeft, setRowLeft] = useState('');
    const [rowRight, setRowRight] = useState('');

    let rowRef = useRef();
    const updateChoiceState = (rowValue, choices, setStateValue) => {
        let updatedChoices = choices.map(item => {
            if (item.value === rowValue) {
                item['disabled'] = false;
            }
            return item;
        })
        setStateValue(updatedChoices);
    }
    const deleteHandler = () => {
        updateChoiceState(rowLeft.value, props.leftChoices.stateValue, props.leftChoices.setStateValue);
        updateChoiceState(rowRight.value, props.rightChoices.stateValue,props.rightChoices.setStateValue);
        rowRef.current.remove()
    }




    return (
        <React.Fragment>
            <div className="wrapper" ref={rowRef}>
                <div className="leftSection">
                    <App toggle={leftToggle} setRow={setRowLeft} setToggle={setLeftToggle} currentDropdown={props.currentDropdown} options={props.leftChoices} setCurrentDropdown={props.setCurrentDropdown} />
                </div>
                <div className="rightSection">
                    <App toggle={rightToggle} setRow={setRowRight} setToggle={setRightToggle} currentDropdown={props.currentDropdown} options={props.rightChoices} setCurrentDropdown={props.setCurrentDropdown} />
                </div>
                <i
                    className="fa fa-times-circle-o removeFieldOption"
                    onClick={deleteHandler}
                ></i>
            </div>
        </React.Fragment>
    )
}

export default Row;