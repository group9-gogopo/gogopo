import React from 'react';

import {
  Container
} from './StyledDiscounts'

import DiscountList from '@c/discountslist/DiscountList'
import Nav from '@c/nav/Nav.jsx'
import DiscountsList from './DiscountsList'
import Header from '@c/header/Header'
import Footer from '@c/footer/Footer'

import banner from '../../assets/images/discountsBanner_02.png'
import title from '../../assets/images/discountsTitle.gif'

function DiscountsUi(props) {
  return (
    <Container >
      <Header></Header>
      <Nav></Nav>
      <div className="banner">
        <img src={banner} alt=""/>
      </div>
      <div className="discountsList">
        <h1><img src={title} alt=""/></h1>
        <p>带你吃遍全世界 水果促销季</p>
        <div className='listBox'>
          <DiscountList goodslist={props.list}></DiscountList>
        </div>
      </div>
      <div className='listinfo'>
        <DiscountsList goodslist={props.list}></DiscountsList>
      </div>
      <Footer></Footer>
    </Container>
  );
}

export default DiscountsUi;