import React,{ Component } from 'react'
import { StoryListStyled } from './StoryListStyled'


class StoryList extends Component{

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