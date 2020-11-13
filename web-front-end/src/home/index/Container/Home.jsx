import React, { Component } from 'react';
import IndexUi from '../ui/IndexUi'

import { connect } from 'react-redux'
import actionCreator from '../actionCreator'

@connect(
    (state)=>{
        return {
            num:state.home.num
        }
    },
    (dispatch)=>({
        addNum(num){
            dispatch(actionCreator.changeNum(num))        
        }
    })

)
class Home extends Component {

    render() {
        console.log(this.props);
        return (
            <IndexUi 
             num={this.props.num}
             addNum={this.props.addNum}
            ></IndexUi>
        );
    }

    componentDidMount(){
        // this.props.addNum()
        // console.log(num)
    }
}

export default Home;