import React, {Component} from 'react';
import '../App.css';
import ipm from '../img/ipm_x3.jpg'
import {Link} from 'react-router-dom'


class IPM extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">锡膏印刷机 - IPM系列</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>锡膏印刷机 - IPM系列
                            </h3>
                            <ul>
                                <li>友好的实用性, 切换时间小于5分钟；</li>
                                <li>高精度，印刷重复性±0.025mm (机械重复精度 ±0.0125mm</li>
                                <li>高速度，基本CT可达6.0秒；</li>
                            </ul>
                        </div>
                        <div className="col-sm-6"><img src={ipm} /> </div>

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
                                <th scope="col">Item</th>
                                <th scope="col">Specification</th>
                                <th scope="col">X3i/X3A
                                </th>
                                <th scope="col">X4L</th>
                                <th scope="col">X5L</th>
                                <th scope="col">X6L</th>
                                <th scope="col">XL</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th rowSpan="2" scope="row">Metal Mask</th>
                                <th>Frame Size</th>
                                <td>550x500-736x736mm

                                </td>
                                <td>650x550-736x736mm

                                </td>
                                <td>580x580-736x736mm
                                </td>
                                <td>736x736-850x736mm
                                </td>
                                <td> 736x736-1000x1000mm

                                </td>

                            </tr>

                            <tr>
                                <th>Print Origin
                                </th>
                                <td colSpan="5"> Center/Front/Rear
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="3" scope="row">PCB
                                </th>
                                <th>Min. Size
                                </th>
                                <td colSpan="3">50x50mm</td>
                                <td>60x60mm</td>
                                <td>80x80mm</td>
                            </tr>
                            <tr>
                                <th>Max. Size
                                </th>
                                <td>350x300mm</td>
                                <td>410x350mm</td>
                                <td>500x400mm</td>
                                <td>610x410mm</td>
                                <td>800x400mm</td>
                            </tr>
                            <tr>
                                <th>Thickness</th>
                                <td colSpan="2">0.4-10.0mm
                                </td>
                                <td colSpan="3">0.4-12.0mm
                                </td>
                            </tr>

                            <tr>
                                <th rowSpan="9" scope="row">Conveyor</th>
                                <td>Conveyor Height
                                </td>

                                <td colspan="5">920±30mm</td>
                            </tr>
                            <tr>
                                <th>Stage
                                </th>
                                <td>3 Stages Conveyor
                                </td>
                                <td colSpan="4">Single Stage Conveyor</td>
                            </tr>
                            <tr>
                                <td>PCB Weight
                                </td>
                                <td colSpan="2">2.5 Kg
                                </td>
                                <td colSpan="2">4.0 Kg
                                </td>
                                <td colSpan="1">6.0 Kg
                                </td>

                                </tr>
                            <tr>
                                <th>Clearance
                                </th>
                                <td colspan="5">Less than 5.5mm both side
                                </td>
                            </tr>
                            <tr>
                                <th>Components
                                </th>
                                <td>+30/-30mm
                                </td>
                                <td>+20/-18mm
                                </td>
                                <td colSpan="3">+30/-20mm
                                </td>
                            </tr>
                            <tr>
                                <th>PCB Flow
                                </th>
                                <td colspan="5">Left to Right / Right to Left / Left to Left / Right to Right
                                </td>
                            </tr>
                            <tr>
                                <th>Fixed Rail
                                </th>
                                <td colspan="5">Front/Rear Fixed

                                </td>
                            </tr>
                            <tr>
                                <th>Board Supporting

                                </th>
                                <td colspan="5">Magnetic Pins, Support Blocks, MBU

                                </td>
                            </tr>
                            <tr>
                                <th>Board Fixing

                                </th>
                                <td colSpan="5">Edge Clamp, Vacuum Chamber, Multi-Point Clamping Units,
                                    Knife Clamp, Top-Clamp
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="2" scope="row">Cycle Time
                                </th>
                                <td>PCB Moving
                                </td>
                                <td>8.5Sec</td>
                                <td>10.5Sec
                                </td>
                                <td>11.5Se
                                </td>
                                <td>14.0Se
                                </td>
                            </tr>
                            <tr>
                                <th>Model Change
                                </th>
                                <td colSpan="5">Less Than 5 mins
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Accuracy
                                </th>
                                <td>Alignment
                                </td>
                                <td colSpan="5">Repeatability ±12.5μm, Accuracy: ±25.0μm
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                </th>
                                <td>Squeegee Material
                                </td>
                                <td colSpan="5">Metal / Urethane
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Squeegee
                                </th>
                                <td>Printing Direction
                                </td>
                                <td colSpan="5">Front Rear
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                </th>
                                <td>Printing Speed
                                </td>
                                <td>5-120mm/s</td>
                            </tr>
                            <tr>
                                <th scope="row">Interface
                                </th>
                                <td>
                                </td>
                                <td colSpan="5">SMEMA
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Dimension
                                </th>
                                <td>LXDXH(mm)
                                </td>
                                <td>1468 x 1129 x 1432
                                </td>
                                <td>1390 x 1278 x 1529

                                </td>
                                <td>1342 x 1594 x 1523

                                </td>
                                <td>1564 x 1294 x 1538
                                </td>
                                <td>1642 x 1673 x 1523

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Weight
                                </th>
                                <td>

                                </td>
                                <td>
                                    Approx:800kg

                                </td>
                                <td>
                                    Approx:850kg

                                </td>
                                <td>
                                    Approx:1000kg
                                </td>
                                <td>
                                    Approx:1150kg
                                </td>
                                <td>
                                    Approx:1200kg
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Utilities
                                </th>
                                <td>

                                </td>
                                <td colSpan="5">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Power
                                </th>
                                <td>
                                </td>
                                <td colSpan="5">
                                    1Φ220-230VAC, 50/60Hz,Less Than 2.0KVA
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Air
                                </th>
                                <td>
                                </td>
                                <td colSpan="5">
                                    5-7 bar,10Φ Air Hose/Max:150 l/min

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">

                                </th>
                                <td>

                                </td>
                                <td colSpan="5">
                                    *These Specifications are subjected to be changed without prior notice.

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                        <div>
                            <h3>
                                IPM系列
                            </h3>
                            <ul>
                                <li>友好的实用性, 切换时间小于5分钟；</li>
                                <li>高精度，印刷重复性±0.025mm (机械重复精度 ±0.0125mm</li>
                                <li>高速度，基本CT可达6.0秒；</li>
                            </ul>

                            <ol>
                                <li>Multi Point Clamping Unit</li>
                                <ul>
                                    <li>Special side clamping control board flatness.</li>
                                    <li>Achieve“zero" warpage from the Circuit board.</li>
                                    <li>Critical part to obtain best print quality &</li>
                                    <li>solder paste transfer efficiency in thin board.</li>

                                </ul>

                                <li>Integrated Cleaning Unit
                                    <ul>
                                        <li>Minimizing cleaning Cycles to achieve cost & time saving.</li>
                                        <li>Dry, Wet, Vacuum, Air integrated under stencil cleaning.</li>
                                        <li> X direction cleaning applicable (Option)</li>
                                    </ul>
                                </li>

                                <li>CP/CPK Generator
                                    <ul>
                                        <li>Process Control with CP/CPK</li>
                                        <li>SPC Data Analysis</li>
                                    </ul>
                                </li>

                                <li>Auto Mask Loading
                                    <ul>
                                        <li> One button Mask auto loading.</li>
                                        <li> Time save for model change.</li>
                                        <li> Available on common mask size. IPM</li>
                                    </ul>
                                </li>

                                <li>One Touch Function
                                    Printing Height one touch detecting.
                                    One touch to adapt every single print.
                                    Improve printing aperture filling & Performance.
                                    Available on Particular model only (option)
                                </li>

                                <li> 3 Stages Conveyor
                                    3 Stages Carry in, Printing & Carry out.
                                    <ul>
                                        <li>Time saved by reduce transfer distance</li>
                                        <li>Shuttle on carry out conveyor applicable (Option)</li>
                                    </ul>
                                </li>
                            </ol>

                        </div>
                </div>
            </div>
        )}}


export default IPM