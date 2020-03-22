import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="image-thumb">
                <img src="https://lh3.googleusercontent.com/proxy/_SmO4Zx7p4nXqxseZECYLD8g7XJedp-THrGm7Q8cTiEj1GdQbPqBe6aHOu1Ecs5DfEUII7OISIv5UJ_cRvaoGyxRrChz-Tg=s0-d" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'Xx dikerjakan. X jam yang lalu'
}

export default YoutubeComp;