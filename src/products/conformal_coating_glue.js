import React, {Component} from 'react';
import '../App.css';
import glue from '../img/underfill.png'
import conformal_1 from '../img/conformal_1.png'
import conformal_2 from '../img/conformal_2.png'
import {Link} from 'react-router-dom'


class Conformal_Coating_Glue extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">首页</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions"><a href="#">产品方案</a></Link></li>
                            <li class="breadcrumb-item"><Link to="/solutions/smt/product-detail"><a href="#">SMT</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Comformal Coating - Linkways</li>
                        </ol>
                    </nav>

                    <section className="row">
                        <div className="col-sm-6" id="product-detail">
                            <h3>SMT粘合剂方案
                            </h3>

                            <ul>
                                <li>Under-fill</li>
                                <li>Edge bond</li>
                                <li>Corner bond</li>
                                <li>Dam & Fill</li>
                                <li>Encapsulate</li>
                                <li>Solder ACP</li>
                            </ul>
                        </div>
                        <div className="col-sm-6"><img className=" w-75 d-block mx-auto" src={glue} /> </div>

                    </section>


            </div>
            </div>

        )}}


export default Conformal_Coating_Glue