import React, {Component} from 'react';
import '../App.css'
import hyperion from '../img/hyperion.png'
import linkway_product from '../img/linkways_conformal.png'
import underfill from '../img/underfill.png'
import {Link} from 'react-router-dom'


class Conformal_Coating extends Component {
    render() {
        return (
            <div>

            <div className="container">
            <div className="container-fluid">
                <div className="product-page">
                <h3>点胶机、Conformal Coating制程相关设备</h3>
                <section className="row" id="SMT-product-page">
                    <section className="col-sm-4">
                        <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive w-50 d-block mx-auto" src={hyperion}/> </div></Link>
                        <div className="card-body">
                    <h6 className="card-title">GPD - Hyperion点胶机</h6>
                            <Link to="/solutions/hyperion"><a href="#" class="btn btn-primary">查看详情</a></Link>

                    </div>
                        </div>
                    </section>
                    <section className="col-sm-4">
                        <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive w-75 d-block mx-auto" src={linkway_product}/></div>
                            <div className="card-body">
                                <h6 className="card-title">Conformal Coating 检测+通孔焊点检测 - Linkways</h6>
                                <Link to="/solutions/conformal-coating-prodcut"><a href="#" class="btn btn-primary ">查看详情</a></Link>
                            </div>
                        </div>
                    </section>
                    <section className="col-sm-4">
                        <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive" src={underfill}/></div>
                            <div className="card-body">
                                <h6 className="card-title">SMT粘合剂、Under-Fill-Asec</h6>
                                <Link to="/solutions/conformal-coating-glue"><a href="#" class="btn btn-primary ">查看详情</a></Link>
                            </div>
                        </div>
                    </section>
                    
                        </section>
                </div>
            </div>
            </div>
            </div>
        )}}

export default Conformal_Coating
