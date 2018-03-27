import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import yxlon from "./img/yxlon.png"

class TwoFiveX_RAY extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">YXLON</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>2.5D X光分析设备-YXLON
                            </h3>
                            <p>Scalable small footprint X-ray inspection systems for assembly and laboratory applications.</p>
                        </div>
                        <div className="col-sm-6"><img src={yxlon} /> </div>

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
                        <thead>
                        <tr>
                            <th scope="col">General Product Features</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Time to first image (typ.)</th>
                            <td>~ 10 s</td>

                        </tr>
                        <tr>
                            <th scope="row">Reconfiguration time (typ.)</th>
                            <td> smaller than 60 s</td>
                        </tr>
                        <tr>
                            <th scope="row">µCT scan time</th>
                            <td>~ 7 s</td>
                        </tr>
                        <tr>
                            <th scope="row">µCT reconstruction time</th>
                            <td>~ 60 s</td>
                        </tr>
                        <tr>
                            <th scope="row">micro3Ds scan time</th>
                            <td>~ 20 s</td>
                        </tr>
                        <tr>
                            <th scope="row">micro3Ds reconstruction time</th>
                            <td>~ 20 s</td>
                        </tr>
                        <tr>
                            <th scope="row">System window</th>
                            <td>380 mm x 200 mm</td>
                        </tr>
                        <tr>
                            <th scope="row">Monitor</th>
                            <td></td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            <th scope="col">Monitor</th>
                            <th scope="col">New 27” Ultrasharp,<br />
                                wide viewing angles</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">X-Ray Tube</th>
                            <td ></td>
                        </tr>
                        <tr>
                            <th scope="row">Tube type</th>
                            <td >open X-ray tube</td>
                        </tr>
                        <tr>
                            <th scope="row">Target </th>
                            <td >transmissive</td>
                        </tr>
                        <tr>
                            <th scope="row">Voltage range </th>
                            <td>25–160 kV</td>
                        </tr>
                        <tr>
                            <th scope="row">Current range</th>
                            <td > 0.01–1.0 mA</td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            <th scope="row">Max. tube power </th>
                            <td >64 W</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Max. target power</th>
                            <td>15 W</td>

                        </tr>
                        <tr>
                            <th scope="row">Detail detectability</th>
                            <td> larger han 1 µm</td>
                        </tr>
                        <tr>
                            <th scope="row">X-ray intensity control</th>
                            <td>TXI</td>
                        </tr>
                        </tbody>

                        <thead>
                        <tr>
                            <th scope="row">Manipulation</th>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Manipulation control via</th>
                            <td>mouse or joystick</td>
                        </tr>
                        <tr>
                        <th scope="row">Inspection area (max.)</th>
                        <td>310 mm x 310 mm (12”x 12”)</td>
                        </tr>
                        <tr>
                            <th scope="row">Sample size (max.)</th>
                            <td>440 mm x 550 mm (17”x 21”)</td>
                        </tr>
                        <tr>
                            <th scope="row">Sample tray axes</th>
                            <td>X,Y, rotation</td>
                        </tr>
                        <tr>
                            <th scope="row">Oblique viewing</th>
                            <td>+/-70° (140°)</td>
                        </tr>
                        </tbody>

                        <thead>
                        <tr>
                            <th scope="row">Image Chain</th>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <th scope="row">Geometric magnification (max.)</th>
                            <td>2,000x</td>
                        </tr>
                        <tr>
                            <th scope="row">Total magnification (max.)</th>
                            <td>256,000x</td>
                        </tr>
                        </tbody>

                        <thead>
                        <tr>
                            <th scope="row">Physical Dimensions</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Width / depth / height </th>
                            <td>1,100 / 1,050 / 2,200 mm</td>
                        </tr>
                        <tr>
                            <th scope="row">Weight </th>
                            <td>~ 1,450 kg</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    <div>
                        <h3>
                            Applications
                        </h3>
                        <ul>
                            <li>SMT and PTH assemblies

                               </li>
                            <li>PCBs</li>
                            <li>IGBTs</li>
                        </ul>

                        <h3>Benefits for SMT
                        </h3>
                        <ul>
                            <li>Accurate, fast, and repeatable inspection - manually and automatically
                                </li>
                            <li>
                                High power, high resolution inspection of very small features</li>
                            <li>Easy to use, dynamic image enhancing filters, e.g. eHDR</li>
                        </ul>


                        <h3>
                            Software
                        </h3>
                        <ul>
                            <li>eHDR-Inspect


                                </li>
                            <li> Improved, user friendly FGU Multi Area Void Calculation</li>
                            <li>Extended BGA Inspection</li>
                            <li>Extended ADR</li>
                        </ul>
                        <h3>System Highlights
                        </h3>
                        <p>The small-sized, affordable Cougar EVO SMT utilizes the combined power of several YXLON innovations -
                            FeinFocus X-ray tube technology, High Power Target technology, and a finely calibrated, long-life flat-
                            panel detector. The assortment of trays ensures that it can generate 2D and 3D images in extremely high resolution.</p>
                        <p>
                            In addition to imaging excellence, you can look forward to simple, user-friendly controls and YXLON FGUI - FeinFocus Grap
                            hical User Interface - software, not to mention the myriad benefits of comprehensive automation. One-click solutions make
                            manual inspections effortless, while Easy Teach-In makes it simple to program the automated procedures that guide the operator
                            swiftly through inspections - and deliver repeatable and reliable results.
                        </p>
                        <p>Cougar EVO SMT can be upgraded for CT with the optional microCT module. This enables CT for industrial quality assurance, with in-depth 3D examination of inspection items via virtual cross sections and layers. With its user-friendly YXLON QuickScan® module, it delivers 3D images and virtual slices within a minute.
                        </p>

                </div>
            </div>
            </div>
        )}}


export default TwoFiveX_RAY