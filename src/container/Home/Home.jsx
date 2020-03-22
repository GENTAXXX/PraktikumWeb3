import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';

class Home extends Component {
    render(){
        return(
            <div>
                <p>YouTube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Tugas React State - Bagian 1"
                    desc="2x dikerjakan. 2 jam yang lalu"/>
                <YoutubeComp 
                    time="9.10" 
                    title="Tugas React State - Bagian 2"
                    desc="2x dikerjakan. 2 jam yang lalu"/>
                <YoutubeComp 
                    time="1.42" 
                    title="Tugas React State - Bagian 3"
                    desc="2x dikerjakan. 2 jam yang lalu"/>
                <YoutubeComp 
                    time="10.30"
                    title="Tugas React State - Bagian 4"
                    desc="2x dikerjakan. 2 jam yang lalu"/>
                <YoutubeComp />
            </div>
        )
    }
}

export default Home;