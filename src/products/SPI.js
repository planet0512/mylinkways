import React, {Component} from 'react';
import '../App.css';
import v310i from '../img/v310i.jpg'
import {Link} from 'react-router-dom'


class SPI extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">v310i</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>锡膏印刷机 - V310i
                            </h3>
                            <h4>V310i Advanced 3D Solder Paste Inspection System (SPI) soluton.
                                The V310i Series offers powerful technologies and high throughput productivity for SMT production line.</h4>
                        </div>
                        <div className="col-sm-6"><img src={v310i} /> </div>

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
                                <th scope="col">Board Dimensions</th>
                                <th scope="col">V310i</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Maximum board size (Single Lane)</th>
                                <td>510 mm by 510 mm (20 inch by 20 inch) with 2 projectors</td>

                            </tr>
                            <tr>
                                <th scope="row">Maximum board size</th>
                                <td>50 mm by 50 mm (2 inch by 2 inch)</td>
                            </tr>
                            <tr>
                                <th scope="row">Minimum board size</th>
                                <td colspan="2">4 mm (0.16 inch)</td>
                            </tr>
                            <tr>
                                <th scope="row">Maximum board thickness</th>
                                <td colspan="2">4 mm (0.16 inch)</td>
                            </tr>
                            <tr>
                                <th scope="row">Minimum board thickness</th>
                                <td colspan="2">0.5 mm (0.02 inch)</td>
                            </tr>
                            <tr>
                                <th scope="row">Board weight</th>
                                <td colspan="2">Up to 3kg (6.6lb)</td>
                            </tr>
                            <tr>
                                <th scope="row">Maximum inspected area</th>
                                <td colspan="2">503 mm by 510 mm (19.8 inch by 20 inch) with 2 projectors</td>
                            </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <th scope="col">Clearance</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <th scope="row">Top side of board</th>
                                <td colspan="2">15 mm (0.6 inch)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Bottom side of board</th>
                                <td colspan="2">50 mm (1.96 inch)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Minimum edge clearance</th>
                                <td colspan="2">3.5 mm (0.14 inch)
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Maximum PCB Warpage</th>
                                <td colspan="2">±5mm</td>
                            </tr>
                            <tr>
                                <th scope="row">Conveyor height range</th>
                                <td colspan="2">856 mm to 965 mm (33.7 inch to 37.9 inch)
                                </td>
                            </tr>
                            </tbody>
                                <thead>
                                <tr>
                                    <th scope="col">System Dimensions</th>
                                    <th scope="col">V310i</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Footprint	</th>
                                    <td>5W: 1060 mm (3.5 ft) x D: 1352 mm (4.4 ft) x H: 2028 mm (6.7 ft)
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">Weight	</th>
                                    <td>~750 kgs</td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                    <div>
                        <h3>
                            Ease Of Programming
                        </h3>
                        <p>ViTrox’s SPI is equipped with world fastest Gerber switching which supports 74x,
                            274d & CAD input. It is easy to use and convenient for editing. SPI supports manual
                            programming even without the Gerber database.</p>
                        <h3>D Lighting</h3>


                        <p>Typical white light source has no effect on PCB’s colour. For Dark PCB and bright ceramic PCB, the image captured will be darker because of the reflective characteristics of the PCB. If the data accuracy is affected, the detection report will also be affected.</p>
                        <p>ViTrox 3D SPI D-Lighting Technology is a special technology whereby 8 samples will be taken and 4 samples will be categorized into each group, using high exposure and low exposure to process images for each group. 3 settings can be chosen: Black, normal and high brightness.</p>
                    </div>

            </div>
            </div>
        )}}


export default SPI