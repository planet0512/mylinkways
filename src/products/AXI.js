import React, {Component} from 'react';
import '../App.css';
import v810ex from '../img/v810ex.png'
import {Link} from 'react-router-dom'


class AXI extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">810ex</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>3D在线全自动X光检测设备 -
                                V810i S2EX
                            </h3>
                            <h4>World fastest and best test coverage AXI system for PCB SMT assembly line</h4>
                        </div>
                        <div className="col-sm-6"><img src={v810ex} /> </div>

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
                                <th scope="col">Board Dimension	</th>
                                <th scope="col">V810i S2EX	</th>
                                <th scope="col">V810i S2
                                </th>
                                <th scope="col">V810i S2 XXL	</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Board Dimensions</td>
                                <td ><a href="x-ray-inspection-system-axi-v810is2ex-spec.php" >V810i S2EX</a></td>
                                <td ><a href="x-ray-inspection-system-axi-v810is2-spec.php" >V810i S2</a></td>
                                <td ><a href="x-ray-inspection-system-axi-v810is2-xxl-spec.php">V810i S2 XXL</a></td>
                            </tr>
                            <tr>
                                <td>Maximum panel size</td>
                                <td>482mm X 610mm (19" x 24")</td>
                                <td>457mm X 610mm (18" x 24")</td>
                                <td>660mm X 965mm (26" x 38")</td>
                            </tr>
                            <tr>
                                <td>Minimum panel size</td>
                                <td>76mm X 76mm (3" x 3")</td>
                                <td>76mm X 76mm (3" x 3")</td>
                                <td>76mm X 76mm (3" x 3")</td>
                            </tr>
                            <tr>
                                <td>Maximum panel inspectable area</td>
                                <td>474mm X 610mm (18.7" x 24")</td>
                                <td>434mm X 610mm (17.1" x 24")</td>
                                <td>654mm X 965mm (25.75" x 38")</td>
                            </tr>
                            <tr>
                                <td>Maximum panel thickness</td>
                                <td>7 mm (276 mils)</td>
                                <td>4mm (160 mils), 7mm (280 mils) with carrier
                                    3.5mm (140 mils) for Dual magnification system</td>
                                <td>12.7 mm (500 mils)</td>
                            </tr>
                            <tr>
                                <td>Minimum panel thickness</td>
                                <td>0.5mm (20 mils)</td>
                                <td>0.5mm (20 mils)</td>
                                <td>0.5mm (20 mils)</td>
                            </tr>
                            <tr>
                                <td>Panel warp</td>
                                <td>Downside  3.0mm; Upside 1.5mm (PSP)</td>
                                <td>Downside 2.0mm; Upside 1.0mm</td>
                                <td>Downside  3.3mm; Upside  3.3mm</td>
                            </tr>
                            <tr>
                                <td>Maximum panel weight</td>
                                <td>4.5kg</td>
                                <td>4.5kg</td>
                                <td>15kg</td>
                            </tr>
                            <tr>
                                <td>Minimum panel weight</td>
                                <td>0.03kg</td>
                                <td>0.03kg</td>
                                <td>0.03kg</td>
                            </tr>
                            <tr>
                                <td >Clearance</td>
                                <td colspan="3"></td>
                            </tr>
                            <tr>
                                <td>Board top clearance</td>
                                <td>50mm @ 23um resolution<br />
                                    38mm @ 19um resolution<br />
                                    11mm @ 11um resolution<br />
                                    (calculated from board top surface)</td>
                                <td>25mm @ 19um resolution<br />
                                    10mm @ 11um resolution<br />
                                    (calculated from <b>belt surface)</b> </td>
                                <td>25mm @ 19um resolution<br />
                                    15mm @ 13um resolution<br />
                                    (calculated from <b>board</b> top surface)</td>
                            </tr>
                            <tr>
                                <td>Board bottom clearance</td>
                                <td>70mm</td>
                                <td>50mm</td>
                                <td>80mm</td>
                            </tr>
                            <tr>
                                <td>Panel edge clearance</td>
                                <td>3mm</td>
                                <td>3mm</td>
                                <td>3mm</td>
                            </tr>
                            <tr>
                                <td>Panel width tolerance</td>
                                <td>+/- 0.7mm</td>
                                <td>+/- 0.7mm</td>
                                <td>+/- 0.7mm</td>
                            </tr>
                            <tr>
                                <td>System resolution</td>
                                <td>11um/19um/23um</td>
                                <td>19um/11um</td>
                                <td>19um /13um</td>
                            </tr>
                            <tr>
                                <td>100% Press-fit testability</td>
                                <td>Yes (With PSP2 feature)</td>
                                <td>Yes (With PSP2 feature)</td>
                                <td>Yes (With PSP2 feature)</td>
                            </tr>
                            <tr>
                                <td>Maximum acceptable panel temperatures</td>
                                <td>40 Deg C</td>
                                <td>40 Deg C</td>
                                <td>40 Deg C</td>
                            </tr>
                            <tr>
                                <td >System Dimensions</td>
                                <td colspan="3"></td>
                            </tr>
                            <tr>
                                <td>Footprint</td>
                                <td>1566mm (W) x 2145mm (D) x 1972mm (H)</td>
                                <td>1520mm (W) x 1940mm (D) x 1890mm (H)</td>
                                <td>2240mm (W) x 2460mm (D) x 1980mm (H)</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>~3500kg</td>
                                <td>~3300kg</td>
                                <td>~5500kg</td>
                            </tr>


                                </tbody>
                            </table>
                    </div>
                    <div>
                        <h3>
                            Ease of Programming
                        </h3>
                        <p>Custom focus region for POP
                            Reduce the setup of POP slice height and improve focus accuracy on POP.

                            Intelligent Initial Learning
                            Auto learning feature that reduces program setup time.

                            Package Library
                            Intelligently populate package information across production board.

                            Virtual Live 2
                            Failure analysis tools to view multiple slice image instantly.

                            CAD Creator
                            Capability to create CAD from Printed Circuit Board (PCBA) verification Image or SMT mounter machine's info.</p>
                        <h3>Advanced Technologies
                        </h3>


                        <p>Proprietary Hybrid Auto Focus Technology
                            Intelligently focus on desired Z-height without any mechanical movement from X-ray or stage.

                            Solder Profile Characteristic
                            Provide thorough system information for troubleshooting

                            Dynamic Range Optimization (DRO)
                            Produce high quality X-Ray images on very heavily shaded components and non-uniformly shaded component.</p>
                        <h3>
                            Image Quality
                        </h3>
                        <p>mage Enhancement
                            Multi image enchancer techniques to improve image clarity on multi layers component for void detection and visual verification.

                            3D CT Image
                            3D modeling viewer at V810 and VVTS repair station.

                            Point Spread Function (PSF)
                            Improve image clarity on 2.5D and help operator to make better judgement.</p>
                        <h3>
                            Improve Test Coverage
                        </h3>
                        <p>Advanced algorithm with more than 20 joint types selestion.

                            Phase Shift Profilometry (PSP 2)
                            Improve accuracy and test coverage on 100% Pressfit and PTH board.

                            New Voiding Algorithm
                            Improve the accuracy of detecting various type of voids on the component especially on large pad greater than 1 inch.

                            PTH Detection
                            PTH wetting fully compliance with IPC wetting standard. Can define up to slices to determine barrel fill percentage on PTH.

                            BGA
                            Additional 3 user-defined slices to improve HIP detection.

                            Broken Pin Algorithm
                            Capability to detect broken pin within PTH area and its surrounding a</p>
                        <h3>Ease of Buy Off</h3>
                        <p>ViTrox Verification Tool Solution (VVTS) Repair Station
                            A clear and user friendly defect verification tool allows the operator to review inspection results easily and accurately.

                            Auto Reject
                            Automatically reject defective joints without operator buyoff.

                            Good Image Comparison
                            Effectively improve operator disposition experience

                            Diagnostic Image
                            Highlightvoiding area and show voiding area percentage.

                            2.5D PTH & BGA Angle View
                            Provide most angle view images in market.

                        </p>
                        <h3>
                            Speed Improvement
                        </h3>
                        <p>Real Time Predictive Slice Height (PSH)
                            Reduce inspection time by running PSH simultaneously during standard inspection.

                            SUMO
                            Improve hardware utilization, with improved and optimized multicore processing.

                            SPAM with Variable Scan Path
                            Merge hardware scanning path and eliminate scanning path on non inspected region.

                            64 bits Image Reconstruction Processor (IRP)
                            Larger memory access helps to reduce image reconstruction time.</p>
                    </div>

            </div>
            </div>

        )}}


export default AXI