import React, {Component} from 'react';
import '../App.css';
import linkway_product from '../img/linkways_conformal.png'
import conformal_1 from '../img/conformal_1.png'
import conformal_2 from '../img/conformal_2.png'
import {Link} from 'react-router-dom'


class Conformal_Coating_Product extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt/conformal-coating">Conformal Coating</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Conformal Coating - Linkways</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>Conformal Coating检测+通孔焊点检测-Linkways
                            </h3>
                            <h4>Coating厚度全区域检测！！
                            </h4>
                            <ul>
                                <li>裂纹/固化不良/拉丝/褶皱/气泡/Pin空/泡沫/分层/扩散</li>
                                <li>全区域厚度检测</li>
                                <li>THT 焊点缺陷</li>
                                <li>随机的锡珠-可定义大小</li>
                                <li>追踪性: 长时间的数据保存以满足车电测试需求</li>
                                <li>全板图像储存功能</li>
                                <li>测试结果随时可被重现</li>
                            </ul>
                        </div>
                        <div className="col-sm-6"><img className=" w-75 d-block mx-auto" src={linkway_product} /> </div>

                    </section>
                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <img src={conformal_1} />
                        </div>
                        <div className="col-sm-6"><img src={conformal_2} /> </div>

                    </section>


            </div>
            </div>

        )}}


export default Conformal_Coating_Product