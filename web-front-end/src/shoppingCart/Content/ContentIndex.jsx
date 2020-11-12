import React from 'react'
import CartHead from './CartHead/CartHead'
import CartList from './List/CartList'
import CartFooter from './CartFooter/CartFooter'
const  ContentIndex =(props)=> {

        return (
            <div>
                <CartHead></CartHead>
                <CartList 
                    dataList={props.data} 
                    handleAddClick={props.handleAddClick}
                    handleDescClick={props.handleDescClick}
                    handleDelete={props.handleDelete}
                    handSelectClick={props.handSelectClick}
                ></CartList>
                <CartFooter 
                    data={props.data}
                    selectStatus={props.selectStatus}
                    totalPrice={props.totalPrice}
                    totalNum={props.totalNum}
                ></CartFooter>
            </div>
        )
}

export default ContentIndex
