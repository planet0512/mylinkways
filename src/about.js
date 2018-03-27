import React, {Component} from 'react';
import './App.css'
import About_Carousel from './about_carousel'
import Clients from "./client-section";
import { HashLink as Link } from 'react-router-hash-link';

class About extends Component {
    render() {
        return (
            <div>
                <About_Carousel />
                <div id="about" ></div>
            <div className="container" >

                <div className="container-fluid" >
                    <section className="row" >
                        <h2>关于建直光电</h2>
                    </section>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div>
                            <p>
                                建直光电科技有限公司成立于2015年1月1日，隶属于台湾六方集团，由董事长林恩键先生(Kevin
                                Lin)带领16位业界平均从业近10年的资深专业技术人才组成，经过两年多发展，规模逐渐壮大，凭借其在视觉检测领域资深而专业的经验，迅速赢得目前国内外各电子代工厂的支持，特别在高端产品制造领域涉猎颇深，在服务器、汽车电子、医疗器械、通讯电子制造领域为客户提供强有力的光学检测方案支持。</p>
                            <p>凭借专业的服务能力以及客户的信任，建直光电在最近三年成功导入一系列新产品，从而距离实现“Total Solution”更近一步。</p>

                            <p>目前产品群覆盖锡膏印刷机（Printer）、3D锡膏检测设备（SPI）、炉前2D&3D光学检测设备（Pre-Reflow AOI）、炉温曲线智能监测系统（Profile
                                Intelligent System）、炉后2D&3D光学检测设备（Post-Reflow
                                AOI）、点胶机点胶阀（Dispenser、Pump）、SMT粘合剂（Adhesive, Under-Fill）、固化炉（Curing
                                Oven）、Coating设备（Conformal Coating）、选择性Flux喷涂设备（Selective Flux Jetting）、3D
                                在线X光检测设备（AXI）、2.5D离线X光分析设备（2.5D X-ray）、流水线传输设备（Loader&Unloader）、智能工厂自动化开发（Factory
                                Automation）等。</p>

                            <p>除了在电子代工行业，建直目前在非标自动化、摄像头模组、半导体领域也在积极布局相关产品，我们希望通过在各行业不同的特有经验，为客户提供更具广阔思路的一体化解决方案。

                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="container-fluid">
                    <section className="row middle">
                        <h2>集团关联企业
                        </h2>
                    </section>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <section className="col-sm-6">
                            <h3>中国</h3>
                            <ul>
                                <li>
                                    六方精机科技（昆山）有限公司
                                </li>
                                <li>
                                    东莞海溢机械配件有限公司
                                </li>
                                <li>
                                    浙江智泓科技有限公司
                                </li>
                                <li>
                                    苏州建宜光电科技有限公司
                                </li>
                                <li>
                                    昆山建皇光电科技有限公司
                                </li>
                                <li>
                                    昆山德朋电子科技有限公司
                                </li>
                                <li>
                                    爱赛克贸易（上海）有限公司
                                </li>
                            </ul>
                            <ul>
                            <h3>台湾
                               </h3>
                            <li>
                                六方精机股份有限公司

                            </li>
                            <li>
                                智伸科技股份有限公司
                            </li>
                            </ul>
                        </section>
                        <section className="col-sm-6">
                            <h3>美国</h3>
                            <ul>
                            <li>CA. USA Sales Office
                            </li>
                            <li>Co. USA Sales Office
                            </li>
                            </ul>
                            <h3>日本</h3>
                            <ul>
                                <li>Asec Co., Ltd
                                </li>
                            </ul>
                            <h3>泰国</h3>
                            <ul>
                                <li>Global Thaixon precision
                                </li>
                            </ul>
                            <h3>德国</h3>
                            <ul>
                                <li>Sixxon Germany
                                </li>
                            </ul>
                            <h3>墨西哥</h3>
                            <ul>
                                <li>Mexxon Precision S DE RL DE CV
                                </li>
                            </ul>

                        </section>
                    </div>
                </div>
                </div>
                      <Clients/>
                    </div>
        )
    }
}

export default About