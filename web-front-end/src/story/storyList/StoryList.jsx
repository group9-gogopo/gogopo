import React,{ Component } from 'react'
import { StoryListStyled } from './StoryListStyled'


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
        return(
            <div>
            <StoryListStyled>
                <ul>
                    {
                        this.props.showList.map((item,index)=>{
                            return(
                                <li key={index} onClick={this.props.onToDetail(this.props.active,index)}>
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