import React, { Component } from 'react'; //import dari react biasa
import { Layout, Row, Col, Modal } from 'antd'; //import dari ant seperti biasa
import '../assets/css/landing.css' //import css dari folder css yang ada di folder assets
import Navbar from '../common/layout/navbar-landing' //import komponen navbar dari folder layout yang ada di folder common 
import ButtonHome from '../common/component/button/button-home'; //import komponen buttonhome yang ada di dalamn folder component yang ada di folder common

const { Content } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/image/LowPoly.jpg`); 
        const {initialData} = this.props;
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '100%'}}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="text-soft-black title-biggest bold">It's Me</span>
                                        <br/>
                                        <span className="text-soft-black title-big bold">Bramantya Raka Genta Ramadhan</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;