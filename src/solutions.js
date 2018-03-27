import React, {Component} from 'react';
import './App.css'
import th1000si from './img/th1000si.png'
import v510i from './img/v510i.jpg'
import linkways from './img/linkway_1.png'
import {Link} from 'react-router-dom'


class Solutions extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <div className="product-page">
                        <h3>解决方案</h3>
                        <section className="row" id="SMT-product-page">
                            <div className="card-group">
                                <div className="card"><img className="card-img-top img-responsive" src={v510i}/>
                                    <div className="card-body">
                                        <h6 className="card-title">SMT</h6>
                                        <Link to="/solutions/smt"><a href="#"
                                                                         class="btn btn-primary">查看详情</a></Link>
                                    </div>
                                </div>

                                <div className="card"><img className="card-img-bottom img-responsive " src={th1000si}/>
                                    <div className="card-body">
                                        <h6 className="card-title">半导体</h6>
                                        <Link to="/solutions/semi-conductor"><a href="#"
                                                                         class="btn btn-primary ">查看详情</a></Link>
                                    </div>
                                </div>

                                <div className="card"><img className="card-img-top img-responsive w-50 d-block mx-auto"
                                                           src={linkways}/>
                                    <div className="card-body">
                                        <h6 className="card-title">自动化</h6>
                                        <Link to="/solutions/linkways"><a href="#"
                                                                         class="btn btn-primary">查看详情</a></Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        )
    }
}

export default Solutions
