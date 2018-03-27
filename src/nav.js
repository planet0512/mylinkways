import React, {Component} from 'react';
import linkways from './img/linkways_logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import Linkways_Products from "./products/linkways_product";

class Nav extends Component {
    render() {
        return (
            <div className="overflow">
            <div className="background">
                <header>
                    <div className="container-fluid">
                        <nav className="navbar-nav navbar-expand-lg top-nav">
                            <ul className="navbar-nav mx-auto" id="#right-nav">
                                <li><a className="nav-brand" href="#"><img src={linkways} className="img-fluid w-80"/></a>
                                </li>
                                <ul className="search">
                                    <form className="form-inline">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                                        <button className="btn btnooutline-success my-2 my-sm-0 btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </ul>
                                <ul className="language">
                                    <li className="nav-item"><a className="nav-link" href="#">Chinese</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">English</a></li>
                                </ul>
                            </ul>

                        </nav>
                    </div>
                    <div className="container-fluid">
                        <nav className="navbar nav navbar-nav navbar-expand-lg navbar-light "id="bottom-nav" >
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                                <ul className="navbar-nav links mx-auto navbar-nav">
                                    <li className="nav-item"><Link to='/'>
                                        <a className="nav-link no-text-deco" href="">
                                            首页
                                        </a></Link>
                                    </li>
                                    <li className="nav-item"><Link to="/about#about">
                                        <a className="nav-link no-text-decor" href="#">关于建直</a></Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            产品方案
                                        </a>
                                    <li className="dropdown-menu" id="dropdown-a" aria-labelledby="navbarDropdownMenuLink">
                                   <li><a className="dropdown-item dropdown-toggle">SMT</a>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="/solutions/smt/aoi"><a className="dropdown-item">光学检测仪（AOI）</a></Link></li>
                                                    <li><Link to="/solutions/smt/ipm"><a className="dropdown-item">锡膏印刷机（Printer）</a></Link></li>
                                                    <li><Link to="/solutions/smt/SPI"><a className="dropdown-item">锡膏检测仪（SPI）</a></Link></li>
                                                    <li><Link to="/solutions/smt/axi"><a className="dropdown-item">3D在线全自动X光检测设备</a></Link></li>
                                                    <li><Link to="/solutions/smt/25X-ray"><a className="dropdown-item">2.5D X光分析设备
                                                    </a></Link></li>
                                                    <li><Link to="/solutions/smt/fluxing"><a className="dropdown-item">助焊剂喷射机(Fluxing)
                                                    </a></Link></li>
                                                    <li><Link to="/solutions/smt/x-ray-counter"><a className="dropdown-item">X光点料机
                                                    </a></Link></li>
                                                    <li><Link to="/solutions/smt/conformal-coating"><a className="dropdown-item">点胶机、Conformal Coating制程相关设备

                                                    </a></Link></li>
                                                    <li><Link to="/solutions/smt/spea"><a className="dropdown-item">飞针测试+在线ICT-SPEA

                                                    </a></Link></li>

                                                </ul>
                                   </li>
                                        <li><Link to="/solutions/semi-conductor"><a className="dropdown-item" href="#">半导体</a></Link></li>
                                        <li><Link to="/solutions/linkways"><a className="dropdown-item" href="#">自动化</a></Link></li>
                                    </li>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/customers"><a className="nav-link" href="#">我们的客户</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">新闻中心</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact"><a className="nav-link" href="#">联系我们</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
                </div>

)}}

export default Nav;
