import React, { useEffect } from 'react';
import './Options.styles.css';


const Options = React.forwardRef((props, toggleRef) => {

    const updateStateOptions = (item,toggle) => {

        console.info(item, 'Item');
        let updatedOptions = props.options.map((choiceItem) => {
            if ((choiceItem.value === item.value) && (item.value !== '--select--')) {
                choiceItem['disabled'] = toggle;
            }
            return choiceItem
        })
        props.setOptions(updatedOptions);
    }
    
    const selectOption = (item) => {
        if (props.choices !== item && !(item.disabled)) {
            updateStateOptions(props.choices, false);
            props.setToggle(!(props.toggle));
            props.setChoice(item);
            props.setRow(item);
            updateStateOptions(item, true);
        }
    }



    useEffect(() => {
        if (!props.toggle) {
            toggleRef.current.className = 'toggleIcon';
        }
        else {
            toggleRef.current.className = 'toggleIcon invert';
        }
    }, [props.toggle]);


    let renderedOptions = props.options.map(item => {
        let flag = false;
        if (((item.value === props.choices.value) || item.disabled) && item.value !== '--select--') {
            flag = true;
        }
        return (
            <li
                className={`option-choice ${flag ? 'selected' : ''}`}
                key={`${item.value}${item.index}`}
                onClick={() => selectOption(item)}
            >
                <div className={`textContent ${flag ? 'selected' : ''}`}>{item.value}</div>
                <div className="check"></div>
            </li>
        )
    })


    return (
        <div className="optionContainer">
            <ul className={`option-dropdown ${props.toggle ? 'show' : 'hide'}`}>
                {renderedOptions}
            </ul>

        </div>
    )

})

module.exports = Options;