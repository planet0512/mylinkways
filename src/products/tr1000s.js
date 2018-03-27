import React, {Component} from 'react';
import '../App.css';
import tr1000si from '../img/tr1000si.jpg'
import {Link} from 'react-router-dom'


class Tr1000s extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt/product-detail"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">TR1000Si</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>元件6面检查设备-
                                TR1000Si
                            </h3>
                            <h4>The TR1000Si comes with built in taping module and duo nozzles for faster unit pickup which translates to higher throughput of up to 14K (tray to tape)</h4>
                        </div>
                        <div className="col-sm-6"><img src={tr1000si} /> </div>

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
                                <td >TR1000Si</td>
                            </tr>
                            <tr>
                                <td>Package Inspected</td>
                                <td>BGA, QFP, QFN, CSP, TSOP, MSOP, SOP</td>
                            </tr>
                            <tr>
                                <td>Package Size</td>
                                <td>3mm x 3mm to 50mm x 50mm</td>
                            </tr>
                            <tr>
                                <td>Tape Range</td>
                                <td>8mm to 56mm</td>
                            </tr>
                            <tr>
                                <td>Handling Mechanism</td>
                                <td>Tray to Tape</td>
                            </tr>
                            <tr>
                                <td>UPH</td>
                                <td>14K</td>
                            </tr>
                            <tr>
                                <td>Taping Module Conversion Time</td>
                                <td> 20 mins</td>
                            </tr>
                            <tr>
                                <td>De-Taping</td>
                                <td>Built-in De-Taping</td>
                            </tr>
                            <tr>
                                <td>Vision Inspection</td>
                                <td>3D Inspection, 5-sided Inspection, Mark Inspection,
                                    Package Vision Inspection (PVI)</td>
                            </tr>
                            <tr>
                                <td>Machine Dimensions (mm)</td>
                                <td>2100(H) x 2518(W) x 1250(L)</td>
                            </tr>
                            </tbody>
                            </table>
                    </div>
                    <div>
                        <h3>
                            Auto Pitching Mechanism
                        </h3>
                        <p>CFaster and more reliable noozle pitch conversion.</p>
                        <h3>Taping Module

                        </h3>


                        <p>TR1000Si comes with built in taping module which also has de-taping capability. It is equipped with
                            movable linear guide with built in jig for faster conversion time. (20 mins)
                        </p>
                        <h3>
                            Warpage Clamper
                        </h3>
                        <p>Smooth Operation to flatten imbalance tray.</p>
                        <h3>
                            Fetcher Module
                        </h3>
                        <p>Shorten Translation Time & unit pick up time to higher throughput </p>
                        <h3>Duo Nozzles Tray to Tape Pick & Place </h3>
                        <p>It comes with duo nozzles for faster unit pickup which translates to higher throughput of up to 14K (tray to tape).

                        </p>
                        <h3>
                            Easy 3D Calibrations
                        </h3>
                        <p>Easy (place and slot , no adjustments needed)‏, Fast (only 5 mins) & Auto Illumination calibration</p>
                        <h3>Easier Maintenance </h3>
                        <p>Control Devices Placing</p>
                    </div>

            </div>
            </div>

        )}}


export default Tr1000s