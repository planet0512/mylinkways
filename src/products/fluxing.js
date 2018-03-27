import React, {Component} from 'react';
import '../App.css'
import icsf from '../img/icsf.png'
import {Link} from 'react-router-dom'


class Fluxing extends Component {
    render() {
        return (
            <div className="container">
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                        <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                        <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Interflux</li>
                    </ol>
                </nav>

                <section className="row">
                    <div className="col-sm-6" id="product-detail">
                        <h3>100%选择性Flux喷射设备-InterFlux
                        </h3>
                        <ul>
                            <li> Environmental friendly</li>
                            <li>Up to 95% less flux usage</li>
                            <li>Less maintenance chemicals</li>
                            <li>Longer life of PCB carriers/pallets</li>
                            <li>Tremendous reduction in flux fumes going into the exhaust/environment</li>
                            <li>Solderability Performance</li>
                        </ul>
                    </div>
                    <div className="col-sm-6"><img src={icsf} /> </div>

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
                            <th scope="col"></th>
                            <th scope="col">ICSF-Select6</th>
                            <th scope="col">ICSF-Select4
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Nozzles
                                </th>
                            <td>One Jet Nozzle (optional 2)
                            </td>
                            <td></td>
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
                        ICSF Select
                    </h3>
                    <p>The Revolutionary Selective Jet Fluxer is designed to control the amount of flux for each solder joint without losing the ability to maintain the required cycle time demanded by wave soldering processes. The Jet technology used replaces completely the need of spray technology.
                        As a result, the ICSF-Select offers a Total Flux Process control needed for today’s more demanding
                        and complicated soldering requirements, especially lead-free processes.</p>
                    <ul>

                        <li> Environmental friendly</li>
                        <li>Up to 95% less flux usage</li>
                        <li>Less maintenance chemicals</li>
                        <li>Longer life of PCB carriers/pallets</li>
                        <li>Tremendous reduction in flux fumes going into the exhaust/environment</li>
                        <li>Solderability Performance</li>
                    </ul>
                    <p>The ability to program points, lines, multi-lines, areas allows the engineer to decide how much flux/pressure
                        is required for certain solder joints up to complete areas. This capability opens up the process window without
                        risking excess of flux residues. Thanks to the XY-movement speed up to 1,500 mm/s, the cycle time
                        will be up to the standard required for wave soldering mass production.</p>
                </div>


            </div>
            </div>
        )}}

export default Fluxing
