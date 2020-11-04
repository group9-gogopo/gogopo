import React from 'react';

import {
  Container
} from './StyledDiscounts'

import HeadNav from '@c/headnav/HeadNav'
import Search from '@c/search/Search'
import DiscountList from '@c/discounts/DiscountList'
import Nav from '@c/nav/Nav.jsx'
import DiscountsListTwo from './DiscountsListTwo'
import SpecialsThree from '@c/discounts/SpecialsThree'

import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/discountsBanner_02.png'
import title from '../../assets/images/discountsTitle.gif'

function DiscountsUi(props) {
  return (
    <Container>
      <HeadNav></HeadNav>
      <div className='header'>
        <img src={logo} alt=""/>
        <Search
          margin='30px 0 0 100px'
        ></Search>
      </div>
      <Nav></Nav>
      <div className="banner">
        <img src={banner} alt=""/>
      </div>
      <div className="discountsList">
        <h1><img src={title} alt=""/></h1>
        <p>带你吃遍全世界 水果促销季</p>
        <div className='listBox'>
          <DiscountList></DiscountList>
        </div>
      </div>
      <DiscountsListTwo></DiscountsListTwo>
      <SpecialsThree></SpecialsThree>
    </Container>
  );
}

export default DiscountsUi;