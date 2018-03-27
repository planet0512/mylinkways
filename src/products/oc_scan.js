import React, {Component} from 'react';
import '../App.css';
import OC from '../img/OC-SCAN-CCX-3.jpg'
import {Link} from 'react-router-dom'


class OC_Scan extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">OC-SCAN-CCX-3</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>非接触式X光点料机 - OC - Scan CCX3
                            </h3>
                            <h4>X光点料机发明者

                                </h4>
                            <ul>
                                <li>点料精度>99,9%

                                </li>
                                <li>最小元件01005

                                </li>
                                <li>占地面积
                                    0,5 m²

                                </li>
                                <li>最大料盘38cm (15“)

                                </li>
                                <li>欧盟安全标准RöV

                                </li>
                                <li>多料盘处理
                                    4 reels

                                </li>
                                <li>多重算法
                                    精准计算

                                </li>
                                <li>多种ERP格式匹配
                                </li>
                                <li>客制化软件需求
                                </li>


                            </ul>
                        </div>
                        <div className="col-sm-6"><img src={OC} className="w-30 mx-auto"/> </div>

                    </section>

                    <nav className="navbar nav navbar-nav navbar-expand-lg navbar-light" >
                            <ul class="navbar-nav links">
                                <li class="nav-item"><Link to="/solutions/smt/product-detail/features">
                                    <a class="nav-link" href="#">特点</a></Link>
                                </li>
                            </ul>
                    </nav>

                    <div>
                        <p>Exact inventory knowledge and permanent inventory is mandatory to increase productivity, for on-time delivery and an immediate reaction in case of bottlenecks.
                            The OC-SCAN®CCX.3 SMD counting machine simplified the electronic manufacturing work and gives an exact overview about single component stock.</p>
                        <h3>
                            SMD COUNTING MACHINE CCX.3 – ALL RELEVANT DATA IS MADE AVAILABLE IN REAL TIME
                        </h3>
                        <p>The annual inventory becomes superfluous by using the X-Ray Counter. The CCX is certified by an auditor’s expert opinion.
                            It delivers a permanent inventory count recognized for tax purposes.
                            Counting of SMD-components on reels is fast, exact and contactless.
                            Counting results of reels with drypacks and large components in high volume packaging are absolutely exact.
                            The operation of the CCX is intuitive and is supported by an automatic component recognition and artificial database intelligence.
                            OC-SCAN®CCX.3 enables the electronic manufacturer to count auxiliary equipment per customers order. Inside the database
                            the counting results are assigned to individual customers orders.</p>


                        <h3>Special Features</h3>
                        <p>SPEA S2 版飞针设备高强度的线性马达可提高生产效率和持久性，这是其他动力技术无法保
                            证的。这就是为什么所有高端的生产设备（例如，最新的取放设备）应用该项顶级技术。
                        </p>
                        <ul>
                        <li>Automatic component recognition </li>
                        <li>Automated parameter setting and counting of unknown components</li>
                        <li>Intelligent database onsite</li>
                        <li>VerificatioCounting of component chains: new software counts with the highest precision big building parts in high volume packaging机械稳定性高</li>
                        <li>Drypack: special software function recognizes interference factor and the evaluation is only directed at the building parts.</li>
                            <li>Quad-Count – Fourfold counting: we count four bundles in 20 seconds with a scan</li>
                            <li>Stick & Trays: high precision counting in smaller than 10 seconds</li>
                            <li>Order counting (exact use per order)</li>
                            <li>Inventory mode</li>
                            <li>2D inspection for electronic components and assembled circuit boards</li>
                            <li>  Individual solutions (customized)</li>
                        </ul>

                        <h3>OC-SCAN®CCX.3 SMD counting machine added value

                        </h3>
                        <p>Increased productivity based on precise inventory knowledge</p>
                        <ul>
                        <li>Planning safety based on precise actual inventory

                        </li>
                        <li>Reduction of downtime and multiple setting-ups</li>
                        <li>Post-order calculation of the used material immediately after completion of the process</li>
                        <li>Reliable delivery terms, increased customer satisfaction</li>

                        </ul>
                    <p>Cost reduction based on automated component counts</p>
                        <ul>
                            <li>No special procurements and cost intensive additional purchases


                                </li>
                            <li>Inventory reduction based on real stocke</li>
                            <li>Reduction of capital tie-up</li>
                            <li>Optimized storage</li>
                            <li>No safety stock levels and scrapping</li>
                        </ul>

                    <p>Component safety based on permanent real-time overview</p>
                    <ul>
                        <li>Permanent inventory</li>
                        <li>Precise knowledge of stock with regards to the whole component stock or per customer order</li>
                        <li>Connection to an IT infrastructure and adjustment of minimum quantities</li>
                    </ul>
                            <p>Quick counting of auxiliary equipment (customers) during delivery and return</p>
                                <ul>
                                    <li> Inventory at the touch of a button</li>
                                    <li>Information base for efficient material purchase</li>
                                    <li>Fault reduction during component counting</li>
                                    <li>Continuous operation 24/7</li>
                                    <li>Maintenance-free system</li>
                                    <li>Intuitive operation and automatic component recognition</li>
                                    <li>Data safety by intelligent database onsite</li>
                                    <li>Higher Customer satisfaction due delivery reliability</li>
                                </ul>



                        <p>Reduced costs based on high automation level</p>
                        <ul>
                            <li> Quick counting of auxiliary equipment (customers) during delivery and return</li>
                            <li>Inventory at the touch of a button</li>
                            <li>Information base for efficient material purchase</li>
                            <li>Fault reduction during component counting</li>
                            <li>Continuous operation 24/7</li>
                            <li>Maintenance-free system</li>
                            <li>Intuitive operation and automatic component recognition</li>
                            <li>Data safety by intelligent database onsite</li>
                            <li>Higher Customer satisfaction due delivery reliability</li>
                        </ul>

                        <p> Component bottleneck recognition through exact and permanent inventory knowledge</p>
                        <ul>
                        <li> Keep the timeline of production through precise material management</li>
                            <li>Observance of confirmed delivery dates</li></ul>

                </div>

            </div>
            </div>

        )}}


export default OC_Scan