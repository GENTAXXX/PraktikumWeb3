import React, { Component } from 'react'; 
import { Layout, Row, Col } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' ;

const { Content } = Layout; 
const whyData = [
    {
        job: 'Bakul Sate',
        description: 'Pedagang yang menjual sate, baik menetap atau berkeliling'
    },
    {
        job: 'Bakul Iwak',
        description: 'Pedagang yang menjual ikan segala jenis'
    },
    {
        job: 'Bakul Dodol',
        description: 'Pedagang yang menjual berbagai macam jenis dodol'
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">                     
                                { whyData.map( data =>
                                        <Col>
                                            <div className="card">
                                                <p className="tittle">{data.job}</p>
                                                <p className="desc">{data.description}></p>
                                            </div>
                                        </Col>
                                    )
                                }
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;