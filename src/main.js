import React, {Component} from 'react';
import './App.css';
import th1000si from './img/th1000si.png'
import tr1000si from './img/tr1000si.jpg'
import v510i from './img/v510i.jpg'
import Clients from "./client-section";
import About_Carousel from "./about_carousel";
import Contact from "./contact";
import { HashLink as Link } from 'react-router-hash-link';




class Main extends Component {
    render() {
        return (
            <div>
                <About_Carousel/>
                <div className="container">
                        <div className="container-fluid">
                            <div className="row">
                            <section className="col-sm-12 middle" id="landing_middle">
                                <h3>解决方案</h3>
                                <h4>完整的解决方案</h4>
                            </section>
                            </div>

                            <section className="col-sm-12">

                                <ul class="nav nav-pills mb-3 nav-justified" id="pills-tab bottom-nav" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">SMT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">半导体</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">自动化</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="container-fluid">
                                        <div className="row" >
                                            <section className="col-sm-6" id="product-detail">
                                                <h3>SMT</h3>
                                                    <ul className=
                                                            "navbar-nav"
                                                          >
                                                        <li>锡膏印刷机（Printer)</li>
                                                        <li>锡膏检测仪（SPI）</li>
                                                        <li>光学检测设备（AOI）</li>
                                                        <li>助焊剂喷射机（Fluxing）</li>
                                                        <li>3D在线X光检测设备（AXI）</li>
                                                        <li>2.5D离线X光分析设备</li>
                                                        <li>点胶机与点胶阀</li>
                                                        <li>UV胶光学检测设备</li>
                                                        <li>X光点料机</li>
                                                        <li>SMT粘结剂方案</li>
                                                    </ul>
                                                <Link to="/solutions/smt"><button type="button" class="btn btn-primary">了解更多</button></Link>
                                            </section>

                                            <section className="col-sm-6">
                                                <img class="card-img-top" src={th1000si} alt="Card image cap" />
                                            </section>

                                        </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <section className="col-sm-6" >
                                                    <img class="card-img-top" src={tr1000si} alt="Card image cap" />
                                                </section>
                                                <section className="col-sm-6" id="product-detail">

                                                    <h3>半导体</h3>
                                                    <ul className=
                                                            "text-right"
                                                    >
                                                        <li>Vitrox - Th1000Si</li>
                                                        <li>Vitrox - Tr1000Si</li>
                                                    </ul>
                                                    <div><Link to="/solutions/semi-conductor"> <button type="button" className="btn btn-primary float-left">了解更多</button></Link></div>
                                                </section>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <section className="col-sm-6" id="product-detail">
                                                    <h3>自动化</h3>
                                                    <ul className=
                                                            "navbar-nav"
                                                    >
                                                        <li>摄像头模组自动测试设备
                                                        </li>
                                                        <li>摄像头模组Tray盘切换设备</li>
                                                        <li>标签对比检测系统</li>
                                                        <li>AXI自动化进出板方案</li>
                                                        <li>螺丝对锁检测方案</li>
                                                    </ul>
                                                    <Link to="/solutions/linkways"><button type="button" class="btn btn-primary">了解更多</button></Link>
                                                </section>
                                                <section className="col-sm-6">
                                                    <img class="card-img-top" src={v510i} alt="Card image cap" />
                                                </section>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                </div>



<div className="container">
                        <div className="container-fluid">
                            <section className="row" id="landing_middle" >

                                <div className="col-sm-6" id="product-detail">
                                    <h3 >关于建直光电</h3>
                                    <h4>建直光电由从业近10年的资深专业技术人才组成，凭借其在视觉检测领域资深而专业的经验，迅速赢得目前国内外各电子代工厂的支持</h4>
                                    <p>建直光电科技有限公司成立于2015年1月1日，隶属于台湾六方集团，由董事长林恩键先生(Kevin
                                        Lin)带领16位业界平均从业近10年的资深专业技术人才组成，经过两年多发展，规模逐渐壮大，凭借其在视觉检测领域资深而专业的经验，迅速赢得目前国内外各电子代工厂的支持，特别在高端产品制造领域涉猎颇深，在服务器、汽车电子、医疗器械、通讯电子制造领域为客户提供强有力的光学检测方案支持。</p>
                                    <button type="button" class="btn btn-primary">了解更多</button>
                                </div>

                                <div className="col-sm-6">
                                    <img src={th1000si} />
                                </div>
                            </section>
                        </div>
</div>
               <Clients/>
                <Contact/>

            <div className="container-fluid">

                <footer className="container-fluid text-center navbar-light bg-light navbar-expand-lg">
                    <ul class="navbar-nav">
                        <li class="nav-item active dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" href="#">Company <span
                                class="sr-only">(current)</span></a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Action</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Solutions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Support</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </footer>
        </div>
            </div>


        )
            ;
    }
}

export default Main;
