import React,{ Component } from 'react'
import { StoryListStyled } from './StoryListStyled'
import Detail from '../detail/Detail'


class StoryList extends Component{

    // 跳转到详情页
    // handleToDetail(active,id){
    //     return()=>{
    //         let { history } = this.props
    //         active===0?history.push('/story/storyList/detail'):history.push('/story/newsList/detail)')
    //         history.push('/story/detail')
    //     console.log("跳转到新闻详情")
    //     }
    // }

    render(){
        console.log(this.props)
        return(
            <div>
            <StoryListStyled>
                <ul>
                    {
                        this.props.showList.map((item,index)=>{
                            return(
                                <li key={index} onClick={this.props.onToDetail(this.props.active,item.storyImageId)}>
                                {/* <li key={index} onClick={this.handleToDetail(this.props.active,item.storyImageId)}> */}
                                    <a>
                                    <div>
                                        <img src={item.storyImage} alt=""/>
                                    </div>
                                    <div>
                                        <p>{item.storyName}</p>
                                        <p>{item.storyDate}</p>
                                    </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </StoryListStyled>
                {/* <Route path='/story/newsList'>
                        <StoryList showList={this.state.showList} active={this.state.active} onToDetail={this.handleToDetail}></StoryList>
                </Route> */}
            </div>
        )
    }
}
export default StoryList