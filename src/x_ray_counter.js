import React, {Component} from 'react';
import './App.css'
import th1000si from './img/th1000si.png'
import tr1000si from './img/tr1000si.jpg'
import v510i from './img/v510i.jpg'
import v810ixl from './img/v810ixl.png'
import v810ex from './img/v810ex.png'
import oc from './img/OC-SCAN-CCX-3.jpg'
import {Link} from 'react-router-dom'


class X_RAY_Counter extends Component {
    render() {
        return (
            <div>

            <div className="container">
            <div className="container-fluid">
                <div className="product-page">
                <h3>X光点料机</h3>
                <section className="row" id="SMT-product-page">
                    <section className="col-sm-4">
                        <div className="card h-100"><div className="h-100"><img className="card-img-top img-responsive d-block w-25 mx-auto" src={oc}/> </div>
                        <div className="card-body">
                    <h6 className="card-title">OC-SCAN®CCX-3
                    </h6>
                            <Link to="/solutions/smt/oc_scan"><a href="#" class="btn btn-primary">查看详情</a></Link>

                    </div>
                        </div>
                    </section>
                    <section className="col-sm-4">
                        <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive" src={v810ixl}/></div>
                            <div className="card-body">
                                <h6 className="card-title">Vitrox - TR1000SI</h6>
                                <Link to="/solutions/semi-conductor/tr1000s"><a href="#" class="btn btn-primary ">查看详情</a></Link>
                            </div>
                        </div>
                    </section>
                    
                        </section>
                </div>
            </div>
            </div>
            </div>
        )}}

export default X_RAY_Counter
