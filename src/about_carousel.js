import React, {Component} from 'react';
import './App.css';
import th1000si from './img/th1000si.png'
import oc_scan from './img/OC-SCAN-CCX-3.jpg'
import ocs from './img/OSC-logo.jpg'
import interflux from './img/icsf.png'


class About_Carousel extends Component {
    render() {

        return (

            <div className="container-fluid">
                <div className="row">
                    <div id="mid_section">
                        <div id="carousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel" data-slide-to="1"></li>
                                <li data-target="#carousel" data-slide-to="2"></li>
                                <li data-target="#carousel" data-slide-to="3"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='index-hero'>
                                        <div className="container-fluid" id="carousel-middle">
                                            <section className="row">
                                                <div className="col-sm-6" id="product-detail">
                                                    <h3>V510i Optimus 3D : 3D光学检测设备, 针对SMT PCBA的最新一代3D光学检测方案。</h3>
                                                </div>

                                                <div className="col-sm-6">
                                                    <img src={th1000si}/>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                </div>

                                <div class="carousel-item">
                                    <div id="lat2">
                                        <div className="container-fluid" id="carousel-middle">
                                            <section className="row">

                                                <div className="col-sm-6" id="product-detail">
                                                    <img src={ocs} className="w-30"/>
                                                    <h3>OC-SCAN®CCX-3 -
                                                            非接触式X光点料机
                                                        </h3>
                                                    <table class="table table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">点料精度>99,9%
                                                            </th>
                                                            <th scope="col">最小元件01005

                                                            </th>
                                                            <th scope="col">最小元件01005
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">最大料盘38cm (15“)
                                                            </th>
                                                            <td>欧盟安全标准RöV
                                                            </td>
                                                            <td>多料盘处理
                                                                4 reels
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">多重算法
                                                                精准计算
                                                            </th>
                                                            <td>多种ERP格式匹配
                                                            </td>
                                                            <td>客制化软件需求
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col-sm-6" id="lat2">
                                                    <img src={oc_scan} />

                                                </div>


                                            </section>
                                        </div>
                                        </div>
                                </div>

                                <div class="carousel-item">
                                    <div id='lat2'>
                                        <div className="container-fluid" id="carousel-middle">
                                            <section className="row">
                                                <div className="col-sm-6" id="product-detail">
                                                    <img src={interflux} className="w-75"/>
                                                </div>
                                                <div className="col-sm-6" id="icsf">
                                                    <h2>Interflux</h2>
                                                    <h3>ICSF- Select Series</h3>
                                                    <p>
                                                        <br />
                                                    <h4>Benefits</h4>

                                                    <ul>
                                                        <li>70 to 95% flux savings compared with Conventional Spray Fluxing.</li>
                                                        <li>Very low maintenance.</li>
                                                        <li>No external air supply required.</li>
                                                        <li>High speed XY movement</li>
                                                        <li>Sensitive areas can be programmed to achieve good flux hole penetration without affecting the residue level of</li>
                                                    </ul>
                                                    </p>

                                                    <button type="button" class="btn btn-primary">了解更多</button>
                                                </div>

                                            </section>

                                        </div>
                                    </div>
                                </div>


                            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                </div>
        )
    }
}

export default About_Carousel