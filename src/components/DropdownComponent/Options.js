import React, { useEffect } from 'react';
import './Options.styles.css';


const Options = React.forwardRef((props, toggleRef) => {
    const selectOption = (item) => {
        props.setToggle(!(props.toggle));
        props.setChoice(item);
    }

    useEffect(() => {
        if (!props.toggle) {
            toggleRef.current.className = 'toggleIcon';
        }
        else {
            toggleRef.current.className = 'toggleIcon invert';
        }
    }, [props.toggle])
    let renderedOptions = props.options.map(item => {
        let flag = false;
        if (item.value === props.choices.value) {
            flag = true;
        }
        return (
            <li
                className={`option-choice ${flag ? 'selected' : ''}`}
                key={`${item.value}${item.index}`}
                onClick={() => selectOption(item)}
            >
                <div className="textContent">{item.value}</div>
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