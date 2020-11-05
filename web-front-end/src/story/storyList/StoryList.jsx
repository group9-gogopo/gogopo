import React,{ Component } from 'react'
import { StoryListStyled } from './StoryListStyled'

class StoryList extends Component{
    render(){
        console.log(this.props)
        return(
            <StoryListStyled>
                <ul>
                    {
                        this.props.showList.map((item,index)=>{
                            return(
                                <li key={index} onClick={this.props.onToDetail(item.storyImageId)}>
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
        )
    }
}
export default StoryList