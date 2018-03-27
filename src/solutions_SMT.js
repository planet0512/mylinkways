import React, {Component} from 'react';
import './App.css'
import v510i from './img/v510i.jpg'
import ipm from './img/ipm_x3.jpg'
import {Link} from 'react-router-dom'
import v810i from './img/v810ex.png'
import oc from './img/OC-SCAN-CCX-3.jpg'
import yxlon from './img/yxlon.png'
import interfux from './img/icsf.png'
import hyperion from './img/hyperion.png'
import conformal_coating from './img/linkways_conformal.png'
import spea from './img/spea_3030.png'


class Solutions_SMT extends Component {
    render() {
        return (
            <div>

            <div className="container">
            <div className="container-fluid">
                <div className="product-page">
                <h3>SMT</h3>
                <section className="row" id="SMT-product-page">
                    <section className="col-sm-4">
                        <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive d-block mx-auto" src={v510i}/> </div></Link>
                        <div className="card-body">
                    <h6 className="card-title">光学检测仪（AOI）</h6>
                            <Link to="/solutions/th1000s"><a href="#" class="btn btn-primary">查看详情</a></Link>
                    </div>
                        </div>
                    </section>
                    <section className="col-sm-4">
                        <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive w-50 d-block mx-auto" src={ipm}/></div>
                            <div className="card-body">
                                <h6 className="card-title">锡膏印刷机（Printer）</h6>
                                <Link to="/solutions/tr1000s"><a href="#" class="btn btn-primary ">查看详情</a></Link>
                            </div>
                        </div>
                    </section>
                    <section className="col-sm-4">
                        <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive  d-block mx-auto w-75" src={v810i}/> </div></Link>
                            <div className="card-body">
                                <h6 className="card-title">锡膏检测仪（SPI）</h6>
                                <Link to="/solutions/th1000s"><a href="#" class="btn btn-primary">查看详情</a></Link>

                            </div>
                        </div>
                    </section>
                    
                        </section>
                    <section className="row" id="SMT-product-page">
                        <section className="col-sm-4">
                            <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive  d-block mx-auto w-25" src={oc}/> </div></Link>
                                <div className="card-body">
                                    <h6 className="card-title">3D在线全自动X光检测设备</h6>
                                    <Link to="/solutions/th1000s"><a href="#" class="btn btn-primary">查看详情</a></Link>

                                </div>
                            </div>
                        </section>
                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive  d-block mx-auto w-50" src={yxlon}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">2.5D X光分析设备</h6>
                                    <Link to="/solutions/tr1000s"><a href="#" class="btn btn-primary ">查看详情</a></Link>
                                </div>
                            </div>
                        </section>
                        <section className="col-sm-4">
                            <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive  d-block mx-auto w-50" src={interfux}/> </div></Link>
                                <div className="card-body">
                                    <h6 className="card-title">助焊剂喷射机(Fluxing)</h6>
                                    <Link to="/solutions/smt/fluxing"><a href="#" class="btn btn-primary">查看详情</a></Link>

                                </div>
                            </div>
                        </section>

                    </section>
                    <section className="row" id="SMT-product-page">
                        <section className="col-sm-4">
                            <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive d-block mx-auto w-30" src={hyperion}/> </div></Link>
                                <div className="card-body">
                                    <h6 className="card-title">X光点料机</h6>
                                    <Link to="/solutions/smt/x-ray"><a href="#" class="btn btn-primary">查看详情</a></Link>

                                </div>
                            </div>
                        </section>
                        <section className="col-sm-4">
                            <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive w-75 d-block mx-auto" src={conformal_coating}/></div>
                                <div className="card-body">
                                    <h6 className="card-title">点胶机、Conformal Coating制程相关设备</h6>
                                    <Link to="/solutions/conformal-coating"><a href="#" class="btn btn-primary ">查看详情</a></Link>
                                </div>
                            </div>
                        </section>
                        <section className="col-sm-4">
                            <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive  d-block mx-auto w-50" src={spea}/> </div></Link>
                                <div className="card-body">
                                    <h6 className="card-title">飞针测试+在线ICT-SPEA</h6>
                                    <Link to="/solutions/smt/spea"><a href="#" class="btn btn-primary">查看详情</a></Link>

                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </div>
            </div>
            </div>
        )}}

export default Solutions_SMT
