import React, { Component } from 'react';
import AllOrderUi from '../ui/AllOrderUi'

class AllOrder extends Component {

    onGoToComment=(time,img)=>{
        return ()=>{
            this.props.history.push('/comment',{time,img})
        }
    }
    render() {
        console.log(this.props)
        return (
            <AllOrderUi handleOnGoToComment={this.onGoToComment}></AllOrderUi>
        );
    }
}

export default AllOrder;