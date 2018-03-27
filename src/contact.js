import React, {Component} from 'react';
import './App.css';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'

class Contact extends Component {
    render(){
        return (

            <div className="container">
            <div className="container-fluid">
                <div className="row" id="intro">
                    <section className="col-sm-6">
                        <h3>與我們聯繫</h3>

                        <p>江苏省苏州市工业园区翠园路星湖街交叉口金匙望湖B幢16楼</p>

                        <ul>
                            <li>Tel: +86 512 8068 9962</li>
                            <li>Fax: +86 512 8068 9961</li>
                        </ul>

                        <p>Need more information on our products? Kindly fill up the following enquiry form. A representative from our company will reply your enquiry shortly.</p>

                    </section>
                    <section className="col-sm-6">
                        <Map style={{height:'250px'}}
                            center={{lng: 120.724451, lat: 31.330919}} zoom="15">
                            <Marker position={{lng: 120.724451, lat: 31.330919}} />
                            <NavigationControl />
                            <InfoWindow position={{lng: 120.724451, lat: 31.330919}} text="建直光电" title="我们的位置"/>
                        </Map>
                    </section>

                </div>
            </div>

            </div>


            )}}

export default Contact