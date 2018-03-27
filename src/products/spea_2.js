import React, {Component} from 'react';
import '../App.css';
import spea3030 from '../img/spea_3030.png'
import {Link} from 'react-router-dom'


class Spea_3030 extends Component {
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
                            <h3>3030 系列

                            </h3>
                            <h4>多核多功能电路板测试机助力于您的产品测试。
                                </h4>
                            <ul>
                                <li>真正的并行测试: 8倍的产能
                                </li>
                                <li>超快的测试速度: 最低的测试成本
                                </li>
                                <li>超快的传动速度: 3 sec
                                </li>
                                <li>

                                </li>
                                <li>到100%覆盖率
                                </li>
                                <li>高性价比的Per-Pin 构架
                                </li>
                                <li>SPEA receivers的准确定位
                                </li>
                                <li>完全地可升级&客户定制化</li>
                                <li>全球有安装超过1000台3030设备</li>

                            </ul>
                        </div>
                        <div className="col-sm-6"><img src={spea3030} /> </div>

                    </section>

                    <nav className="navbar nav navbar-nav navbar-expand-lg navbar-light" >
                            <ul class="navbar-nav links">
                                <li class="nav-item"><Link to="/solutions/smt/product-detail/features">
                                    <a class="nav-link" href="#">特点</a></Link>
                                </li>
                            </ul>
                    </nav>

                    <div>
                        3030系列电路板测试机是一个可扩展的在线电路测试平台,为 最大范围的电子产品提供了最短的测试时间,卓越的检测精度和 100%测试覆盖率。

                        在线自动或手动上板,可在客户现场进行配置及升级并且经过多 年的使用,SPEA的设备是可靠的,3030电路板测试机满足了全球 电子产品制造商的测试和产能需求。

                        比传统的测试设备相比,SPEA的多核架构提高了8倍的产能,大 幅度的降低了测试成本。

                        整个3030系列的软件和硬件是通用的,相同的测试结果,便捷的 程序转化并且备件可以兼容。


                        Leonardo OS软件可以快速自动的生成测试程序,使非熟练的用 户在很短的时间内可以开发一个测试程序。
                        <h3>
                            真正的并行测试:
                            8倍的产能
                        </h3>
                        <p>3030电路板测试机可配备多达8个独立的内核。</p>

                            <p>每个核内配有独立的CPU,本地内存和仪器仪 表,能够在同时并行测试8块电路板。比较标准的ICT测试机相 比,SPEA 3030产能高达800%,从而最大限度地降低了测试成 本。此外,通过双行程配置,3030系统可提供不同的测试技术 (如:在线电路测试+功能测试,在线编程烧录等),并且优化 了两段行程之间的测试,极大的降低了时间和成本。

                        </p>

                        <h3>超快的测试速度</h3>
                        <p>相比于标准的ATE,3030的测试速度显著提高。每个内核配有专门的CPU核心保证仪表和PC之间没有 延迟。高性能继电器切换时间短。仪器仪表之间的架构,最大限 度地减少仪器在测试过程中的设置时间。一个单独的测试内核可 以同时执行不同的量测,进一步降低了测试时间。
                        </p>



<h3>                            超快的传动速度</h3>
                            <p>3030 IL配备了全新设计的传动模块,与上一代 相比,该模块的传动时间减半。仅仅3秒就足够处理一个中型的 PCBA,包括上板,压板和卸板。
                        </p>

                        <h3>自动化的应用开发平台

                        </h3>

                        <ul>
                        <li>在几分钟内自动生成测试程序</li>
                        <li>自动调试和优化</li>
                        <li>最小的应用程序开发成本:自动生成夹具的绕线档和钻孔档 • 自动识别和导入CAD文件
                        </li>
                        <li>自动生成测试报告</li>
                        <li>友好直观的图形界面</li>
                            <li>实时监测和分析生成过程</li>
                        </ul>

                        <h3>高性价比的Per-Pin 构架 </h3>
                        <p>通过测试程序进行3030 的通道配置。每根测试针可用于执行任何类型的测试。仪器/接口1:1的比例 保证了几个好处:更快的生成测试程序,便于ECO的管理,充分 的灵活性。
                        </p>
                        <ul>
                            <li>量测性能和精度更高，可达到0.1Pf</li>
                            <li>信号更完整</li>
                            <li>无量测结果失真，抗干</li>
                            <li>即时信号采集准确</li>

                        </ul>
                        <h3>完全地可升级&客户定制化</h3>
                        <p>3030 可以在工厂中装配或者通过仪器仪表仔现场进行升级,以满足测试要求。
                            它可以集成电源仪表 (如可编程交流/直流发生器,有源负载,功率矩阵,可编程电 源等),
                            也可以将第三方仪器集成到设备中,以提高测试能力和 产能。</p>
                        <h3>多功能测试机:通过一台设备达 到100%覆盖率</h3>
                        <p>设计制造SPEA 3030电路板测机保证了多年来PCB的完美工作,消除市场返修。我们是怎么做到的?通过100%测试电路板上的电子器件, 机械和机电元器件。

                        </p>

                        <h3>计算机-独立架构





                            </h3>

                        <p>通过SPEA 3030 计算机独立架构,测试程序储存

                            在测试机的CPU中,并且测试速度由测试机的CPU决 定。PC上的杀毒软件和其他应用程序不会影响测试速度。另外你 可以更换新的电脑,在任何时刻都不需要重新调试测试程序。

                            8内核结构,8倍的产能</p>
                        <h3>SPEA receivers的准确定位



                            </h3>
                        <p>测试机和receiver可以完美集成,两者都由SPEA设计。测试成本低,测试效率高。安全,精确的接触 电路板:当配备了电机驱动之后,可以根据程序调节
                            receiver的 下压速度来适应待测品的特性。
                            下降时保持在同一水平面,而且 也可以编辑下降的高度,以便在不同UUT的测试区域执行不同的 测试。系统仪表之间的无电缆连接,保证了仪表和夹
                            具信号的完 整性。3030 IL不需要压缩空气:3030 IL可以很容易的在工厂到 处移动。</p>
                        <h3>夹具和测试程序的转化




                        </h3>
                        <p>SPEA的标准架构使Leonardo OS的测试程序适用于

                            SPEA所有的电路板测试机,3030甚至飞针测试机。 你可以快速的把产品移到另一台设备生产,根据生产需要。此 外,为了最大限度地减少应用成本,3030 M的夹具与上一代的 SPEA系统完全兼容,反之亦然。
                        </p>
                        <h3>全球有安装超过1000台3030设备</h3>
                        <p>SPEA 3030 bed-of-nails testers have been proudly selected by 1000+ of OEMs and EMSs worldwide,
                            leaders in the following markets:</p>
                        <ul>
                        <li>汽车电子</li>
                        <li>工业</li>
                        <li>国防军工</li>
                        <li>消费电子</li>
                        <li>航空航天</li>
                        <li>电信</li>
                        <li>运输</li>
                        <li>照明</li>
                        <li>白色电器</li>
                        <li>安全</li>
                        </ul>


                    </div>

            </div>
            </div>

        )}}


export default Spea_3030