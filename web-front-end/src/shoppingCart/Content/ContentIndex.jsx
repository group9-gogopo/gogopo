import React, { Component } from 'react'
import CartHead from './CartHead/CartHead'
import CartList from './List/CartList'
import CartFooter from './CartFooter/CartFooter'
export class ContentIndex extends Component {

    
    render() {
        return (
            <div>
                <CartHead></CartHead>
                <CartList 
                dataList={this.props.data} 
                handleAddClick={this.props.handleAddClick}
                handleReducerClick={this.props.handleReducerClick}
                handleDelete={this.props.handleDelete}
                ></CartList>
                <CartFooter data={this.props.data}></CartFooter>
            </div>
        )
    }
}

export default ContentIndex
