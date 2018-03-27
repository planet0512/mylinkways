import React, {Component} from 'react';
import '../App.css';
import linkways1 from '../img/linkway_1.png'
import linkways2 from '../img/linkway_2.png'
import linkways3 from '../img/linkway_3.png'
import linkways4 from '../img/linkway_4.png'
import linkways5 from '../img/linkway_5.png'
import linkways6 from '../img/linkway_6.png'

import {Link} from 'react-router-dom'


class Linkways_Products extends Component {
    render() {
        return (
            <div>
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/linkways"><a href="#">自动化</a></Link></li>
                        </ol>
                    </nav>

                    <section className="row">
                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive w-50 d-block mx-auto" src={linkways1}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">手机镜头自动测试
                                    </h6>
                                </div>
                            </div>
                        </section>
                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive w-50 d-block mx-auto" src={linkways2}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">自动包装线
                                    </h6>
                                </div>
                            </div>
                        </section>
                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className=" img-responsive w-50 d-block mx-auto" src={linkways3}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">客制化AOI检测
                                    </h6>

                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </div>

            <div className="container">
            <div className="container-fluid">

                    <section className="row">
                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className="img-responsive w-50 d-block mx-auto" src={linkways4}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">条码检测设备
                                    </h6>
                                </div>
                            </div>
                        </section>
                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className="img-responsive w-50 d-block mx-auto" src={linkways5}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">自动收放板系统

                                    </h6>
                                </div>
                            </div>
                        </section>

                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive w-50 d-block mx-auto" src={linkways6}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">多连板条码扫描

                                    </h6>

                                </div>
                            </div>
                        </section>

                    </section>

            </div>
            </div>
            </div>
        )}}


export default Linkways_Products