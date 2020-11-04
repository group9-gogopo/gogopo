import React from 'react'
// import { Component } from 'react';
// import image1 from '../images/image1.png'
// import image2 from '../images/image2.png'
// import image3 from '../images/image3.png'
import {ProductsStyled} from './productsStyled'

// 函数式组件
const Products =(props)=>{
    // state={
    //     title:''
    // }
    // componentDidMount(){
        // let keys=Object.keys(this.props.data)
        // // console.log(this.props)
        // // console.log(keys)
        // let title=keys[this.props.active]
        // this.setState({
        //     title
        // })
    // }
    // render(){
        return (
            <ProductsStyled>
                <p>{props.title}</p>
                <ul>
                    {
                        props.showList.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <div>
                                        <img src={item.proImage} alt=""/>
                                    </div>
                                    <div className='price'>
                                        <span>{item.proPrice}</span>元
                                        <div>
                                        <svg t="1603954897093" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1829" width="200" height="200"><path d="M784.6912 947.6608a50.0224 50.0224 0 1 1 50.0224-50.0224 50.0736 50.0736 0 0 1-50.0224 50.0224z m-436.1728 0a50.0224 50.0224 0 1 1 50.0224-50.0224 50.0736 50.0736 0 0 1-50.0224 50.0224z m-4.0448-150.8352A86.2208 86.2208 0 0 1 286.72 774.1952a89.1904 89.1904 0 0 1-29.1328-55.5008L203.7248 337.92l-30.72-177.7664c-2.4576-17.92-18.5344-32.7168-35.072-32.7168H97.28a25.6 25.6 0 0 1 0-51.2h40.6016c41.9328 0 79.616 33.4336 85.76 76.0832l30.72 177.664 54.3232 382.464a37.9392 37.9392 0 0 0 12.544 23.5008 35.072 35.072 0 0 0 23.2448 9.472h517.632a25.6 25.6 0 0 1 0 51.2z m39.7312-129.4336a25.6 25.6 0 0 1-1.8432-51.2l432.0768-31.8464h0.5632a37.12 37.12 0 0 0 35.3792-30.72L900.6592 266.24a44.544 44.544 0 0 0-9.3184-34.0992 25.0368 25.0368 0 0 0-19.2-8.7552H320.4096a25.6 25.6 0 0 1 0-51.2h551.7312a76.032 76.032 0 0 1 57.6512 26.112 95.744 95.744 0 0 1 21.8624 73.8304c0 1.024-0.256 2.048-0.4608 3.072L901.12 561.0496a88.6784 88.6784 0 0 1-84.1216 74.496l-430.8992 31.744z" p-id="1830" fill="#ff0000"></path></svg>
                                        </div>
                                    </div>
                                    <div>{item.proName}</div>
                                </li>
                            )
                            })
                    }
                    
                </ul>
            </ProductsStyled>
        )
    }
// }

export default Products;