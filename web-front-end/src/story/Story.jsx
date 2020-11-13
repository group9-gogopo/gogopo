import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LeftNav from './leftNav/LeftNav'
import { loadDataAsync } from './actionCreater'
import { StoryStyled } from './StoryStyled'
import StoryList from './storyList/StoryList'
import Detail from './detail/Detail'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'


@connect(
    state => {
        return {
            showList: state.story.showList
        }
    },
    dispatch => ({
        loadData(storytype) {
            dispatch(loadDataAsync(storytype))
        }
    })
)
class Story extends Component {
    state = {
        data: {
            '水果知识': [
                {
                    storyId: 1,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558454228&di=74802848a184914bbfd6f077a22f1592&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130522%2F1867367_130919224118_2.jpg',
                    storyName: '哪些水果搭配榨汁好？',
                    storyDate: '2019-03-13'
                },
                {
                    storyId: 2,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558557649&di=48ce3726fbc6367b08c6d4e67fd6ccfd&imgtype=0&src=http%3A%2F%2Fp0.itc.cn%2Fc_cut%2Cx_51%2Cy_0%2Cw_538%2Ch_359%2Fimages01%2F20200525%2F5c9a6a91adc8411eafae279349073167.jpeg',
                    storyName: '草莓慕斯蛋糕，口感画嘴草莓鲜美，忍不住又想偷吃一口        ',
                    storyDate: '2019-02-21'
                },
                {
                    storyId: 3,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558454228&di=74802848a184914bbfd6f077a22f1592&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130522%2F1867367_130919224118_2.jpg',
                    storyName: '一周果汁轻松配，轻食主义瘦起来',
                    storyDate: '2019-02-01'
                },
                {
                    storyId: 4,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558527554&di=0ccd5663493a0f3bbf3aa32fadb913ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190623%2F64bc5b400e024af297befaab9e7ac1e0.jpeg',
                    storyName: '甜品--麦片酸奶杯这样吃百吃不腻，吃1次不过瘾！    ',
                    storyDate: '2019-01-17'
                },
                {
                    storyId: 5,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558527554&di=0ccd5663493a0f3bbf3aa32fadb913ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190623%2F64bc5b400e024af297befaab9e7ac1e0.jpeg',
                    storyName: '香蕉做早餐,10分钟搞定,孩子吃了好吸收,促排便一定别错过! ',
                    storyDate: '2019-01-09'
                },
            ],
            '新闻中心': [
                {
                    storyId: 1,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558454228&di=74802848a184914bbfd6f077a22f1592&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130522%2F1867367_130919224118_2.jpg',
                    storyName: '一周果汁轻松配，轻食主义瘦起来',
                    storyDate: '2019-02-01'
                },
                {
                    storyId: 2,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558527554&di=0ccd5663493a0f3bbf3aa32fadb913ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190623%2F64bc5b400e024af297befaab9e7ac1e0.jpeg',
                    storyName: '甜品--麦片酸奶杯这样吃百吃不腻，吃1次不过瘾！    ',
                    storyDate: '2019-01-17'
                },
                {
                    storyId: 3,
                    storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558527554&di=0ccd5663493a0f3bbf3aa32fadb913ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190623%2F64bc5b400e024af297befaab9e7ac1e0.jpeg',
                    storyName: '香蕉做早餐,10分钟搞定,孩子吃了好吸收,促排便一定别错过! ',
                    storyDate: '2019-01-09'
                }
            ]
        },
        showList: [
            {
                storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558454228&di=74802848a184914bbfd6f077a22f1592&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130522%2F1867367_130919224118_2.jpg',
                storyName: '哪些水果搭配榨汁好？',
                storyDate: '2019-03-13'
            },
            {
                storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558557649&di=48ce3726fbc6367b08c6d4e67fd6ccfd&imgtype=0&src=http%3A%2F%2Fp0.itc.cn%2Fc_cut%2Cx_51%2Cy_0%2Cw_538%2Ch_359%2Fimages01%2F20200525%2F5c9a6a91adc8411eafae279349073167.jpeg',
                storyName: '草莓慕斯蛋糕，口感画嘴草莓鲜美，忍不住又想偷吃一口        ',
                storyDate: '2019-02-21'
            },
            {
                storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558454228&di=74802848a184914bbfd6f077a22f1592&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130522%2F1867367_130919224118_2.jpg',
                storyName: '一周果汁轻松配，轻食主义瘦起来',
                storyDate: '2019-02-01'
            },
            {
                storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558527554&di=0ccd5663493a0f3bbf3aa32fadb913ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190623%2F64bc5b400e024af297befaab9e7ac1e0.jpeg',
                storyName: '甜品--麦片酸奶杯这样吃百吃不腻，吃1次不过瘾！    ',
                storyDate: '2019-01-17'
            },
            {
                storyImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604558527554&di=0ccd5663493a0f3bbf3aa32fadb913ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190623%2F64bc5b400e024af297befaab9e7ac1e0.jpeg',
                storyName: '香蕉做早餐,10分钟搞定,孩子吃了好吸收,促排便一定别错过! ',
                storyDate: '2019-01-09'
            }
        ],
        active: 0,
        storytypes:["knowledge","news"],
    }

    handleClick = (item, index) => {
        return () => {
            
            this.setState({
                active: index

            })
            let { history } = this.props
            index === 0 ? history.push('/story/storyList') : history.push('/story/newsList')
            this.props.loadData(this.state.storytypes[index])
        }
    }


    // 跳转到详情页
    handleToDetail = (active, id) => {
        return () => {
            let { history } = this.props
            history.push('/story/detail',{msg:this.props.showList[id]})
        }
    }


    componentDidMount(){
        //这里做数据请求
        this.props.loadData(this.state.storytypes[0])
    }
    componentDidUpdate(){
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Nav></Nav>
                <StoryStyled>
                    <LeftNav active={this.state.active} clickOn={this.handleClick}></LeftNav>
                    <Switch>
                        <Route path='/story/storyList'>
                            <StoryList showList={this.props.showList} active={this.state.active} onToDetail={this.handleToDetail}></StoryList>
                        </Route>
                        <Route path='/story/newsList'>
                            <StoryList showList={this.props.showList} active={this.state.active} onToDetail={this.handleToDetail}></StoryList>
                        </Route>
                        <Route path='/story/detail'>
                            <Detail></Detail>
                        </Route>
                        <Route path='/story/detail'>
                            <Detail></Detail>
                        </Route>
                        <Redirect from='/story' to='/story/storyList'></Redirect>
                    </Switch>
                </StoryStyled>
                <Footer></Footer>
            </div>
        )
    }
}

export default Story