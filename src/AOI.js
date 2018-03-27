import React, {Component} from 'react';
import './App.css';
import v510i from './img/v510i.jpg'
import {Link} from 'react-router-dom'


class AOI extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">v510i</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>光学检测仪 - V510i
                            </h3>
                            <h4>The V510i Optimus 3D AOI system is a next generation solution for the SMT line, offering the powerful 3D inspection capabilities.</h4>
                        </div>
                        <div className="col-sm-6"><img src={v510i} /> </div>

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
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">PCB Dimension	</th>
                                <th scope="col">Standard	</th>
                                <th scope="col">FDL
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Minimum PCB Size
                                    (L x W)</th>
                                <td colSpan="2">50x50mm (2”x2”)
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">Maximum PCB Size
                                    (L x W)</th>
                                <td>510x510mm (20”x20”)</td>
                                <td>DL Equal: 510 x 235mm (inch) <br />
                                    Single Lane: 510x420mm (inch)</td>
                            </tr>
                            <tr>
                                <th scope="row">Upgradable PCB Length Option
                                    (L x W)</th>
                                <td>610x510mm (24”x20”)
                                    (L x W)</td>
                                <td>DL Equal: 610x235mm (inch) <br />
                                    Single Lane: 610x420mm (inch)</td>
                            </tr>
                            <tr>
                                <th scope="row">PCB Thickness	</th>
                                <td colspan="2">0.5mm-4mm (0.02”-0.16”)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Maximum PCB Weight	</th>
                                <td colspan="2">3kg</td>
                            </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <th scope="col">Clearance</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <th scope="row">Top side of PCB</th>
                                <td colspan="2">50mm (2”)

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Bottom side of PCB</th>
                                <td colspan="2">70mm (2.76”)

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Panel Edge	</th>
                                <td colspan="2">3.5mm (0.14”)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Maximum PCB Warpage Compensation	</th>
                                <td colspan="2">±5mm (0.2")</td>
                            </tr>
                            <tr>
                                <th scope="row">PCB Transport Height	</th>
                                <td colspan="2">856mm - 965mm (33.7”x38”)
                                </td>
                            </tr>
                            </tbody>
                                <thead>
                                <tr>
                                    <th scope="col">System Performances	</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Camera & Inspection Speed	</th>
                                    <td colSpan="2">4MP Camera Link Camera: Approx 37cm²/sec @ 20um resolution <br />
                                        12MP CoaXPress Camera: Approx 60cm²/sec @ 15um resolution
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">Camera FOV		</th>
                                    <td colSpan="2">~4MP : 40x40 mm @ 20um resolution <br />
                                        12MP : 60x45 mm @ 15um resolution</td>
                                </tr>
                                <tr>
                                    <th scope="row">Optical Resolution		</th>
                                    <td colSpan="2">~20um, 15um, 13um or 11um telecentric lens*
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3D Technologies			</th>
                                    <td colSpan="2">Phase Shift Profilometry’s (PSP) methodology with 4-way projectors
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Lighting Module	</th>
                                    <td colSpan="2">~Concurrent Lighting Module <br />
                                        Phase Shift Profilometry's (PSP) Methodology with 4-Way Projectors</td>
                                </tr>
                                <tr>
                                    <th scope="row">Camera FOV		</th>
                                    <td colSpan="2">~4MP : 40x40 mm @ 20um resolution <br />
                                        12MP : 60x45 mm @ 15um resolution</td>
                                </tr>
                                </tbody>
                            <thead>
                            <tr>
                                <th scope="col">Installation Specification		</th>
                                <th scope="col">Standard	</th>
                                <th scope="col">Flexible Dual Lane (FDL)
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Footprint			</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Width	</th>
                                    <td>~1060mm (3.5ft)</td>
                                        <td>1060mm (3.5ft)
                                        </td>
                                </tr>
                                <tr>
                                    <th scope="row">Depth		</th>
                                    <td>1352mm (4.4 ft)	</td>
                                    <td>1352mm (4.4 ft)

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Width	</th>
                                    <td>2028mm (6.7ft)	</td>
                                    <td>2028mm (6.7ft)
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Weight		</th>
                                    <td>~750 kgs	</td>
                                    <td>~750 kgs
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Electrical Supplies	</th>
                                    <td colSpan="2">100-120 V, 16A/200-240V, 8A Single Phase</td>
                                </tr>

                                </tbody>
                            </table>
                    </div>
                    <div>
                        <h3>
                            3D Lighting
                        </h3>
                        <p>3D Lighting
                            Structured lighting with mutiple colour LEDs provides the richest image options in the market.

                            Matured algorithm database with more than 15 years in the market.

                            This is an in-house development of high speed, high resolution miniature projector with telecentric lens. Multiple projectors installed in the 3D module to illuminate the fringe pattern lighting from different directions to minimize occlusion. The V510 Optimus 3D AOI is using high speed multi frequency Phase Shift Profilometry's (PSP) methodology.

                            The system is using 3D Inspection concurently to achieve high productivity and high detectability.</p>
                        <h3>Ease of Programming Flow Chart
                        </h3>


                        <p>V510 Optimus 3D AOI supports mutiple input formats, for example, NDF import, SMT file import and others. The new board visualizer allows user to view the actual vector board graphic with physical dimension. Besides, the Advance Multiple Board Generation of 3D AOI allows users to create any orientations of board as well.</p>
                    </div>

            </div>
            </div>
        )}}


export default AOI