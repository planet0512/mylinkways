import React, {Component} from 'react';
import './App.css'
import foxconn from './img/logos/clients/foxconn.png'
import compal from './img/logos/clients/compal.png'
import baolong from './img/logos/clients/baolong.png'
import benchmark from './img/logos/clients/benchmark.png'
import celetica from './img/logos/clients/celetica.png'
import delta from './img/logos/clients/delta.png'
import ems_parner from './img/logos/clients/ems_parner.png'
import etron from './img/logos/clients/etron.png'
import garmin from './img/logos/clients/garmin.png'
import gbm from './img/logos/clients/gbm.png'
import huawei from './img/logos/clients/huawei.png'
import flextronics from './img/logos/clients/flextronics.png'

class Clients extends Component {
    render() {
        return (
            <div className="container">

                <div className="container-fluid">
                    <div className="row clients">
                        <section className="col-sm-12 middle" id="landing_middle">
                            <h3>我们的客户</h3>
                            <h4>国内外知名客户</h4>
                        </section>
                        <section className="col-sm-2"><img src={flextronics} className="img-fluid"/></section>
                        <section className="col-sm-2"><img src={foxconn} className="img-fluid"/></section>
                        <section className="col-sm-2"><img src={compal} className="img-fluid"/></section>
                        <section className="col-sm-2"><img src={baolong} className="img-fluid"/></section>
                        <section className="col-sm-2"><img className="img-fluid" src={benchmark}/></section>
                        <section className="col-sm-2"><img className="img-fluid" src={etron}/></section>


                    </div>
                    <div className="row clients">
                        <section className="col-sm-2 justify-content-center"><img src={celetica} className="img-fluid"/></section>
                        <section className="col-sm-2"><img src={ems_parner} className="img-fluid"/></section>
                        <section className="col-sm-2"><img src={delta} className="img-fluid"/></section>
                        <section className="col-sm-2"><img src={gbm} className="img-fluid"/></section>
                        <section className="col-sm-2"><img className="img-fluid" src={garmin}/></section>
                        <section className="col-sm-2"><img className="img-fluid w-25" src={huawei}/></section>


                    </div>
                </div>
            </div>

        )}}


export default Clients
