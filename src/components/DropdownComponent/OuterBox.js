import React, { useState, useContext } from 'react';
import './OuterBox.styles.css';
import Row from './Row';
import { StoreContext } from '../../utils/store';

const OuterBox = ({ leftHeading, rightHeading }) => {
    const [currentDropdown, setCurrentDropdown] = useState(null);
    const [options, setOptions] = useState(1)
    const onClickHandler = () => {
        setOptions(options + 1);
        setCurrentDropdown(null);
    }

    const optionStore = useContext(StoreContext);
    const columns = Array(options).fill().map((item, index) => {
        return <Row setCurrentDropdown={setCurrentDropdown} currentDropdown={currentDropdown} leftChoices={optionStore.leftChoices} rightChoices={optionStore.rightChoices} key={index} index={index} />
    })
    return (
        <div className="counter">
            <div className="heading">
                <div className="heading-label">
                    <div className="wrapper">
                        <div className="section-heading">
                            <strong key="left">{leftHeading}</strong>
                        </div>
                        <div className="section-heading">
                            <strong key="right">{rightHeading}</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="addOptionDiv">
                {columns}
            </div>
            <div className="addOptionChoices">
                <div className="addOption"
                    onClick={onClickHandler}
                >
                    <div className="addMappingRow">
                        <i className="fa fa-plus-circle">  </i>
                        <div className="addMappingRowText">
                            Add new field mapping
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default OuterBox;