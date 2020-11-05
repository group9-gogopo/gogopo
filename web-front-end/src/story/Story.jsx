import React,{ Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import LeftNav from './leftNav/LeftNav'
import {StoryStyled} from './StoryStyled'
import StoryList from './storyList/StoryList'
// import Detail from './detail/Detail'
import Footer from '../components/footer/Footer'


class Story extends Component{

    state={
        data:{
            '水果知识':[
                {
                    storyName:'哪些水果搭配榨汁好？',
                    storyDate:'2019-03-13'
                },
                {
                    storyName:'草莓慕斯蛋糕，口感画嘴草莓鲜美，忍不住又想偷吃一口        ',
                    storyDate:'2019-02-21'
                },
                {
                    storyName:'一周果汁轻松配，轻食主义瘦起来',
                    storyDate:'2019-02-01'
                },
                {
                    storyName:'甜品--麦片酸奶杯这样吃百吃不腻，吃1次不过瘾！    ',
                    storyDate:'2019-01-17'
                },
                {
                    storyName:'香蕉做早餐,10分钟搞定,孩子吃了好吸收,促排便一定别错过! ',
                    storyDate:'2019-01-09'
                },
            ],
            '新闻中心':[
                {
                    storyName:'甜品--麦片酸奶杯这样吃百吃不腻，吃1次不过瘾！    ',
                    storyDate:'2019-01-17'
                },
                {
                    storyName:'香蕉做早餐,10分钟搞定,孩子吃了好吸收,促排便一定别错过! ',
                    storyDate:'2019-01-09'
                },
            ]
        },
        showList:[
            {
                storyName:'哪些水果搭配榨汁好？',
                storyDate:'2019-03-13'
            },
            {
                storyName:'草莓慕斯蛋糕，口感画嘴草莓鲜美，忍不住又想偷吃一口        ',
                storyDate:'2019-02-21'
            },
            {
                storyName:'一周果汁轻松配，轻食主义瘦起来',
                storyDate:'2019-02-01'
            },
            {
                storyName:'甜品--麦片酸奶杯这样吃百吃不腻，吃1次不过瘾！    ',
                storyDate:'2019-01-17'
            },
            {
                storyName:'香蕉做早餐,10分钟搞定,孩子吃了好吸收,促排便一定别错过! ',
                storyDate:'2019-01-09'
            },
        ],
        active:0
    }

    handleClick=(item,index)=>{
        return ()=>{
            let showList=this.state.data[item]
            console.log(showList)
            this.setState({
                active:index,
                showList
            })
            console.log('触发事件')
        }
    }

    // componentDidMount(){
    //     //这里做数据请求
    //     let first=Object.keys(this.state.data)
    //     let showList=this.state.data[first[this.state.active]]
    //     this.setState({
    //         showList
    //     })
    // }

    render(){
        console.log(this.state.showList)
        return(
            <div>
                <StoryStyled>
                        <LeftNav {...this.state} clickOn={this.handleClick}></LeftNav>
                        {/* <StoryList {...this.state}></StoryList> */}
                        {/* <Detail></Detail> */}
                        <Switch>
                            <Route path='/story/storyList'> <StoryList showList={this.state.showList}></StoryList></Route>
                            <Route path='/story/newsList' component={StoryList}></Route>
                            <Redirect from='/story' to='/story/storyList'></Redirect>
                        </Switch>
                </StoryStyled>
                <Footer></Footer>
            </div>
        )
    }
}

export default Story