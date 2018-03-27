import React, {Component} from 'react';
import '../App.css';
import th1000si from '../img/th1000si.png'
import {Link} from 'react-router-dom'


class Th1000s extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">TH1000Si</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>TH1000Si : Tray to Tray Vision Handler
                            </h3>
                            <h4>The TH1000Si is designed with advanced key technologies to provide high speed, high accuracy, one stop vision inspection solutions specially catered for BGA, QFP, QFN, CSP, TSOP, MSOP, SOP packages handled in tray.</h4>
                        </div>
                        <div className="col-sm-6"><img src={th1000si} /> </div>

                    </section>

                    <nav className="navbar nav navbar-nav navbar-expand-lg navbar-light" >
                            <ul class="navbar-nav links">
                                <li class="nav-item"><Link to='/solutions/smt/product-detail/specs'>
                                    <a class="nav-link" href="#">
                                        规格
                                    </a></Link>
                                </li>
                                <li class="nav-item"><Link to="/solutions/smt/product-detail/features">
                                    <a class="nav-link" href="#">特点</a></Link>
                                </li>
                            </ul>
                    </nav>
                    <div>
                        <table class="table table-bordered">
                            <tbody>
                            <tr>
                                <td ></td>
                                <td >TH1000Si
                                </td>
                            </tr>
                            <tr>
                                <td>Package Inspected</td>
                                <td>BBGA, QFP, QFN, CSP, TSOP, MSOP, SOP
                                </td>
                            </tr>
                            <tr>
                                <td>Package Size</td>
                                <td>3mm x 3mm to 50mm x 50mm</td>
                            </tr>
                            <tr>
                                <td>Handling Mechanism
                                </td>
                                <td>Tray to Tray</td>
                            </tr>
                            <tr>
                                <td>UPH
                                </td>
                                <td>42K</td>
                            </tr>
                            <tr>
                                <td>Pick-up Heads
                                </td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>Vision Inspection
                                </td>
                                <td> 3D Inspection, 5-sided Inspection, Mark Inspection, Package Vision Inspection (PVI), Passive Component Inspection</td>
                            </tr>
                            <tr>
                                <td>Machine Dimensions (mm)	</td>
                                <td>2043(H) x 1825(W) x 1280(L)</td>
                            </tr>
                            </tbody>
                            </table>
                    </div>

            </div>
            </div>

        )}}


export default Th1000s