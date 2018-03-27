import React, {Component} from 'react';
import '../App.css';
import spea4060 from '../img/spea_4060.png'
import {Link} from 'react-router-dom'


class Spea_4060 extends Component {
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

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>SPEA最新的飞针测试机4060.
                            </h3>
                            <h4>最快，精度最高.
                                </h4>
                            <ul>
                                <li>双面测试
                                </li>
                                <li>实现X-Y-Z轴超高速运动
                                </li>
                                <li>多治具底部飞行探头
                                </li>
                                <li>飞行测试技术
                                </li>
                                <li>飞行测试技术
                                </li>
                                <li>008004封装快速，可靠的测试
                                </li>
                                <li>多种载板：在线模式+手动模式方式
                                </li>


                            </ul>
                        </div>
                        <div className="col-sm-6"><img src={spea4060} /> </div>

                    </section>

                    <nav className="navbar nav navbar-nav navbar-expand-lg navbar-light" >
                            <ul class="navbar-nav links">
                                <li class="nav-item"><Link to="/solutions/smt/product-detail/features">
                                    <a class="nav-link" href="#">特点</a></Link>
                                </li>
                            </ul>
                    </nav>

                    <div>
                        <h3>
                            高效，高速，低成本。
                        </h3>

                        <ul>
                            <li> XYZ线性马达移针速度更快</li>
                            <li>XYZ线性光学编码器植针Micro-SMD元件更精准</li>
                            <li>高精度的量测结果依靠的是我们创新的设计理念</li>
                            <li>Multi-Jig技术具有无与伦比的植针灵活性</li>
                            <li>灵活多选的装载方式：在线式-手动式-自动式</li>
                            <li>测试能力广泛：涵盖LED测试，激光3D测试，高分辨率AOI测试，4倍在线烧录</li>
                        </ul>
                        <h3>XYZ线性马达移针速度更快</h3>
                        <p>SPEA S2 版飞针设备高强度的线性马达可提高生产效率和持久性，这是其他动力技术无法保
                            证的。这就是为什么所有高端的生产设备（例如，最新的取放设备）应用该项顶级技术。
                        </p>
                        <ul>
                        <li>顶级的线性马达配置于XYZ轴</li>
                        <li>运动速度快</li>
                        <li>测试路线科学优化</li>
                        <li>免维护、无磨损</li>
                        <li>机械稳定性高</li>
                        </ul>

                        <h3>XYZ线性编码器, 使得微型SMD的植针精准无误

                        </h3>
                        <p>SPEA的飞针测试机为未来设备的微型化做好了充分的准备。XYZ轴上的高精度线性光学编码器让精准植针定位成为可能。全球首创，该技术能提供探针的真正定位反馈。
 </p>
                        <ul>
                        <li>XYZ轴配备顶级的线性光学编码器</li>
                        <li>微型贴片元件（008004封装）焊盘接触精确</li>
                        <li>柔性板/薄板测试可靠</li>
                        <li>定位量测稳定，持久</li>
                        <li>超快的Soft-Touch技术：对PCB板，微型贴片元件，无损伤，无针痕</li>
                        </ul>

                        <h3>创新的设备设计理念实现高精准的量测</h3>
                        <p>根据针和设备内置量测仪表的距离越短，所得的量测结果越快，越精准，这个简单的电子学定律，SPEA 设计出了全球独一无二的飞针设备。



                            动力和量测单元被直接集成在每个探针的顶部，实现了无法超越的测试速度和测试性能
                        </p>
                        <ul>
                            <li>量测性能和精度更高，可达到0.1Pf</li>
                            <li>信号更完整</li>
                            <li>无量测结果失真，抗干</li>
                            <li>即时信号采集准确</li>

                        </ul>
                        <h3>顶部和底部Multi-Jig技术使得植针更灵活</h3>
                        <p>测试探针简单

                            SPEA Flying Probes S2 测试机可以和常见的顶部和底部治具配套使用，能实现不同的测试技术和100%的可靠性。通过支持单面或双面飞针测试机，可充分了解专属SPEA的多治具技术扩展，探测灵活性、测试能力和整体生产力。</p>

                        <h3>无须在手动和在线模式之间选择</h3>
                        <p>Flying Probes S2 灵活，易用。同一款机器，既可以集成于自动化生产线，又可以和自动送板和出板的magazine设备配套使用，还可以手动单独使用。不需要任何的机械调试。</p>
                        <ul>
                            <li>手动+自动+在线的电路板装载方式都可以整合到同一个系统</li>
                            <li>无人化操作</li>
                            <li>不规则PCB板手动装载操作</li>
                            <li>穿越或回传操作</li>
                            <li>从左到右或者从右到左的运送操作</li>
                        </ul>
                        <h3>具有全覆盖的测试能力</h3>

                        <ol>
                            <li><h5>随着LED技术被日益广泛应用。我们的飞针S2设备专门为提供准确和高性价比的LED测试而设计</h5>
                                <ul>
                                    <li>每秒测试高达10PCS LED



                                        </li>
                                    <li>LED光线颜色测试（HSL值）</li>
                                    <li> LED红外光测试</li>
                                    <li>LED光强度测试</li>
                                    <li>
                                        对背景光和附近光的抗干扰能力强</li>
                                    <li>自动化的测试程式发展和参数阈值定义</li>
                                </ul>
                            </li>
                            <li><h5>激光3D测试</h5>
                                <p>最新的激光3D测试以最短的时间检测机械和制程缺陷</p>
                                <ul>
                                    <li>H＆SMD焊接工艺测试
                                    </li>
                                    <li>缺件测试</li>
                                    <li> 元件高度测试</li>
                                    <li>压接引脚连接性测试</li>
                                    <li>开路引脚</li>
                                    <li>引脚开路测试</li>
                                </ul>
                            </li>
                            <li><h5>NZT 3.0：每个电路网络只须检测一次，即可覆盖全部短路群。</h5>
                                <p>首次上电时，漏测的短路会对被测板造成损坏。

                                    用户无须亲自查找相关短路点。NZT3.0节点阻抗测试在上电之前以最短的时间会检测出短路点

                                    短路检测范围:</p>
                                <ul>
                                    <li> 焊盘


                                        </li>
                                    <li>PCB板内外层电路走线</li>
                                    <li>连接器引脚</li>
                                    <li>元件内部电路</li>
                                </ul>
                            </li>

                            <li><h5>高分辨率彩色光学测试</h5>
                                <p>高分辨率飞针摄像头提供精确可靠的光学测试，无需作业员。节省AOI测试站成本
                                   </p>
                                <ul>
                                    <li>元件识别测试</li>
                                    <li>元件方向判别测试</li>
                                    <li>字符和符号识别测试</li>
                                    <li>锡膏制程工艺测试</li>
                                    <li> 激光标识识别</li>
                                </ul>
                            </li>
                            <li><h5>4倍快速并行在线烧录</h5>
                                <p>
                                    S2 飞针设备内置烧录模块，可节省单独烧录成本，烧录速度比以往更快。

                                </p>
                                <ul>
                                    <li>真正的并行烧录，同时烧录元件数量高达4片。</li>
                                    <li>相比前代OBP版本，编成速度快达10倍</li>
                                    <li> 协议和接口兼容性广泛</li>
                                    <li>驱动库种类丰富</li>

                                </ul>
                            </li>
                        </ol>
                        <h3>自动化的应用开发平台</h3>
                        <p>无需专业技术人员开发和调试测试程序

                            CAD文档不再是必需的，测试程式会在短短几分钟内自动生成

                            程序调试快速自动化

                            自动化的不良板维修软件

                            用户操作界面友好，易用</p>
                        <h3>3款机型.
                            从新产品导入到量产</h3>
                        <p>对于进一步缩减测试成本和工程成本，新型S2飞针设备前进了一大步。

                            三款机型均可以满足高精度，高产能的要求</p>

                    </div>

            </div>
            </div>

        )}}


export default Spea_4060