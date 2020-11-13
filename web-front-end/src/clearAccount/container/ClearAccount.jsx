import React from 'react'
import ClearAccountUI from '../ui/ClearAccountUI'
const ClearAccount = (props) => {

    let clearAc=props.location.state
    return(
        <ClearAccountUI clearAc={clearAc}></ClearAccountUI>

    )
}

export default ClearAccount