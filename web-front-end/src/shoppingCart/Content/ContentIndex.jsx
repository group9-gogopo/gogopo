import React, { Component } from 'react'
import CartHead from './CartHead/CartHead'
import CartList from './List/CartList'
import CartFooter from './CartFooter/CartFooter'
export class ContentIndex extends Component {

    
    render() {
        console.log(this.props)
        return (
            <div>
                <CartHead></CartHead>
                <CartList 
                dataList={this.props.data} 
                handleAddClick={this.props.handleAddClick}
                handleReducerClick={this.props.handleReducerClick}
                handleDelete={this.props.handleDelete}
                handSelectClick={this.props.handSelectClick}
                ></CartList>
                <CartFooter 
                    data={this.props.data}
                    selectStatus={this.props.selectStatus}
                    totalPrice={this.props.totalPrice}
                    totalNum={this.props.totalNum}
                ></CartFooter>
            </div>
        )
    }
}

export default ContentIndex
