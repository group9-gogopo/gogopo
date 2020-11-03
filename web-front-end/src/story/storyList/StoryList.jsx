import React,{ Component } from 'react'
import { StoryListStyled } from './StoryListStyled'

class StoryList extends Component{
    state={
        list:[
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
        ]
    }
    render(){
        return(
            <StoryListStyled>
                <ul>
                    {
                        this.props.showList.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <div>
                                        <img src="" alt=""/>
                                    </div>
                                    <div>
                                        <p>{item.storyName}</p>
                                        <p>{item.storyDate}</p>
                                    </div>
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