import React, { Component } from 'react';
import AllOrderUi from '../ui/AllOrderUi'

class AllOrder extends Component {

    onGoToComment=(time,img,commentValue,id)=>{
        
        return ()=>{
            this.props.history.push('/comment',{ time,img,commentValue,id})
        }
    }
    render() {
        return (
            <AllOrderUi 
                handleOnGoToComment={this.onGoToComment}
                index={this.props.location.state}
            ></AllOrderUi>
        );
    }
}

export default AllOrder;