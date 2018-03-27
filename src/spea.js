import React, {Component} from 'react';
import './App.css'
import spea4060 from './img/spea_4060.png'
import spea3030 from './img/spea_3030.png'
import {Link} from 'react-router-dom'


class Spea extends Component {
    render() {
        return (
            <div>

            <div className="container">
            <div className="container-fluid">
                <div className="product-page">
                <h3>X光检测设备</h3>
                <section className="row" id="SMT-product-page">
                    <section className="col-sm-4">
                        <div className="card h-100"><Link to='/solutions/smt/product-detail'><div className="h-100"><img className="card-img-top img-responsive" src={spea4060}/> </div></Link>
                        <div className="card-body">
                    <h6 className="card-title">SPEA 4060</h6>
                            <Link to="/solutions/SPEA4060"><a href="#" class="btn btn-primary">查看详情</a></Link>

                    </div>
                        </div>
                    </section>
                    <section className="col-sm-4">
                        <div className="card h-100"><div className="h-100"><img className="card-img-bottom img-responsive w-50 d-block mx-auto" src={spea3030}/></div>
                            <div className="card-body">
                                <h6 className="card-title">SPEA 3030</h6>
                                <Link to="/solutions/SPEA3030"><a href="#" class="btn btn-primary ">查看详情</a></Link>
                            </div>
                        </div>
                    </section>
                    
                        </section>
                </div>
            </div>
            </div>
            </div>
        )}}

export default Spea
