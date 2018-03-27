import React, {Component} from 'react';
import '../App.css';
import hyperion from '../img/hyperion.png'
import head_1 from '../img/head_1.png'
import {Link} from 'react-router-dom'


class Hyperion extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">SPEA 4060</li>
                        </ol>
                    </nav>

                    <section className="row" id="SMT-product-page">
                        <section className="col-sm-6">
                            <div className="h-100">
                                <div className="d-flex align-content-center">
                                <div className="w-30 float-left"> <img className="img-responsive" src={hyperion}/></div>
                                <div className=" w-50 float-left m-top">
                                <h5>点胶机-GPD</h5>
                                <ul>
                                    <li>高精度</li>
                                    <li>高稳定性</li>
                                    <li>紧凑的机身，更大的工作区域</li>
                                </ul>

                            </div>
                                </div>

                            </div>
                        </section>
                        <section className="col-sm-6">
                            <div className="h-100">
                                <div className="d-flex align-content-center">
                                    <div className="w-30 float-left"> <img className="img-responsive" src={head_1}/></div>
                                    <div className=" w-50 float-left m-top">
                                    <h5 className="card-title">点胶阀</h5>
                                    <ul>
                                        <li>螺旋阀-点锡膏应用；</li>
                                        <li>喷射阀-Under-Fill点胶;</li>
                                        <li>容积点胶阀-适用于超低粘度胶水；</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </section>
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
                            <th >规格</th>
                            <th > </th>
                        </tr>
                        <tr>
                            <td>占地面积 (XY)</td>
                            <td>73厘米 x 142厘米 (28英寸 x 56英寸)</td>
                        </tr>

                        <tr>
                            <td>工作区域　(X, Y, 高)　 </td>
                            <td>358毫米 x 508毫米 x 70毫米 (14.09英寸 x 20.0英寸 x 2.76英寸)</td>
                        </tr>
                        <tr>
                            <td>驱动系统 </td>
                            <td>线性马达</td>
                        </tr>
                        <tr>
                            <td>线性速度</td>
                            <td>1米/秒 (39英寸/秒)</td>
                        </tr>
                        <tr>
                            <td>加速</td>
                            <td>1 g</td>
                        </tr>
                        <tr>
                            <td>操作软件</td>
                            <td> Windows® 10</td>
                        </tr>
                        <tr>
                            <td>点胶阀数量</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>智能阀技术</td>
                            <td>3D Inspection, 5-sided Inspection, Mark Inspection,
                                Package Vision Inspection (PVI)</td>
                        </tr>
                        <tr>
                            <td>自动视觉系统</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td>传送机构</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td>双轨道</td>
                            <td>可选项</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                    <div>
                        <h3>特点</h3>
                        <p>在您的生产线上，若使用了Hyperion点胶设备，可在减少设备的设置
                            和处理时间的同时，提升产线的产能和整体质量 。
                            GPD Global® Hyperion是目前最先进的点胶设备，具备多种功能，
                            无疑可以提升您的制造环境和体验。平滑、安静和精确的线性
                            马达非常适合无尘室的生产环境。其独特的结构设计，也提
                            供了一个较大的工作区域，358毫米×508毫米（14.09英寸
                            ×20英寸）。 .</p>
                        <p>Hyperion系统，是以单阀头的配置来运行点胶操作，但允许
                            选择使用各种不同类型的点胶阀，其阀头的更换，简单易
                            行。每个阀都配有一
                            个智能芯片，使系统
                            能检测出所安装的阀的
                            类型，也能追踪查询阀的
                            使用周期和维护周期等。在更
                            换点胶阀时，需要操作员对针
                            嘴的各个坐标轴执行一个全自动校正程序。可用专
                            配的针嘴清洗器来自动清洗针嘴。</p>
                        <p>
                            Hyperion系统，既可以是离线式配置，也可以是在
                            线式配置。在线式配置拥有单个工作区域。在产品
                            运输过程中，传送带以动态的速度移动，快速和平
                            稳地把产品送到工作区域，跟传统的输送系统相
                            比，减少了产品在设备内输送所需的时间。
                        </p>
                        <p>
                            视觉图像清晰、细腻，为最佳的生产工艺提供了高
                            清晰度的画面——没有模糊的图像。摄像头被固定在一个高度可编程控制的坐标轴上来进
                            行自动调焦，以此来聚焦在不同高度或配置的零部件产品，无须再重调相机的高度或焦
                            距，从而节省了时间。
                        </p>
                        <p>
                            具有直观的操作界面的编程软件，配上大
                            尺寸的触摸显示屏，可简便、容易地进行
                            编程操作。使用者可以采用常用的方式和
                            方法，来使用操作这个功能丰富的软件系
                            统。编程既简单又快捷，各种格式的文件，
                            如：Gerber文件和3D-CAD文件等，也可以在
                            触摸屏上被用来编程操作。一些传统惯用的
                            方法，比如：点动步进和位置教导的方法，
                            或手动的数据录入等，同样可以使用。
                        </p>

                </div>
            </div>
            </div>


        )}}


export default Hyperion