import React, {Component} from 'react';
import './App.css';
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
import jabil from './img/logos/clients/jabil.png'
import selcom from './img/logos/clients/selcom.png'
import plexis from './img/logos/clients/plexus.png'
import kimball from './img/logos/clients/kimball.png'
import quanta from './img/logos/clients/quanta.png'
import mitac from './img/logos/clients/mitac.png'
import usi from './img/logos/clients/usi.png'
import tdg from './img/logos/clients/tdg.png'
import lcfc from './img/logos/clients/lcfc.png'
import pegatron from './img/logos/clients/pegatron.png'
import wistron from './img/logos/clients/wistron.png'
import inventec from './img/logos/clients/inventec.png'
import shnsn from './img/logos/clients/shnsn.png'
import huabei from './img/logos/clients/huabei.png'


class Customers extends Component {
    render(){
        return (
            <div className="container">
                <div className="container-fluid product-page">
                    <h2>我们的客户</h2>
                    <div className="row">
                    </div>
                    <h3>CM</h3>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={flextronics} className="w-50"/>
                        </div>
                        <div className="col-sm-3">
                            <img src={jabil} className="w-50"/>
                        </div>
                        <div className="col-sm-3">
                            <img src={selcom} className="w-50"/>
                        </div>
                        <div className="col-sm-3 d-block mx-auto">
                            <img src={plexis} className="w-50"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 justify-content-center"><img src={kimball} className="w-50"/></div>
                        <div className="col-sm-3 justify-content-center"><img src={celetica} className="w-50" /></div>
                        <div className="col-sm-3 justify-content-center"><img src={garmin} className="w-50"/></div>
                        <div className="col-sm-3 justify-content-center"><img src={benchmark} className="w-50"/></div>
                    </div>
                    <h3 className="product-page">ODM</h3>
                    <div className="row">
                        <div className="col-sm-3 justify-content-center ">
                            <img src={quanta} className="w-50"/>
                        </div>
                        <div className="col-sm-3 justify-content-center ">
                            <img src={pegatron} className="w-50"/>
                        </div>
                        <div className="col-sm-3 justify-content-center">
                            <img src={foxconn} className="w-50"/>
                        </div>
                        <div className="col-sm-3 justify-content-center">
                            <img src={wistron} className="w-50"/>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-sm-3 justify-content-center"><img src={compal} className="w-50"/></div>
                        <div className="col-sm-3 justify-content-center"><img src={inventec} className="w-50" /></div>
                        <div className="col-sm-3 justify-content-center"><img src={mitac} className="w-50"/></div>
                        <div className="col-sm-3 justify-content-center"><img src={usi} className="w-50"/></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 justify-content-center"><img src={delta} className="w-50"/></div>
                        <div className="col-sm-3 justify-content-center"><img src={gbm} className="w-50" /></div>
                        <div className="col-sm-3 justify-content-center"><img src={ems_parner} className="w-50"/></div>
                        <div className="col-sm-3 justify-content-center"><img src={shnsn} className="w-50"/></div>
                    </div>
                    <h3>Locals and Others</h3>
                    <div className="row">
                        <div className="col-sm-3 justify-content-center ">
                            <img src={lcfc} className="w-50"/>
                        </div>
                        <div className="col-sm-3 justify-content-center ">
                            <img src={etron} className="w-50"/>
                        </div>
                        <div className="col-sm-3 justify-content-center">
                            <img src={tdg} className="w-50"/>
                        </div>
                        <div className="col-sm-3 justify-content-center">
                            <img src={huawei} className="w-25"/>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-sm-3 justify-content-center"><img src={baolong} className="w-50"/></div>
                        <div className="col-sm-3 justify-content-center"><img src={huabei} className="w-50" /></div>
                    </div>
                </div>
            </div>


        )}}


export default Customers