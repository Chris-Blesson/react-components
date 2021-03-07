import React, { useState } from 'react';

import OuterBox from './OuterBox';

import { StoreContext } from '../../utils/store';

const MappingLayout = (props) => {
    const [leftOptions, setLeftOptions] = useState(props.leftOptions);

    const [rightOptions, setRightOptions] = useState(props.rightOptions);

    const storeOptions = {
        leftChoices: {
            stateValue: leftOptions,
            setStateValue: setLeftOptions
        },
        rightChoices: {
            stateValue: rightOptions,
            setStateValue: setRightOptions
        }
    }
    return (
        <StoreContext.Provider value={storeOptions}>
            <OuterBox
                leftHeading="Freshdesk fields"
                rightHeading="Freshservice fields"
            />
        </StoreContext.Provider>
    )
}


module.exports = {
    MappingLayout
}